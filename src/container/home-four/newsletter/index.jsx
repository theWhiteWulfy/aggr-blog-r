import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewsletterSubscribeFour from '../../../components/newsletter-subscribe-four'
import {
    NewsletterArea
} from "./style"


const Newsletter = () => {
    return (
        <NewsletterArea>
            <Container>
                <Row>
                    <Col>
                        <NewsletterSubscribeFour/>
                    </Col>
                </Row>
            </Container>
        </NewsletterArea>
    )
}

export default Newsletter
