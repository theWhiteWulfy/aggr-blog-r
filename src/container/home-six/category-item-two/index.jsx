import {useStaticQuery, graphql } from 'gatsby'
import {Container, Row, Col } from 'react-bootstrap'
import Button from '../../../components/shared/button'
import SingleBlogItem from '../../../components/single-blog-item-two'
import { slugify } from "@utils/functions";
import {
    CategorySection,
    SectionTitle,
    Title,
    MoreButtonBox,
} from './style'

const CategoryTwo = () => {
    const categoryQuery = useStaticQuery(graphql`
        query CategoryTwoQery {
            allMarkdownRemark(
                filter: {frontmatter: {categories: {elemMatch: {name: {eq: "Marketing"}}}}}
                sort: {fields: [frontmatter___date], order: DESC},
                limit: 3
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            date(formatString: "DD MMMM YYYY")
                            categories {
                                name
                                color
                            }
                            thume_image {
                                childImageSharp {
                                    gatsbyImageData(width: 352, height: 273, quality: 100)
                                }
                            }
                            author {
                                name
                            }
                        }
                        fields {
                            cats
                            slug
                            authorId
                            dateSlug
                        }
                        excerpt(pruneLength: 140)
                    }
                }
            }
        }
    `)
    const categoryData = categoryQuery.allMarkdownRemark.edges;

    return (
        <CategorySection>
            <Container>
                <Row>
                    <Col>
                        <SectionTitle>
                            <Title>
                                {categoryData[0].node.fields.cats[0]}
                            </Title>
                        </SectionTitle>
                    </Col>
                </Row>
                <Row className="row--30">
                    {categoryData && categoryData.map((item, i)=>{
                        return (
                            <Col lg={4} md={6} key={i}>
                                <SingleBlogItem
                                    title={item.node.frontmatter.title}
                                    thume_image={item.node.frontmatter.thume_image}
                                    date={item.node.frontmatter.date}
                                    slug={item.node.fields.slug}
                                    authorSlug={item.node.fields.authorId}
                                    postAuthor={item.node.frontmatter.author}
                                    dateSlug={item.node.fields.dateSlug}
                                    authorId={item.node.fields.authorId}
                                    body={item.node.excerpt}
                                />
                            </Col>
                        )
                    })}
                </Row>
                <Row>
                    <Col>
                        <MoreButtonBox>
                            <Button path={`/category/${slugify(categoryData[0].node.fields.cats[0])}`} size="large"> Show More <i className="icofont-long-arrow-right"></i> </Button>
                        </MoreButtonBox>
                    </Col>
                </Row>
            </Container>
        </CategorySection>
    )
}

export default CategoryTwo
