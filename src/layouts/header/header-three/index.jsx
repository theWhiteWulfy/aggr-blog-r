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

import { 
    HeaderWrap, 
    Logo,
    HeaderStyleCenter,
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
    ButtonClose
} from "./style";

const HeaderThree = () => {
    const allmenuDataThree = useStaticQuery(graphql`
        query AllmenuThreeQuery {
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
    const menuData = allmenuDataThree.allMenuJson.edges;


    // OfCanvas Menu
    const [ofcanvasOpen, setOfcanvasOpen] = useState(false);

    // OfCanvas Menu Open & Remove
    const ofcanvasHandaler = () => {
        setOfcanvasOpen((prev) => !prev);
    };

    return (
        <HeaderWrap>
            <Container>
                <HeaderStyleCenter>
                    <Logo>
                        <Link to="/">
                            <StaticImage src="../../../data/images/logo/logo-3.png" alt=""/>
                        </Link>
                    </Logo>
                    <MainMenuArea className="navigation-menu-black">
                        <MainMenu allmenuData={menuData} />
                    </MainMenuArea>
                    <HeaderMidRightSide>
                        <SingleActionItem href="#">
                            <span className="new-notification"></span>
                            <StaticImage src="../../../data/images/icons/notification-3.png" alt=""/>
                        </SingleActionItem>
                        <ButtonAction>
                            <Button path="/contact-us" size="medium" shape="rounded-15"> Sign Up Free </Button>
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

                </HeaderStyleCenter>
            </Container>
        </HeaderWrap>
    );
};

export default HeaderThree;
