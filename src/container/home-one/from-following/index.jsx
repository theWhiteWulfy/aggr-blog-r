import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage} from "gatsby-plugin-image";
import Swiper, { SwiperSlide } from "@components/swiper";
import SingleFollowingPosts from '../../../components/single-following-post';
import PostAuthorBox from '../../../components/post-author';

import { 
    FromFollowingWrap,
    FromFollowingHaderArea,
    FollowingSliderNavigation,
    FromFollowingLeftSide,
    FromFollowingRightSide,
    FollowingAddBanner

} from "./style";

function isObjectHasKey(obj, objKey){
    return Object.keys(obj).findIndex(key => key === objKey)
}

const FromFollowingArea = ({}) => {
    const fromFollowingQuery = useStaticQuery(graphql`
        query FromFollowingQuery {
            allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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
                                    gatsbyImageData(width: 750, height: 400, quality: 100)
                                }
                            }
                            author {
                                name
                                bio
                                description
                                fields {
                                    authorId
                                }
                                social {
                                    twitter
                                    google
                                    facebook
                                }
                                image {
                                    childImageSharp {
                                        gatsbyImageData(layout: FIXED, width: 80, height: 80, quality: 100)
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                            authorId
                            dateSlug
                        }
                        excerpt(pruneLength: 225)
                    }
                }
            }
        }
    `);
    const fromFollowingData = fromFollowingQuery.allMarkdownRemark.edges;
    let postsByAuthor = {};
    
    fromFollowingData.forEach(data => {
        const {authorId} = data.node.fields

        const keyIndex = isObjectHasKey(postsByAuthor, authorId);
        if(keyIndex < 0) {
            postsByAuthor = {
                ...postsByAuthor,
                [authorId]: [data]
            }
        } else {
            postsByAuthor[authorId].push(data)
        }
    });
    return (
        <FromFollowingWrap>
            <Container>
                <Row>
                    <Col>
                        <FromFollowingHaderArea>
                            <div className="section-title">
                                <h3>From Following</h3>
                            </div>

                            <FollowingSliderNavigation>
                                <div className="following-slider-button-next navigation-button">
                                    <i className="icofont-long-arrow-left"></i>
                                </div>
                                <div className="following-slider-button-prev navigation-button">
                                    <i className="icofont-long-arrow-right"></i>
                                </div>
                            </FollowingSliderNavigation>
                        </FromFollowingHaderArea>
                    </Col>
                </Row>

                <Swiper
                    layout={{
                        nav: "following-slider-navigation",
                        dots: "following-dots-style",
                    }}
                    navigation={{
                        nextEl: ".following-slider-button-next",
                        prevEl: ".following-slider-button-prev"
                    }}
                    slidesPerView={1}
                    spaceBetween={0}
                >
                    {Object.keys(postsByAuthor).map((key, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <Row className="gx-5">
                                    <FromFollowingLeftSide className="col">
                                        <Row className="gx-5">
                                            {postsByAuthor[key].slice(0, 4).map((post, i) => {
                                                return (
                                                    <Col md={6} sm={6} key={i}>
                                                        <SingleFollowingPosts
                                                            title={post.node.frontmatter.title}
                                                            thume_image={post.node.frontmatter.thume_image}
                                                            categories={post.node.frontmatter.categories}
                                                            body={post.node.excerpt}
                                                            date={post.node.frontmatter.date}
                                                            authorSlug={post.node.fields.authorId}
                                                            slug={post.node.fields.slug}
                                                            authorId={post.node.frontmatter.author.name}
                                                            dateSlug={post.node.fields.dateSlug}
                                                        />
                                                    </Col>     
                                                )
                                            })}

                                        </Row>
                                    </FromFollowingLeftSide>

                                    <FromFollowingRightSide className="col">
                                        <PostAuthorBox 
                                            postAuthorImage={postsByAuthor[key][0].node.frontmatter.author.image}
                                            postAuthorName={postsByAuthor[key][0].node.frontmatter.author.name}
                                            postAuthorBio={postsByAuthor[key][0].node.frontmatter.author.bio}
                                            postAuthordescription={postsByAuthor[key][0].node.frontmatter.author.description}
                                            authorSlug={postsByAuthor[key][0].node.frontmatter.author.fields.authorId}
                                        />

                                        <FollowingAddBanner>
                                            <a href="#" >
                                                <StaticImage src="../../../data/images/banners/home-following-banner.png" alt=""/>
                                            </a>
                                        </FollowingAddBanner>
                                    </FromFollowingRightSide>
                                </Row>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Container>    
        </FromFollowingWrap>
    )
}


export default FromFollowingArea
