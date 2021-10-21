import { graphql, useStaticQuery } from "gatsby";
import { Col, Container, Row } from 'react-bootstrap'
import ReacentArticalPost from '../../../components/reacent-artical-post'
import ReacentArticalVerticalPost from "../../../components/reacent-artical-vertical-post";
import {
    RecentArticleArea,
    RecentArticleHeaderTwo,
    SectionTitle,
    Title
} from './style'

const RecentArticleThree = () => {
    const recentArticleThree = useStaticQuery(graphql`
    query RecentArticleThree {
        allMarkdownRemark(limit: 9,sort: {fields: [frontmatter___date], order: DESC},) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM YYYY")
                        categories {
                            name
                            color
                        }
                        is_featured
                        thume_image {
                            childImageSharp {
                                gatsbyImageData(width: 360, height: 270, quality: 100)
                            }
                        }
                        author {
                            name
                        }
                    }
                    fields {
                        slug
                        authorId
                        dateSlug
                    }
                    excerpt(pruneLength: 135)
                }
            }
        }
    }
    `);
    const recentArticleData = recentArticleThree.allMarkdownRemark.edges;
    const arrLength = recentArticleData.length;
    let leftArray = []
    let rightArray = []
    let arrySlice = (62 / 100) * arrLength;

    recentArticleData.forEach((el, i)=> {
        if(i < arrySlice){
            leftArray.push(el)
        } else {
            rightArray.push(el)
        }
    });

    return (
        <RecentArticleArea>
            <Container>
                <Row>
                    <Col>
                        <RecentArticleHeaderTwo>
                            <SectionTitle>
                                <Title>Recent Article</Title>
                            </SectionTitle>
                        </RecentArticleHeaderTwo>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        {leftArray.map((post, i) => (
                            <ReacentArticalPost
                                key={`recent-large-${i}`}
                                title={post.node.frontmatter.title}
                                thume_image={post.node.frontmatter.thume_image}
                                categories={post.node.frontmatter.categories}
                                body={post.node.excerpt}
                                authorSlug={post.node.fields.authorId}
                                slug={post.node.fields.slug}
                                authorId={post.node.frontmatter.author.name}
                                dateSlug={post.node.fields.dateSlug} 
                            />
                        ))}
                    </Col>
                    <Col lg={4}>
                        {rightArray.map((post, i) => (
                            <ReacentArticalVerticalPost
                                key={`recent-large-${i}`}
                                title={post.node.frontmatter.title}
                                thume_image={post.node.frontmatter.thume_image}
                                categories={post.node.frontmatter.categories}
                                body={post.node.excerpt}
                                authorSlug={post.node.fields.authorId}
                                slug={post.node.fields.slug}
                                authorId={post.node.frontmatter.author.name}
                                dateSlug={post.node.fields.dateSlug} 
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        </RecentArticleArea>
    )
}

export default RecentArticleThree

    