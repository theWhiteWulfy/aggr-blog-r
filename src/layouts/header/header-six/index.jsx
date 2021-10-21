/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import MainMenu from "../../../components/menu/main-menu";
import MobileNavMenu from "../../../components/menu/mobile-menu";
import Button from "../../../components/shared/button";
import Social, {SocialLink} from "../../../components/social";

import { 
    HeaderWrap, 
    HeaderTopArea,
    OfferNotification,
    OfferText,
    HeaderBottomArea,
    HeaderTopLeft,
    HeaderTopRight,
    Logo,
    HeaderMidRightSide,
    MainMenuArea,
    HeaderActionArea,
    MobileMenuArea,
    OffCanvasInner,
    MobileMenuBtn,
    OffCanvasContent,
    OffCanvasHeader,
    CloseAction,
    ButtonClose
} from "./style";

const HeaderSix = () => {
    const allmenuData = useStaticQuery(graphql`
        query AllmenuSixQuery {
            allMenuJson {
                edges {
                    node {
                        id
                        text
                        link
                        isSubmenu
                        submenu {
                            link
                            text
                        }
                    }
                }
            }
        }
    `);
    const menuData = allmenuData.allMenuJson.edges;


    // OfCanvas Menu
    const [ofcanvasOpen, setOfcanvasOpen] = useState(false);

    // OfCanvas Menu Open & Remove
    const ofcanvasHandaler = () => {
        setOfcanvasOpen((prev) => !prev);
    };

    return (
        <HeaderWrap>
            <HeaderTopArea>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={9} md={6}>
                            <HeaderTopLeft>
                                <OfferNotification>Get all 68 premium WordPress themes full free!  
                                    <OfferText> Limited time offer.</OfferText> 
                                    <Button path="/login" size="xsmall" color="warning" shape="rounded-10">Get it now</Button>
                                </OfferNotification>
                            </HeaderTopLeft>
                        </Col>
                        <Col lg={3} md={6}>
                            <HeaderTopRight>
                                <Social 
                                    sx={{ mt: "5px", mb: "5px" }}
                                    space={15}
                                    variant="texted"
                                    size="sm"
                                >
                                    <SocialLink href="https://www.facebook.com/"><i className="icofont-facebook"></i></SocialLink>
                                    <SocialLink href="https://www.skype.com/"><i className="icofont-skype"></i></SocialLink>
                                    <SocialLink href="https://twitter.com/home/"><i className="icofont-twitter"></i></SocialLink>
                                    <SocialLink href="https://www.linkedin.com/"><i className="icofont-linkedin"></i></SocialLink>
                                </Social>
                            </HeaderTopRight>
                        </Col>

                    </Row>
                </Container>
            </HeaderTopArea>
            <HeaderBottomArea>
                <Container >
                    <Row className="align-items-center">
                        <Col lg={3} md={3} xs={5}>
                            <Logo>
                                <Link to="/">
                                    <StaticImage src="../../../data/images/logo/logo-5-black.png" alt=""/>
                                </Link>
                            </Logo>
                        </Col>
                        <Col lg={9} md={9} xs={7}>
                            <HeaderMidRightSide>
                                <MainMenuArea className="navigation-menu-black">
                                    <MainMenu allmenuData={menuData} />
                                </MainMenuArea>
                                <HeaderActionArea>
                                    <MobileMenuBtn
                                        onClick={ofcanvasHandaler}
                                        onKeyDown={ofcanvasHandaler}
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </MobileMenuBtn>
                                    
                                </HeaderActionArea>
                                <MobileMenuArea
                                    className={`${ofcanvasOpen ? "mobile-menu-open" : ""}`}
                                >
                                    <OffCanvasInner>
                                        <div
                                            className="OffCanvasContent"
                                            onClick={ofcanvasHandaler}
                                            onKeyDown={ofcanvasHandaler}
                                            role="button"
                                            tabIndex={0}
                                        ></div>
                                        <OffCanvasContent>
                                            <OffCanvasHeader>
                                                <CloseAction>
                                                    <ButtonClose
                                                        onClick={ofcanvasHandaler}
                                                        onKeyDown={ofcanvasHandaler}
                                                    >
                                                        <i className="icofont-close"></i>
                                                    </ButtonClose>
                                                </CloseAction>
                                            </OffCanvasHeader>

                                            <MobileNavMenu MobilemenuData={menuData} />
                                        </OffCanvasContent>
                                    </OffCanvasInner>
                                </MobileMenuArea>

                            </HeaderMidRightSide>
                        </Col>

                    </Row>
                </Container>
            </HeaderBottomArea>
            
        </HeaderWrap>
    );
};

export default HeaderSix;
