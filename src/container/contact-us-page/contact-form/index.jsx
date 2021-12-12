import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactFormBox from "../../../components/contact-form";
import {
    ContactFromWrapper,
    SectionTitle,
    Title,
    ContactUsMap,
    Iframe,
} from "./style";
const ContactFormArea = () => {
    return (
        <ContactFromWrapper>
            <Container>
                <Row className="gx-7 align-items-center">
                    <Col lg={7}>
                        <SectionTitle>
                            <Title>Get In Touch</Title>
                        </SectionTitle>

                        <ContactFormBox />
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}></Col>
                </Row>
            </Container>
        </ContactFromWrapper>
    );
};

export default ContactFormArea;
