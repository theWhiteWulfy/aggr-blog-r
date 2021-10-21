import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HeroCategory from '@components/hero-category';
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage} from "gatsby-plugin-image";
import { Link } from 'gatsby';
import HeroBlogPost from '../../../components/hero-blog-post';
import { 
    HeroOneArea,
    HeroInnerArea,
    HeroCategoryArea,
    HeroBlogPostArea,
    HeroBannerArea
} from "./style";


const HeroOne = () => {
    const heroBlogPostQuery = useStaticQuery(graphql`
        
        query HeroBlogPostQuery {
            categories: allCategoriesJson(limit: 4) {
                edges {
                    node {
                        name
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 260, height: 110, quality: 100)
                            }
                        }
                    }
                }
            }
            heroBlogPost:allMarkdownRemark(
                sort: {fields: [frontmatter___date], order: DESC},
                limit: 2
            ) {
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
                                    gatsbyImageData(width: 750, height: 400,quality: 100)
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
                        excerpt(pruneLength: 80)
                    }
                }
            }
        }
    `);
    const heroBlogPost = heroBlogPostQuery.heroBlogPost.edges;
    const {categories} = heroBlogPostQuery

    return (
        <HeroOneArea>
            <Container>
                <Row>
                    <Col lg={12}>
                        <HeroInnerArea>
                            <HeroCategoryArea>
                                {categories.edges.map(cat => (
                                    <HeroCategory 
                                        key={cat.node.name}
                                        name={cat.node.name}
                                        image={cat.node.image}
                                    />
                                ))}
                            </HeroCategoryArea>

                            <HeroBannerArea>
                                <Link to="/">
                                    <StaticImage src="../../../data/images/hero/hero-01.jpg" alt=""/>
                                </Link>
                            </HeroBannerArea>

                            <HeroBlogPostArea>
                                {heroBlogPost && heroBlogPost.map((post, i) => {  
                                    return(
                                        <HeroBlogPost
                                            key={`heropost-${i}`}
                                            title={post.node.frontmatter.title}
                                            categories={post.node.frontmatter.categories}
                                            body={post.node.excerpt}
                                            date={post.node.frontmatter.date}
                                            authorSlug={post.node.fields.authorId}
                                            slug={post.node.fields.slug}
                                            dateSlug={post.node.fields.dateSlug}
                                        />
                                    )
                                })}
                            </HeroBlogPostArea>
                        </HeroInnerArea>
                        
                    </Col>
                </Row>
            </Container>
        </HeroOneArea>
    )
}

export default HeroOne
