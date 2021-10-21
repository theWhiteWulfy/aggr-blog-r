import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage} from "gatsby-plugin-image";
import {
    BottomAddBannerArea,
    BottomAddBannerBox,
    BottomAddText
} from "./style" 


const AddBanner = () => {
    return (
        <BottomAddBannerArea>
            <Container>
                <Row>
                    <Col lg={12}>
                        <BottomAddBannerBox href="#">
                            <StaticImage src="../../../data/images/banners/bottom-add-banner.jpg" alt=""/>
                            <BottomAddText>
                                All Food Item
                                <span>50% Off</span>
                            </BottomAddText>
                        </BottomAddBannerBox>
                    </Col>
                </Row>
            </Container>
        </BottomAddBannerArea>
    )
}

export default AddBanner
