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
    FooterMidArea, 
    FooterWidget, 
    FooterWidgetTop,
    FooterLogo,

    Title,
    FooterWidgeiInfoTextBox,

    NewsletterInputBox,
    ButtonBox,
    NewsletterInput,

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
    ButtonRightBox

    
} from "./style";


const FooterSix = () => {
    const footerQuery = useStaticQuery(graphql`
        query FooterSixQuery {
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
                        <Col lg={12}>
                            <FooterWidgetTop>
                                <FooterWidgeiInfoTextBox>
                                    <Title>Subscribe Now & Get Update Every Week.</Title>
                                </FooterWidgeiInfoTextBox>

                                <NewsletterInputBox>
                                    <NewsletterInput 
                                        type="text" 
                                        placeholder="Enter your email"
                                    />
                                    <ButtonBox>
                                        <Button
                                            path="/"
                                            size="large"
                                            color="primary"
                                            shape="rounded-10" 
                                        > Subscribe Now
                                        </Button>
                                    </ButtonBox>
                                </NewsletterInputBox>
                            </FooterWidgetTop>
                        </Col>
                    </Row>
                </Container>
            </FooterTopArea>
            
            <FooterMidArea>
                <Container>
                    <Row>
                        
                        <Col lg={{span: 8, order: 2 }} md={{span: 12, order: 3 }} sm={{ span: 12, order: 3 }}>
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
                        <Col lg={{span: 4, order: 1 }} md={{span: 6, order: 1 }} sm={{span: 6, order: 1 }}>
                            <FooterWidget>
                                <FooterLogo>
                                    <Link to="/">
                                        <StaticImage src="../../../data/images/logo/logo-4.png" alt="" />
                                    </Link>
                                </FooterLogo>
                                <FooterDec>{footerAbout}</FooterDec>
                                <Social 
                                    sx={{ mt: "20px"}}
                                    shape="rounded-5" 
                                    space={15}
                                    bgColor="themethree"
                                >
                                    <SocialLink href="https://www.facebook.com/"><i className="icofont-facebook"></i></SocialLink>
                                    <SocialLink href="https://www.skype.com/"><i className="icofont-skype"></i></SocialLink>
                                    <SocialLink href="https://twitter.com/home/"><i className="icofont-twitter"></i></SocialLink>
                                    <SocialLink href="https://www.linkedin.com/"><i className="icofont-linkedin"></i></SocialLink>
                                </Social>
                                <ButtonRightBox>
                                    <Button path="#!" color="primary" size="large">
                                        Share your thinking 
                                        <i className="icofont-long-arrow-right"></i>
                                    </Button>
                                </ButtonRightBox>
                            </FooterWidget>
                        </Col>
                    </Row>
                </Container>
            </FooterMidArea>

            

            <FooterBottomArea sx={{ textAlign: "center", borderTop: "1px solid #1d3052" }}>
                <Container>
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
                                
                            </FooterBottomInner>
                        </Col>
                    </Row>
                </Container>
            </FooterBottomArea>
        </FooterWrap>
    );
};

export default FooterSix;
