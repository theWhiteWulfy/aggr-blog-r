import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NewsletterSubscribeThree from '../../../components/newsletter-subscribe-three'

import {NewsletterSubscribeWrap} from './style'

const NewsLettersArea = () => {
    return (
        <NewsletterSubscribeWrap>
            <Container>
                <Row>
                    <Col>
                        <NewsletterSubscribeThree/>
                    </Col>
                </Row>
            </Container>
        </NewsletterSubscribeWrap>
    )
}

export default NewsLettersArea
