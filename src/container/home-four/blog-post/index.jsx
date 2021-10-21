import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby';
import {
    RecentArticleArea,
} from "./style"
import SingleBlogItem from '../../../components/single-blog-item';

const BlogPostArea = () => {
    const blogPostFourQuery = useStaticQuery(graphql`
    query BlogPostFourQuery {
        allMarkdownRemark(limit: 8){
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date
                        thume_image {
                            childImageSharp {
                                gatsbyImageData(height: 400, width: 700, quality: 100)
                            }
                        }
                    }
                    fields {
                        slug
                        authorId
                        dateSlug
                    }
                    excerpt(pruneLength: 180)
                }
            }
        } 
    }
`);

const blogPostData = blogPostFourQuery.allMarkdownRemark.edges;
    return (
        <RecentArticleArea>
            <Container>
                <Row className="custom-row row--30">
                    {blogPostData && blogPostData.map((item, i) => {

                        return (
                            <Col key={i}>
                                <SingleBlogItem
                                    title={item.node.frontmatter.title}
                                    thume_image={item.node.frontmatter.thume_image}
                                    date={item.node.frontmatter.date}
                                    body={item.node.excerpt}
                                    dateSlug={item.node.fields.dateSlug}
                                    slug={item.node.fields.slug}
                                    authorId={item.node.fields.authorId}
                                />
                            </Col>
                        )

                    })}
                    
                </Row>
            </Container>
        </RecentArticleArea>
    )
}

export default BlogPostArea
