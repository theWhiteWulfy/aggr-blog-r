/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import MainMenu from "../../../components/menu/main-menu";
import MobileNavMenu from "../../../components/menu/mobile-menu";
import Button from "../../../components/shared/button";

import {
    HeaderWrap,
    HeaderBottomArea,
    Logo,
    HeaderLeft,
    HeaderMidRightSide,
    SingleActionItem,
    ButtonAction,
    MainMenuArea,
    HeaderActionArea,
    MobileMenuArea,
    OffCanvasInner,
    MobileMenuBtn,
    OffCanvasContent,
    OffCanvasHeader,
    CloseAction,
    ButtonClose,
} from "./style";

const HeaderFive = () => {
    const allmenuData = useStaticQuery(graphql`
        query AllmenuFiveQuery {
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
            <HeaderBottomArea>
                <Container fluid className="container-custom-150">
                    <Row className="align-items-center">
                        <Col lg={9} md={6} xs={4}>
                            <HeaderLeft>
                                <Logo>
                                    <Link to="/">
                                        <StaticImage
                                            src="../../../data/images/logo/logo.png"
                                            alt=""
                                        />
                                    </Link>
                                </Logo>
                                <MainMenuArea className="navigation-menu-black">
                                    <MainMenu allmenuData={menuData} />
                                </MainMenuArea>
                            </HeaderLeft>
                        </Col>
                        <Col lg={3} md={6} xs={8}>
                            <HeaderMidRightSide>
                                <SingleActionItem>
                                    <Link to="/login">Login</Link>
                                </SingleActionItem>
                                <ButtonAction>
                                    <Button
                                        path="/login"
                                        size="large"
                                        color="warning"
                                        shape="rounded-10"
                                    >
                                        {" "}
                                        Sign Up Free{" "}
                                    </Button>
                                </ButtonAction>
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
                                    className={`${
                                        ofcanvasOpen ? "mobile-menu-open" : ""
                                    }`}
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
                                                        onClick={
                                                            ofcanvasHandaler
                                                        }
                                                        onKeyDown={
                                                            ofcanvasHandaler
                                                        }
                                                    >
                                                        <i className="icofont-close"></i>
                                                    </ButtonClose>
                                                </CloseAction>
                                            </OffCanvasHeader>

                                            <MobileNavMenu
                                                MobilemenuData={menuData}
                                            />
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

export default HeaderFive;
