import React from 'react'
import Swiper, { SwiperSlide } from "@components/swiper";
import { graphql, useStaticQuery } from 'gatsby';
import MostPopulerItem from '@components/most-populer-item';
import { Container, Row, Col } from 'react-bootstrap';
import {
    MostPopulerArea,
    SectionTitleWrap,
    SectionTitle,
    MostPopularSliderNavigation,
    NavigationButton
} from './style'

const MostPopularArea = () => {
    const tredingArticleTwoQuery = useStaticQuery(graphql`
        query TredingArticleTwoQuery {
            tredingArticletwo: allMarkdownRemark(
                filter: {frontmatter: {is_trending_article: {eq: true}}}
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            date
                            thume_image {
                                childImageSharp {
                                    gatsbyImageData(width: 372, height: 272, quality: 100)
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
    
    const tredingArticleData = tredingArticleTwoQuery.tredingArticletwo.edges;

    return (
        <MostPopulerArea>
            <Container>
                <Row>
                    <Col xs={8}>
                        <SectionTitleWrap>
                            <SectionTitle>Most Popular</SectionTitle>
                        </SectionTitleWrap>
                    </Col>
                    <Col xs={4}>
                        <MostPopularSliderNavigation>
                            <NavigationButton className="most-populer-button-prev">
                                <i className="icofont-long-arrow-left"></i>
                            </NavigationButton>
                            <NavigationButton className="most-populer-button-next">
                                <i className="icofont-long-arrow-right"></i>
                            </NavigationButton>
                        </MostPopularSliderNavigation>
                    </Col>
                </Row>
                <Swiper
                    layout={{
                        nav: "most-populer-navigation",
                        dots: "most-populer-dots-style",
                    }}
                    navigation={{
                        nextEl: ".most-populer-button-next",
                        prevEl: ".most-populer-button-prev"
                    }}
                    centeredSlides= {false}
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
                    {tredingArticleData && tredingArticleData.map((item, index) => {
                        return (
                            <SwiperSlide key={`most-populer-${index}`}>
                                <MostPopulerItem
                                    title={item.node.frontmatter.title}
                                    thume_image={item.node.frontmatter.thume_image}
                                    slug={item.node.fields.slug}
                                    authorId={item.node.fields.authorId}
                                    postAuthor={item.node.frontmatter.author}
                                    date={item.node.frontmatter.date}
                                    dateSlug={item.node.fields.dateSlug}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Container>
        </MostPopulerArea>
    )
}

export default MostPopularArea
