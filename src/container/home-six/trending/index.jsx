import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {graphql, useStaticQuery } from "gatsby";
import Swiper, { SwiperSlide } from "@components/swiper";
import TrendingTody from '../../../components/trending-tody-six'
import {
    TrendingTodysArea,
    SliderNavigation,
    TrendingHeader,
    SectionTitleTwo,
    Title
} from './style'

const TrendingArea = () => {
    const tredingArticleQuery = useStaticQuery(graphql`
    query TredingArticleSixQuery {
        largeTredingArticle: allMarkdownRemark(
            filter: {frontmatter: {is_trending_article: {eq: true}}}
          ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
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

const tredingTodyData = tredingArticleQuery.largeTredingArticle.edges;

    return (
        <TrendingTodysArea>
            <Container>
                <Row>
                    <Col>
                        <TrendingHeader>
                            <SectionTitleTwo>
                                <Title>Trending Today’s</Title>
                            </SectionTitleTwo>
                            <SliderNavigation>
                                <div className="trending-slider-button-next navigation-button">
                                    <i className="icofont-long-arrow-left"></i>
                                </div>
                                <div className="trending-slider-button-prev navigation-button">
                                    <i className="icofont-long-arrow-right"></i>
                                </div>
                            </SliderNavigation>
                        </TrendingHeader>
                    </Col>
                    
                    <Swiper
                        layout={{
                            nav: "trending-navigation",
                            dots: "trending-dots-style",
                        }}
                        navigation={{
                            nextEl: ".trending-slider-button-next",
                            prevEl: ".trending-slider-button-prev"
                        }}
                        slidesPerView={3}
                        spaceBetween={30}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            560: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {tredingTodyData && tredingTodyData.map((trending, i) => {
                            return (
                                <SwiperSlide key={`trending-${i}`}>
                                    <TrendingTody
                                        title={trending.node.frontmatter.title}
                                        slug={trending.node.fields.slug}
                                        authorSlug={trending.node.fields.authorId}
                                        postAuthor={trending.node.frontmatter.author}
                                        dateSlug={trending.node.fields.dateSlug}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Row>
            </Container>
                   
        </TrendingTodysArea>
    )
}

export default TrendingArea
