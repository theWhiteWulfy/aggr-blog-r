import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage} from "gatsby-plugin-image";
import Button from "../../components/shared/button"
import {
    NewsletterSubscribeInner,
    Title,
    SectionTitle,
    NewsletterInputBox,
    NewsletterInput,
    ButtonBox,
    NewsletterInnerImage

} from "./style";



const NewsletterSubscribeOne = () => {
    return (
        <NewsletterSubscribeInner>
            <Row className="align-items-center">
                <Col lg={3}>
                    <SectionTitle>
                        <Title>Subscribe For Newsletter</Title>
                    </SectionTitle>
                </Col>
                <Col lg={9}>
                    <NewsletterInputBox>
                        <NewsletterInput 
                            type="text" 
                            placeholder="Enter your email"
                        />
                        <ButtonBox>
                            <Button
                                path="/"
                                size="large"
                                color="primary"
                            > Subscribe Now
                            </Button>
                        </ButtonBox>
                    </NewsletterInputBox>
                </Col>
            </Row>
            <NewsletterInnerImage>
                <StaticImage className="newsletter-image-01" src="../../data/images/shap/1-newsletter.png" alt=""/>
                <StaticImage className="newsletter-image-02" src="../../data/images/shap/2-newsletter.png" alt=""/>
            </NewsletterInnerImage>
        </NewsletterSubscribeInner>
    )
}

export default NewsletterSubscribeOne
