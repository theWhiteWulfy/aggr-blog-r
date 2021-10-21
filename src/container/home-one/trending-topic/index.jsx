import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Swiper, { SwiperSlide } from "@components/swiper";
import { graphql, useStaticQuery } from 'gatsby';
import TrendingTopicItems from '../../../components/trending-topics';
import {flatDeep} from "../../../utils/functions"
import NewsletterSubscribeOne from '../../../components/newsletter-subscribe';
import {
    BgGray1Area,
    TrendingTopicArea,
    TrendingTopicSectionTitle,
    TrendingTopicItemWrap,
    TrendingTopicNavigation,
    NavigationButton
} from "./style";


const TrendingTopics = () => {

    const trendingTopicsQuery = useStaticQuery(graphql`
        query TrendingTopicsQuery {
            allCategoriesJson(filter: {trending: {eq: true}}) {
                edges {
                    node {
                        name
                        color
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 160, height: 160, quality: 100)
                            }
                        }
                    }
                }
            }
        }
    `)

    const trendingTopicsData = trendingTopicsQuery.allCategoriesJson.edges;
     const categories = [...new Set(flatDeep(trendingTopicsData.map(td => td.node)))]

    return (
        <BgGray1Area>
            <TrendingTopicArea>
                <Container>
                    <Row>
                        <TrendingTopicSectionTitle>
                            <h3>Trending Topic</h3>
                            <TrendingTopicNavigation>
                                <NavigationButton className="trending-topic-button-prev">
                                    <i className="icofont-long-arrow-left"></i>
                                </NavigationButton>
                                <NavigationButton className="trending-topic-button-next">
                                    <i className="icofont-long-arrow-right"></i>
                                </NavigationButton>
                            </TrendingTopicNavigation>
                        </TrendingTopicSectionTitle>
                        <TrendingTopicItemWrap>

                            <Swiper
                                layout={{
                                    nav: "trending-topic-slider-navigation",
                                    dots: "trending-topic-dots-style",
                                }}
                                navigation={{
                                    nextEl: ".trending-topic-button-next",
                                    prevEl: ".trending-topic-button-prev"
                                }}
                                slidesPerView={5}
                                spaceBetween={35}
                                breakpoints={{
                                    320: {
                                        spaceBetween: 15,
                                        slidesPerView: 2,
                                    },
                                    480: {
                                        slidesPerView: 3,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                    },
                                    992: {
                                        slidesPerView: 5,
                                    },
                                }}
                            >
                            {categories && categories.map((cat, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <TrendingTopicItems
                                            name={cat.name}
                                            color={cat.color}
                                            image={cat.image}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                                    
                        </Swiper>
                            
                        </TrendingTopicItemWrap>
                    </Row>
                    <NewsletterSubscribeOne/>
                </Container>
            </TrendingTopicArea>
        </BgGray1Area>


    )
}

export default TrendingTopics
