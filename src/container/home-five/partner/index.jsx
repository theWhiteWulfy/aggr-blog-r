import React from 'react'
import Swiper, { SwiperSlide } from "@components/swiper";
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import PartnerItem from '../../../components/partner';
import {
    PartnerWrap,
    TrustedPartnersBox,
    SectionTitleThree,
    Title
} from './style'

const PartnerArea = () => {
    const partnerAreaQuery = useStaticQuery(graphql`
        query PartnerTwoQuery {
            allPatnerJson {
                edges {
                    node {
                        id
                        images {
                            childImageSharp {
                                gatsbyImageData(quality: 100)
                            }
                        }
                    }
                }
            }
        }
    `);
    
    const partnerAreaData = partnerAreaQuery.allPatnerJson.edges;

    return (
        <PartnerWrap>
            <Container>
                <Row>
                    <Col>
                        <SectionTitleThree>
                            <Title>Trusted Partners:</Title>
                        </SectionTitleThree>
                    </Col>
                </Row>
                <TrustedPartnersBox>
                    <Swiper
                        layout={{
                            nav: "partner-navigation",
                            dots: "partner-dots-style",
                        }}
                        navigation={{
                            nextEl: ".partner-button-next",
                            prevEl: ".partner-button-prev"
                        }}
                        centeredSlides= {false}
                        slidesPerView={1}
                        spaceBetween={20}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            560: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                            {partnerAreaData && partnerAreaData.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <PartnerItem
                                            img={item.node.images}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                </TrustedPartnersBox>
            </Container>
        </PartnerWrap>
    )
}

export default PartnerArea
