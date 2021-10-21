import React from 'react'
import { Container, Row } from 'react-bootstrap'
import {graphql, useStaticQuery } from "gatsby";
import Swiper, { SwiperSlide } from "@components/swiper";
import HeroSixPost from '../../../components/hero-six';
import {
    HeroSection,
    SliderNavigation
} from './style'

const HeroArea = () => {
    const heroSixQuery = useStaticQuery(graphql`
    query HeroSixQuery {
        HeroPost: allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        thume_image {
                            childImageSharp {
                                gatsbyImageData(width: 570, height: 425, quality: 100)
                            }
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

const heroData = heroSixQuery.HeroPost.edges;

    return (
        <HeroSection>
            <Container>
                <Row>
                    <Swiper
                        layout={{
                            nav: "hero-navigation",
                            dots: "hero-dots-style",
                        }}
                        navigation={{
                            nextEl: ".hero-slider-button-next",
                            prevEl: ".hero-slider-button-prev"
                        }}
                        slidesPerView={1}
                        spaceBetween={0}
                    >
                        {heroData && heroData.map((item, i) => {
                            return (
                                <SwiperSlide key={`trending-${i}`}>
                                    <HeroSixPost
                                        title={item.node.frontmatter.title}
                                        thume_image={item.node.frontmatter.thume_image}
                                        slug={item.node.fields.slug}
                                        authorSlug={item.node.fields.authorId}
                                        postAuthor={item.node.frontmatter.author}
                                        dateSlug={item.node.fields.dateSlug}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Row>
            </Container>
            <SliderNavigation>
                <div className="hero-slider-button-next navigation-button">
                    <i className="icofont-long-arrow-left"></i>
                </div>
                <div className="hero-slider-button-prev navigation-button">
                    <i className="icofont-long-arrow-right"></i>
                </div>
            </SliderNavigation>
        </HeroSection>
    )
}

export default HeroArea
