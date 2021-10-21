/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useState, Fragment } from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Social, {SocialLink} from "../../../components/social";
import { graphql, useStaticQuery } from "gatsby";
import MainMenu from "../../../components/menu/main-menu";
import MobileNavMenu from "../../../components/menu/mobile-menu";
import SearchPopup from "../../../components/search-popup";

import { 
    HeaderWrap, 
    HeaderTopArea, 
    HeaderTopMenuList, 
    NavItem, 
    NavLink, 
    HeaderTopContactInfo,
    HeaderTopSingleContactItem,
    HeaderTopContactIcon,
    HeaderTopContactText,
    HeaderTopRightSide,
    CountyName,
    Wayder,
    WayderIcon,
    WayderText,

    HeaderMidArea,
    Logo,
    HeaderAddBanner,
    HeaderAddText,

    HeaderMidRightSide,

    SingleActionItem,

    HeaderBottomArea,


    HeaderActionArea,
    MobileMenuArea,
    OffCanvasInner,
    MobileMenuBtn,
    OffCanvasContent,
    OffCanvasHeader,
    CloseAction,
    ButtonClose,

} from "./style";

const Header = () => {
    const allmenuData = useStaticQuery(graphql`
        query AllmenuQuery {
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
    // // OfCanvas Menu Open & Remove 
    // const ofcanvasHandaler = () => {
    //     setOfcanvasOpen(prev => !prev)
    // }

    // OfCanvas Search Open & Remove 
    const [ofcanvasSearchOpen, setOfcanvasSearchOpen] = useState(false);
    const SearchHandaler = () => {
        setOfcanvasSearchOpen(prev => !prev)
    }

    return (
        <Fragment>

            <HeaderWrap>
                <HeaderTopArea>
                    <Container>
                        <Row>
                            <Col lg={{span: 3, order: 1 }} md={{span: 6, order: 1 }} sm={{span: 6, order: 1 }}>
                                <HeaderTopMenuList>
                                    <NavItem>
                                        <NavLink href="#">Help</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Status</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Writers</NavLink>
                                    </NavItem>
                                </HeaderTopMenuList>
                            </Col>
                            <Col lg={{span: 6, order: 2 }} md={{span: 12, order: 3 }} sm={{ span: 12, order: 3 }}>
                                <HeaderTopContactInfo>
                                    <HeaderTopSingleContactItem>
                                        <HeaderTopContactIcon>
                                            <StaticImage src="../../../data/images/icons/contact-call.png" alt=""/>
                                        </HeaderTopContactIcon>
                                        <HeaderTopContactText>
                                            <NavLink href="tel:970262-1413">(970) 262-1413</NavLink>
                                        </HeaderTopContactText>
                                    </HeaderTopSingleContactItem>

                                    <HeaderTopSingleContactItem>
                                        <HeaderTopContactIcon>
                                        <StaticImage src="../../../data/images/icons/contact-emaill.png" alt=""/>
                                        </HeaderTopContactIcon>
                                        <HeaderTopContactText>
                                            <NavLink href="mailto:address@gmail.com">address@gmail.com</NavLink>
                                        </HeaderTopContactText>
                                    </HeaderTopSingleContactItem>

                                </HeaderTopContactInfo>
                            </Col>
                            <Col lg={{span: 3, order: 3 }} md={{span: 6, order: 2 }} sm={{ span: 6, order: 2 }}>
                                <HeaderTopRightSide>
                                    <CountyName>Bangladesh</CountyName>
                                    <Wayder>
                                        <WayderIcon>
                                            <StaticImage src="../../../data/images/icons/wayder.png" alt=""/>
                                        </WayderIcon>
                                        <WayderText>28° C</WayderText>
                                    </Wayder>
                                </HeaderTopRightSide>
                            </Col>
                        </Row>
                    </Container>
                </HeaderTopArea>

                <HeaderMidArea>
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={3} md={2} xs={4}>
                                <Logo>
                                    <Link to="/">
                                        <StaticImage src="../../../data/images/logo/logo.png" alt=""/>
                                    </Link>
                                </Logo>
                            </Col>
                            <Col lg={6} md={6} className="d-md-block d-none">
                                <HeaderAddBanner>
                                    <a href="#">
                                        <StaticImage src="../../../data/images/banners/header-add-banner.jpg" alt=""/>
                                        <HeaderAddText>
                                            All Food Item<span>50% Off</span>
                                        </HeaderAddText>
                                    </a>
                                </HeaderAddBanner>
                            </Col>
                            <Col lg={3} md={4} xs={8}>
                                <HeaderMidRightSide>
                                    <SingleActionItem href="#!" onClick={SearchHandaler} onKeyDown={ofcanvasHandaler}>
                                        <StaticImage src="../../../data/images/icons/search.png" alt=""/>
                                    </SingleActionItem>
                                    <SingleActionItem href="/register">
                                        <StaticImage src="../../../data/images/icons/user.png" alt=""/>
                                    </SingleActionItem>
                                </HeaderMidRightSide>
                            </Col>
                        </Row>
                    </Container>
                </HeaderMidArea>

                <HeaderBottomArea>
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={4} md={9} xs={9}>
                                <Social 
                                    sx={{ mt: "15px", mb: "15px" }}
                                    shape="rounded-5" 
                                    space={15}
                                >
                                    <SocialLink href="https://www.facebook.com/"><i className="icofont-facebook"></i></SocialLink>
                                    <SocialLink href="https://www.skype.com/"><i className="icofont-skype"></i></SocialLink>
                                    <SocialLink href="https://twitter.com/home/"><i className="icofont-twitter"></i></SocialLink>
                                    <SocialLink href="https://www.linkedin.com/"><i className="icofont-linkedin"></i></SocialLink>
                                </Social>
                            </Col>
                            <Col lg={8} xs={3}>
                                <div className="main-menu-area">
                                    <MainMenu allmenuData={menuData} />

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
                                </div>
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
                            </Col>
                        </Row>
                    </Container>
                </HeaderBottomArea>
                
            </HeaderWrap>
            <SearchPopup ofcanvasSearchOpen={ofcanvasSearchOpen} SearchHandaler={SearchHandaler}/>
        </Fragment>
    );
};

export default Header;
