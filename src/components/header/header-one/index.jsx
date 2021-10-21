import React from 'react'
import { Container, Row } from 'react-bootstrap'

const HeaderOneTop = () => {
    return (
        <HeaderTopArea>
            <Container>
                <Row>
                    <div className="col-lg-3 col-md-6 col-sm-6 order-1 order-lg-1">
                        <ul className="header-top-menu-list">
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Status</a></li>
                            <li><a href="#">Writers</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 order-3 order-lg-2">
                        <div className="header-top-contact-info">
                            <div className="header-top-single-contact-item">
                                <div className="header-top-contact-icon">
                                    <img src="assets/images/icons/contact-call.png" alt=""/>
                                </div>
                                <div className="header-top-contact-text text-size-small">
                                    <a href="tel:970262-1413">(970) 262-1413</a>
                                </div>
                            </div>

                            <div className="header-top-single-contact-item">
                                <div className="header-top-contact-icon">
                                    <img src="assets/images/icons/contact-emaill.png" alt=""/>
                                </div>
                                <div className="header-top-contact-text">
                                    <a href="mailto:address@gmail.com">address@gmail.com</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 order-2 order-lg-3">
                        <div className="header-top-right-side">
                            <p>Bangladesh</p>
                            <div className="wayder">
                                <span className="wayder-icon"><img src="assets/images/icons/wayder.png" alt=""/></span>
                                <span className="wayder-text">28° C</span>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </HeaderTopArea>
    )
}

export default HeaderOneTop
