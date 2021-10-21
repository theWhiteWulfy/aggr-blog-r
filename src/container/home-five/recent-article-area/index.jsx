import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image";
import SingleBlogItem from '../../../components/single-blog-item'
import Button from '../../../components/shared/button';
import ArchivePostArea from '../archive-post';
import {
    SectionWrap,
    SectionTitle,
    Title,
    ButtonBox,
    ArchivePostInnerWrap,
    AddBannerArea
} from './style'
import FollowUsWidget from '../follow-us';


const RecentArticleArea = () => {
    const recentArticlesAreaQuery = useStaticQuery(graphql`
        query RecentArticlesTwoQuery {
            latestPost: allMarkdownRemark(
                sort: {fields: [frontmatter___date], order: DESC},
                limit: 6
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
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={8}>
                        <SectionTitle>
                            <Title>Recent Article</Title>
                        </SectionTitle>

                        <Row className="row--30">
                            {recentArticleData && recentArticleData.map((latestPosts, i) => {
                                return ( 
                                    <Col lg={6} md={6} key={i}>
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

                            <ButtonBox>
                                <Button path="/" size="large" shape="rounded-10"> Show More <i className="icofont-long-arrow-right"></i> </Button>
                            </ButtonBox>

                        </Row>
                    </Col>
                    <Col lg={4}>
                        <ArchivePostInnerWrap>
                                
                            <ArchivePostArea/>

                            <FollowUsWidget/>
                            
                            <AddBannerArea>
                                <Link to="/">
                                    <StaticImage src="../../../data/images/archive-post/add-banner-01.jpg" alt=""/>
                                </Link>
                            </AddBannerArea>

                        </ArchivePostInnerWrap> 

                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

export default RecentArticleArea
