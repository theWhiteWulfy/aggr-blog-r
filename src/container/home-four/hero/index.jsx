import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image";
import Swiper, { SwiperSlide } from "@components/swiper";
import HeroFourPost from '../../../components/hero-four';
import {
    HeroAreaFour,
    HeroInner,
    HeroFourImage,
    HeroFourInnerImage

} from './style'
const HeroFourArea = () => {

    const heroSlidrPostQuery = useStaticQuery(graphql`
        query HeroFourSlidrPostQuery {
            allMarkdownRemark (
                filter: {frontmatter: {is_featured: {eq: true}}}
                limit: 3
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
                            author {
                                name
                            }
                        }
                        fields {
                            slug
                            authorId
                            dateSlug
                        }
                        excerpt(pruneLength: 85)
                    }
                }
            }
        }
    `);
    const heroSlidrPostData = heroSlidrPostQuery.allMarkdownRemark.edges;
    return (
        <HeroAreaFour>
            <Swiper
                layout={{
                    nav: "hero-four-navigation",
                    dots: "hero-four-dots-style",
                }}
                navigation={{
                    nextEl: ".hero-four-slider-button-next",
                    prevEl: ".hero-four-slider-button-prev"
                }}
                slidesPerView={1}
                spaceBetween={0}
            >
                {heroSlidrPostData && heroSlidrPostData.map((post, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <HeroInner>
                                <Container>
                                    <HeroFourPost
                                       key={`heroFourPost-${i}`}
                                       title={post.node.frontmatter.title}
                                       categories={post.node.frontmatter.categories}
                                       body={post.node.excerpt}
                                       authorSlug={post.node.fields.authorId}
                                       slug={post.node.fields.slug}
                                       authorId={post.node.frontmatter.author.name}
                                       dateSlug={post.node.fields.dateSlug} 
                                    />
                                </Container> 
                            </HeroInner>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <HeroFourImage>
                <Container>
                    <Row>
                        <Col lg={7} md={10} className="m-auto">
                            <HeroFourInnerImage>
                                <StaticImage  src="../../../data/images/hero/home-4-hero-image-01.jpg" alt="" />
                            </HeroFourInnerImage>
                        </Col>
                    </Row>
                </Container>
            </HeroFourImage>

        </HeroAreaFour>
    )
}

export default HeroFourArea

