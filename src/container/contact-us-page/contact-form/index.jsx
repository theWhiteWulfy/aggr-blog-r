import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContactFormBox from '../../../components/contact-form'
import {ContactFromWrapper, SectionTitle, Title, ContactUsMap, Iframe} from './style'
const ContactFormArea = () => {
    return (
        <ContactFromWrapper>
            <Container>
                <Row className="gx-5 align-items-center">
                    <Col lg={5}>
                        <SectionTitle>
                            <Title>Get In Touch</Title>
                        </SectionTitle>
                        
                        <ContactFormBox/>

                    </Col>
                    <Col lg={{span: 6, offset: 1 }} >
                        <ContactUsMap>
                            <Iframe 
                                title="Google Map" 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8402891185374!2d144.95373631590425!3d-37.81720974201477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2ssg!4v1607294780661!5m2!1sen!2ssg"
                            ></Iframe>
                        </ContactUsMap>
                    </Col>
                </Row>
            </Container>
        </ContactFromWrapper>
    )
}

export default ContactFormArea
