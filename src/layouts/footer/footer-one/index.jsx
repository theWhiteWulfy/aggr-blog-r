/** @jsx jsx */
import { jsx } from "theme-ui";
import HeartIcon from "@assets/images/svg/heart.svg";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import Button from '../../../components/shared/button'
import Social, {SocialLink} from "../../../components/social";
import { StaticImage} from "gatsby-plugin-image"
import { FooterWrap,
    FooterTopArea, 
    FooterWidget, 
    FooterDec,
    FooterLogo,
    FooterMenuWidget,

    FooterSubscribeWrap,
    SingleInput,
    Input,
    ButtonBox,


    SingleFooterMenu,
    FooterWidgetTitle,
    WidgetTitle,
    FooterWidgetMenuList,
    NavItem, 

    FooterBottomArea,
    FooterBottomInner,
    CopyrightText,
    ButtonRightBox

    
} from "./style";


const Footer = () => {
    const footerQuery = useStaticQuery(graphql`
        query FooterQuery {
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
    `)
    const { footerAbout, quickLink, quickLinkTwo, quickLinkThree } = footerQuery.footerJson;
   
    return (
        <FooterWrap>
            <FooterTopArea>
                <Container>
                    <Row>
                        <Col lg={3} md={6} sm={6}>
                            <FooterWidget>
                                <FooterLogo>
                                    <Link to="/">
                                        <StaticImage src="../../../data/images/logo/logo-white.png" alt="" />
                                    </Link>
                                </FooterLogo>
                                <FooterDec>{footerAbout}</FooterDec>
                                <Social 
                                    sx={{ mt: "30px"}}
                                    shape="rounded-5" 
                                    space={15}
                                    bgColor="black"
                                >
                                    <SocialLink href="https://www.facebook.com/"><i className="icofont-facebook"></i></SocialLink>
                                    <SocialLink href="https://www.skype.com/"><i className="icofont-skype"></i></SocialLink>
                                    <SocialLink href="https://twitter.com/home/"><i className="icofont-twitter"></i></SocialLink>
                                    <SocialLink href="https://www.linkedin.com/"><i className="icofont-linkedin"></i></SocialLink>
                                </Social>
                            </FooterWidget>
                        </Col>
                        <Col lg={4} md={6} sm={6}>
                            <FooterWidget className="footer-subscribe-center">
                                <FooterWidgetTitle>
                                    <WidgetTitle>Subscribe</WidgetTitle>
                                </FooterWidgetTitle>
                                <FooterSubscribeWrap>
                                    <SingleInput>
                                        <Input type="text" placeholder="Your Name"/>
                                    </SingleInput>
                                    <SingleInput>
                                        <Input type="email" placeholder="Email Address"/>
                                    </SingleInput>
                                    <ButtonBox>
                                        <Button size="large" shape="rounded-10" type="submit">Subscribe Now</Button>
                                    </ButtonBox>
                                </FooterSubscribeWrap>
                            </FooterWidget>
                        </Col>
                        <Col lg={5}>
                            <FooterMenuWidget>
                                <SingleFooterMenu>
                                    <FooterWidgetTitle>
                                        <WidgetTitle>Company</WidgetTitle>
                                    </FooterWidgetTitle>
                                    
                                    <FooterWidgetMenuList>
                                        {quickLink && quickLink.map((linkItem, i) => (
                                            <NavItem key={`id-${i}-one`}>
                                                <Link to={linkItem.path}>{linkItem.text}</Link>
                                            </NavItem>
                                        ))}
                                       
                                    </FooterWidgetMenuList>
                                </SingleFooterMenu>
                                <SingleFooterMenu>
                                    <FooterWidgetTitle>
                                        <WidgetTitle>Quick Links</WidgetTitle>
                                    </FooterWidgetTitle>
                                    
                                    <FooterWidgetMenuList>
                                        {quickLinkTwo && quickLinkTwo.map((linkItem, i) => (
                                            <NavItem key={`id-${i}-one`}>
                                                <Link to={linkItem.path}>{linkItem.text}</Link>
                                            </NavItem>
                                        ))}
                                        
                                    </FooterWidgetMenuList>
                                </SingleFooterMenu>
                                <SingleFooterMenu>
                                    <FooterWidgetTitle>
                                        <WidgetTitle>Category</WidgetTitle>
                                    </FooterWidgetTitle>
                                    
                                    <FooterWidgetMenuList>
                                        {quickLinkThree && quickLinkThree.map((linkItem, i) => (
                                            <NavItem key={`id-${i}-one`}>
                                                <Link to={linkItem.path}>{linkItem.text}</Link>
                                            </NavItem>
                                        ))}
                                    </FooterWidgetMenuList>
                                </SingleFooterMenu>
                            </FooterMenuWidget>
                        </Col>
                    </Row>
                </Container>
            </FooterTopArea>
            <FooterBottomArea>
                <Container>
                    <Row>
                        <Col xs={12} sx={{ textAlign: "center" }}>
                            <FooterBottomInner>
                                <CopyrightText>
                                    &copy; {new Date().getFullYear()} 
                                    Made  with <HeartIcon /> by{" "}
                                    <a
                                        href="https://alokprateek.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Alok
                                    </a>
                                </CopyrightText>
                                <ButtonRightBox>
                                    <Button path="/contact-us" size="large" shape="rounded-10"> Share your thinking <i className="icofont-long-arrow-right"></i></Button>
                                </ButtonRightBox>
                            </FooterBottomInner>
                        </Col>
                    </Row>
                </Container>
            </FooterBottomArea>
        </FooterWrap>
    );
};

export default Footer;
