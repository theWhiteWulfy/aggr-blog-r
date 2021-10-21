import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NewsletterSubscribeTwo from '../../../components/newsletter-subscribe-two'

import {NewsletterSubscribeWrap} from './style'

const NewsLettersArea = () => {
    return (
        <NewsletterSubscribeWrap>
            <Container>
                <Row>
                    <Col>
                        <NewsletterSubscribeTwo/>
                    </Col>
                </Row>
            </Container>
        </NewsletterSubscribeWrap>
    )
}

export default NewsLettersArea
