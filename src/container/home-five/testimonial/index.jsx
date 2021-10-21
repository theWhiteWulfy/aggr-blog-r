import { jsx } from "theme-ui";
import { Container, Row, Col } from 'react-bootstrap'
import TestimonialItems from '@components/testimonial'
import Swiper, { SwiperSlide } from "@components/swiper";
import { graphql, useStaticQuery } from 'gatsby';
import {
    BgGrayColor,
    SectionTitleWrap,
    SubTitle,
    TestimonialWrap,
    TestimonialSliderArea, 
    TestimonialSliderNavigationTwo,
    NavigationButton
} from './style'

const TestimonialArea = () => {
    const testimonialQuery = useStaticQuery(graphql`
        query TestimonialFiveQuery {
            testimonialJson(id: {eq: "testimonial-area"}) {
                section_title {
                    title
                    subTitle
                }
                testimonial {
                    images {
                        childrenImageSharp {
                            gatsbyImageData(quality: 100)
                        }
                    }
                    designation
                    name
                    title
                    desText
                }
            }
        }
      
    `)
    const {
        section_title: { title, subTitle },
        testimonial
    } = testimonialQuery.testimonialJson;

    return (
        <BgGrayColor>
            <TestimonialWrap sx={{pb: ["80px", "100px"]}}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <SectionTitleWrap>
                                <SubTitle>{subTitle}</SubTitle>
                                <h2 className="title">{title}</h2>
                            </SectionTitleWrap>
                        </Col>
                    </Row>
                    <TestimonialSliderArea>
                        <Swiper
                            layout={{
                                nav: "testimonial-slider-navigation",
                                dots: "testimonial-dots-style",
                            }}
                            navigation={{
                                nextEl: ".testimonial-button-next",
                                prevEl: ".testimonial-button-prev"
                            }}
                            slidesPerView={3}
                            spaceBetween={30}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                480: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            
                            {testimonial && testimonial.map((itemData, i) =>{
                                return(
                                    <SwiperSlide key={i}>
                                        <TestimonialItems
                                            images={itemData.images.childrenImageSharp}
                                            name={itemData.name}
                                            designation={itemData.designation}
                                            title={itemData.title}
                                            desText={itemData.desText}                         
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>

                        <TestimonialSliderNavigationTwo>
                            <NavigationButton className="testimonial-button-next">
                                <i className="icofont-long-arrow-left"></i>
                            </NavigationButton>
                            <NavigationButton className="testimonial-button-prev">
                                <i className="icofont-long-arrow-right"></i>
                            </NavigationButton>
                        </TestimonialSliderNavigationTwo>

                    </TestimonialSliderArea>

                </Container>
            </TestimonialWrap>
        </BgGrayColor>
    )
}

export default TestimonialArea
