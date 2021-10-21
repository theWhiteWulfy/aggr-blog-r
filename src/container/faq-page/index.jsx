import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {FaqWrapper, FaqSectionTitle, FaqsTitle, FaqContentWrap } from './style'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
const FaqArea = () => {
   
    const faqSectionQuery = useStaticQuery(graphql`
        query FaqSectionQuery {
            faqJson(id: {eq: "faq-area"}) {
                heading
                image1 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                faq {
                    id
                    content
                    title
                }
            }
        }
    `)

    const {heading, image1, faq} = faqSectionQuery.faqJson;
    const image = getImage(image1);
    return (
        <FaqWrapper>
            <Container>
                <Row>
                    <Col>
                        <Row className="gx-0 align-items-center faq-box-wrap">
                            <Col lg={6}>
                                <FaqSectionTitle>
                                    <GatsbyImage image={image} alt=""/>
                                    <FaqsTitle dangerouslySetInnerHTML={{ __html: heading }}/>
                                </FaqSectionTitle>
                            </Col>
                            <Col lg={6}>
                                <FaqContentWrap>
                                    <Accordion>
                                        {
                                            faq.map((el, index) => {
                                                return (
                                                    <AccordionItem id={el.id} key={el.id}>
                                                        <AccordionItemHeading>
                                                            <AccordionItemButton className="acc-btn">
                                                                <span className="number-of-accordion">{`0${index+1}`}</span> 
                                                                {el.title}
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <div className="card-body">
                                                                {el.content}
                                                            </div>
                                                        </AccordionItemPanel>
                                                    </AccordionItem>
                                                )
                                            })
                                        }
                                    </Accordion>
                                </FaqContentWrap>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </FaqWrapper>
    )
}

export default FaqArea
