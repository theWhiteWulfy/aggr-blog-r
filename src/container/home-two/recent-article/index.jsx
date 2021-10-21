import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import SingleBlogItem from '../../../components/single-blog-item'
import { Container, Row, Col } from 'react-bootstrap';
import {
    RecentArticleArea,
    SectionTitleArea,
    Title
} from './style'
const RecentArticlesArea = () => {

    const recentArticlesAreaQuery = useStaticQuery(graphql`
        query RecentArticlesQuery {
            latestPost: allMarkdownRemark(
                sort: {fields: [frontmatter___date], order: DESC},
                limit: 9
              ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            date(formatString: "DD MMMM YYYY")
                            format
                            is_featured
                            thume_image {
                                childImageSharp {
                                    gatsbyImageData(width: 440, height: 304, quality: 100)
                                }
                            }
                        }
                        fields {
                            slug
                            authorId
                            dateSlug
                        }
                        excerpt(pruneLength: 125)
                    }
                }
            }
            
        }
    `);

    const recentArticleData = recentArticlesAreaQuery.latestPost.edges;

    return (
        <RecentArticleArea>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitleArea>
                            <Title>Recent Article</Title>
                        </SectionTitleArea>
                    </Col>
                </Row>
                <Row className="gx-5">
                    {recentArticleData && recentArticleData.map((latestPosts, i) => {
                        return ( 
                            <Col lg={4} md={6} key={i}>
                                <SingleBlogItem
                                    title={latestPosts.node.frontmatter.title}
                                    thume_image={latestPosts.node.frontmatter.thume_image}
                                    date={latestPosts.node.frontmatter.date}
                                    slug={latestPosts.node.fields.slug}
                                    body={latestPosts.node.excerpt}
                                    authorId={latestPosts.node.fields.authorId}
                                    dateSlug={latestPosts.node.fields.dateSlug}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </RecentArticleArea>
    )
}

export default RecentArticlesArea
