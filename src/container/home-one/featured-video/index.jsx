import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import FeaturedVideoItems from '@components/featured-video';
import FeaturedSmallVideoItems from '@components/featured-small-video';
import StayInTouchs from '@components/stay-in-touch';
import { graphql, useStaticQuery } from "gatsby";
import LatestPostArea from '../../latest-post';

import {
    FeaturedVideoWrap,
    FeaturedVideoCol8,
    FeaturedVideoBox,
    LatestPostCol4,

} from "./style";

const FeaturedVideoArea = () => {
    const featuredVideoAreaQuery = useStaticQuery(graphql`
        query SideLatestPostsQueryQuery {
            largeVideoPost: allMarkdownRemark(
                filter: {frontmatter: {format: {eq: "video"}}}
                limit: 1
              ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            video_link
                            thume_image {
                                childImageSharp {
                                    gatsbyImageData(width: 460, height: 450, quality: 100)
                                }
                            }
                            date
                            categories {
                                name
                                color
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
                    }
                }
            }
            mediumVideoPost: allMarkdownRemark(
                filter: {frontmatter: {format: {eq: "video"}}}
                limit: 1
                skip: 1
              ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            video_link
                            thume_image {
                                childImageSharp {
                                    gatsbyImageData(width: 460, height: 160, quality: 100)
                                }
                            }
                            date
                            categories {
                                name
                                color
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
                    }
                }
            }
            smallVideoPost: allMarkdownRemark(
                filter: {frontmatter: {format: {eq: "video"}}}
                limit: 3
                skip: 2
              ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            video_link
                            thume_image {
                                childImageSharp {
                                    gatsbyImageData(width: 340, height: 160, quality: 100)
                                }
                            }
                            date
                            categories {
                                name
                                color
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
                    }
                }
            }
        }
    `);
    const largeVideoPostsData = featuredVideoAreaQuery.largeVideoPost.edges;
    const mediumVideoPostsData = featuredVideoAreaQuery.mediumVideoPost.edges;
    const smallVideoPostsData = featuredVideoAreaQuery.smallVideoPost.edges;

    return (
        <FeaturedVideoWrap>
            <Container>
                <Row className="gx-5">
                    <FeaturedVideoCol8>

                        <div className="featured-video-haader">
                            <div className="section-title mb-5">
                                <h3>Featured Video</h3>
                            </div>
                        </div> 

                        <FeaturedVideoBox>
                            <Row className="gx-5">
                                <Col lg={7} md={6}>
                                    {largeVideoPostsData && largeVideoPostsData.map((followingBlog, i) => {
                                        return (
                                            <FeaturedVideoItems
                                                key={i}
                                                title={followingBlog.node.frontmatter.title}
                                                thume_image={followingBlog.node.frontmatter.thume_image}
                                                video_link={followingBlog.node.frontmatter.video_link}
                                                categories={followingBlog.node.frontmatter.categories}
                                                date={followingBlog.node.frontmatter.date}
                                                authorSlug={followingBlog.node.fields.authorId}
                                                slug={followingBlog.node.fields.slug}
                                                authorId={followingBlog.node.frontmatter.author.name}
                                                dateSlug={followingBlog.node.fields.dateSlug}
                                            />
                                        );
                                    })}

                                    {mediumVideoPostsData && mediumVideoPostsData.map((followingBlog, i) => {
                                        return (
                                            <FeaturedVideoItems
                                                key={i}
                                                title={followingBlog.node.frontmatter.title}
                                                thume_image={followingBlog.node.frontmatter.thume_image}
                                                video_link={followingBlog.node.frontmatter.video_link}
                                                categories={followingBlog.node.frontmatter.categories}
                                                date={followingBlog.node.frontmatter.date}
                                                authorSlug={followingBlog.node.fields.authorId}
                                                slug={followingBlog.node.fields.slug}
                                                authorId={followingBlog.node.frontmatter.author.name}
                                                dateSlug={followingBlog.node.fields.dateSlug}
                                            />
                                        );
                                    })}

                                </Col>
                                <Col lg={5} md={6}>
                                    {smallVideoPostsData && smallVideoPostsData.map((followingBlog, i) => {
                                        return (
                                            <FeaturedSmallVideoItems
                                                key={i}
                                                title={followingBlog.node.frontmatter.title}
                                                thume_image={followingBlog.node.frontmatter.thume_image}
                                                video_link={followingBlog.node.frontmatter.video_link}
                                                categories={followingBlog.node.frontmatter.categories}
                                                date={followingBlog.node.frontmatter.date}
                                                authorSlug={followingBlog.node.fields.authorId}
                                                slug={followingBlog.node.fields.slug}
                                                authorId={followingBlog.node.frontmatter.author.name}
                                                dateSlug={followingBlog.node.fields.dateSlug}
                                            />
                                        );
                                    })}
                                </Col>
                            </Row>
                        </FeaturedVideoBox>
                    </FeaturedVideoCol8>

                    <LatestPostCol4>
                        <LatestPostArea/>

                        <StayInTouchs/>

                    </LatestPostCol4>

                </Row>
            </Container>
        </FeaturedVideoWrap>
    )
}

export default FeaturedVideoArea
