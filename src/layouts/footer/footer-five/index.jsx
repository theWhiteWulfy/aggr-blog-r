/** @jsx jsx */
import { jsx } from "theme-ui";
import HeartIcon from "@assets/images/svg/heart.svg";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import Button from '../../../components/shared/button'
import Social, {SocialLink} from "../../../components/social";
import { StaticImage} from "gatsby-plugin-image"
import { 
    FooterWrap,
    FooterMidArea, 
    FooterWidget, 
    FooterLogo,
    FooterMenuWidget,
    FooterDec,
    SingleFooterMenu,
    FooterWidgetTitle,
    WidgetTitle,
    FooterWidgetMenuList,
    NavItem, 

    FooterSubscribeWrap,
    SingleInput,
    Input,
    ButtonBox,


    FooterBottomArea,
    FooterBottomInner,
    CopyrightText,
    HeaderTopMenuList, 
    ListNavItem,
    NavLink, 
    
} from "./style";


const FooterFive = () => {
    const footerQuery = useStaticQuery(graphql`
        query FooterFiveQuery {
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
            
            <FooterMidArea>
                <Container>
                    <Row>
                        <Col lg={3} md={6} sm={6} xs={12}>
                            <FooterWidget>
                                <FooterLogo>
                                    <Link to="/">
                                        <StaticImage src="../../../data/images//logo-5.png" alt="" />
                                    </Link>
                                </FooterLogo>
                                <FooterDec>{footerAbout}</FooterDec>
                                <Social 
                                    sx={{ mt: "20px"}}
                                    shape="rounded-5" 
                                    space={15}
                                    bgColor="transparent"
                                >
                                    <SocialLink href="https://www.facebook.com/"><i className="icofont-facebook"></i></SocialLink>
                                    <SocialLink href="https://www.skype.com/"><i className="icofont-skype"></i></SocialLink>
                                    <SocialLink href="https://twitter.com/home/"><i className="icofont-twitter"></i></SocialLink>
                                    <SocialLink href="https://www.linkedin.com/"><i className="icofont-linkedin"></i></SocialLink>
                                </Social>
                            </FooterWidget>
                        </Col>
                        <Col lg={4} md={6} sm={6} xs={12}>
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
                                        <Button size="large" shape="rounded-10" color="warning" type="submit">Subscribe Now</Button>
                                    </ButtonBox>
                                </FooterSubscribeWrap>
                            </FooterWidget>
                        </Col>
                        <Col lg={5} md={12} sm={12}>
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
            </FooterMidArea>

            

            <FooterBottomArea sx={{}}>
                <Container fluid className="container-custom-150">
                    <Row>
                        <Col xs={12}>
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
                                <HeaderTopMenuList>
                                    <ListNavItem>
                                        <NavLink href="#">Help</NavLink>
                                    </ListNavItem>
                                    <ListNavItem>
                                        <NavLink href="#">Status</NavLink>
                                    </ListNavItem>
                                    <ListNavItem>
                                        <NavLink href="#">Writers</NavLink>
                                    </ListNavItem>
                                </HeaderTopMenuList>
                                
                            </FooterBottomInner>
                        </Col>
                    </Row>
                </Container>
            </FooterBottomArea>
        </FooterWrap>
    );
};

export default FooterFive;
