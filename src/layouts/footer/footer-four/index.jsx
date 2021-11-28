/** @jsx jsx */
import { jsx } from "theme-ui";
import HeartIcon from "@assets/images/svg/heart.svg";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../../components/shared/button";
import Social, { SocialLink } from "../../../components/social";
import { StaticImage } from "gatsby-plugin-image";
import {
    FooterWrap,
    FooterTopArea,
    FooterMidArea,
    FooterWidget,
    FooterWidgetTop,
    FooterLogo,
    SubTitle,
    Title,
    FooterWidgeiInfoTextBox,
    FooterMenuWidget,
    FooterDec,
    SingleFooterMenu,
    FooterWidgetTitle,
    WidgetTitle,
    FooterWidgetMenuList,
    NavItem,
    FooterBottomArea,
    FooterBottomInner,
    CopyrightText,
    ButtonRightBox,
} from "./style";

const FooterFour = () => {
    const footerQuery = useStaticQuery(graphql`
        query FooterFourQuery {
            footerJson {
                id
                quickLink {
                    path
                    text
                }
                quickLinkTwo {
                    path
                    text
                }
                quickLinkThree {
                    path
                    text
                }

                footerAbout
            }
        }
    `);
    const {
        footerAbout,
        quickLink,
        quickLinkTwo,
        quickLinkThree,
    } = footerQuery.footerJson;

    return (
        <FooterWrap>
            <FooterMidArea>
                <Container>
                    <Row>
                        <Col
                            lg={{ span: 8, order: 1 }}
                            md={{ span: 12, order: 3 }}
                            sm={{ span: 12, order: 3 }}
                        >
                            <FooterMenuWidget>
                                <SingleFooterMenu>
                                    <FooterWidgetTitle>
                                        <WidgetTitle>Company</WidgetTitle>
                                    </FooterWidgetTitle>

                                    <FooterWidgetMenuList>
                                        {quickLink &&
                                            quickLink.map((linkItem, i) => (
                                                <NavItem key={`id-${i}-one`}>
                                                    <Link to={linkItem.path}>
                                                        {linkItem.text}
                                                    </Link>
                                                </NavItem>
                                            ))}
                                    </FooterWidgetMenuList>
                                </SingleFooterMenu>
                                <SingleFooterMenu>
                                    <FooterWidgetTitle>
                                        <WidgetTitle>Quick Links</WidgetTitle>
                                    </FooterWidgetTitle>

                                    <FooterWidgetMenuList>
                                        {quickLinkTwo &&
                                            quickLinkTwo.map((linkItem, i) => (
                                                <NavItem key={`id-${i}-one`}>
                                                    <Link to={linkItem.path}>
                                                        {linkItem.text}
                                                    </Link>
                                                </NavItem>
                                            ))}
                                    </FooterWidgetMenuList>
                                </SingleFooterMenu>
                                <SingleFooterMenu>
                                    <FooterWidgetTitle>
                                        <WidgetTitle>Category</WidgetTitle>
                                    </FooterWidgetTitle>

                                    <FooterWidgetMenuList>
                                        {quickLinkThree &&
                                            quickLinkThree.map(
                                                (linkItem, i) => (
                                                    <NavItem
                                                        key={`id-${i}-one`}
                                                    >
                                                        <Link
                                                            to={linkItem.path}
                                                        >
                                                            {linkItem.text}
                                                        </Link>
                                                    </NavItem>
                                                )
                                            )}
                                    </FooterWidgetMenuList>
                                </SingleFooterMenu>
                            </FooterMenuWidget>
                        </Col>
                        <Col
                            lg={{ span: 4, order: 2 }}
                            md={{ span: 6, order: 1 }}
                            sm={{ span: 6, order: 1 }}
                        >
                            <FooterWidget>
                                <FooterLogo>
                                    <Link to="/">
                                        <StaticImage
                                            src="../../../data/images/logo/logo-4.png"
                                            alt=""
                                        />
                                    </Link>
                                </FooterLogo>
                                <FooterDec>{footerAbout}</FooterDec>
                                <Social
                                    sx={{ mt: "20px" }}
                                    shape="rounded-5"
                                    space={15}
                                    bgColor="themetwo"
                                >
                                    <SocialLink href="https://www.facebook.com/">
                                        <i className="icofont-facebook"></i>
                                    </SocialLink>
                                    <SocialLink href="https://www.skype.com/">
                                        <i className="icofont-skype"></i>
                                    </SocialLink>
                                    <SocialLink href="https://twitter.com/home/">
                                        <i className="icofont-twitter"></i>
                                    </SocialLink>
                                    <SocialLink href="https://www.linkedin.com/">
                                        <i className="icofont-linkedin"></i>
                                    </SocialLink>
                                </Social>
                            </FooterWidget>
                        </Col>
                    </Row>
                </Container>
            </FooterMidArea>

            <FooterTopArea>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <FooterWidgetTop>
                                <FooterWidgeiInfoTextBox>
                                    <SubTitle>ALL SOLUTION IN ONE</SubTitle>
                                    <Title>
                                        Unlimited Advice, Tutorial &amp;
                                        Resource
                                    </Title>
                                </FooterWidgeiInfoTextBox>

                                <ButtonRightBox>
                                    <Button
                                        path="#!"
                                        color="bg-white"
                                        size="large"
                                    >
                                        Share your thinking
                                        <i className="icofont-long-arrow-right"></i>
                                    </Button>
                                </ButtonRightBox>
                            </FooterWidgetTop>
                        </Col>
                    </Row>
                </Container>
            </FooterTopArea>

            <FooterBottomArea
                sx={{
                    textAlign: "center",
                    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                }}
            >
                <Container>
                    <Row>
                        <Col xs={12}>
                            <FooterBottomInner>
                                <CopyrightText>
                                    &copy; {new Date().getFullYear()}
                                    &nbsp; Made with <HeartIcon /> by{" "}
                                    <a
                                        href="https://alokprateek.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Alok
                                    </a>
                                </CopyrightText>
                            </FooterBottomInner>
                        </Col>
                    </Row>
                </Container>
            </FooterBottomArea>
        </FooterWrap>
    );
};

export default FooterFour;
