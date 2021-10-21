/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import MainMenu from "../../../components/menu/main-menu";
import MobileNavMenu from "../../../components/menu/mobile-menu";

import { 
    HeaderWrap, 
    Logo,
    HeaderStyleCenter,
    HeaderMidRightSide,
    SingleActionItem,
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

const HeaderTwo = ({HeaderAbsolute}) => {
    const allmenuDataTwo = useStaticQuery(graphql`
        query AllmenuTwoQuery {
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
    const menuData = allmenuDataTwo.allMenuJson.edges;


    // OfCanvas Menu
    const [ofcanvasOpen, setOfcanvasOpen] = useState(false);

    // OfCanvas Menu Open & Remove
    const ofcanvasHandaler = () => {
        setOfcanvasOpen((prev) => !prev);
    };

    return ( 
        <HeaderWrap className={`${HeaderAbsolute ? "absolute-header" : "" }`}>
            <Container>
                <HeaderStyleCenter>
                        <Logo>
                            <Link to="/">
                                <StaticImage src="../../../data/images/logo/logo-2.png" alt=""/>
                            </Link>
                        </Logo>
                        <MainMenuArea className="navigation-menu-white">
                            <MainMenu allmenuData={menuData} />
                        </MainMenuArea>
                        <HeaderMidRightSide>
                            <SingleActionItem href="#">
                                <span className="new-notification"></span>
                                <StaticImage src="../../../data/images/icons/notification-white.png" alt=""/>
                            </SingleActionItem>
                            <SingleActionItem href="/register">
                                <StaticImage src="../../../data/images/icons/user-white.png" alt=""/>
                            </SingleActionItem>
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

export default HeaderTwo;
