/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Row, Col} from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import {GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../../components/shared/button"
import {
    ErrorWrap, 
    ErrorAreaShap, 
    ErrorContent, 
    BannerWrap, 
    ErrorText,
    SubTitle,
    Title,
    ButtonBox
} from './style'
const ErrorArea = () => {
    const errorSectionQuery = useStaticQuery(graphql`
        query ErrorSectionQuery {
            errorJson(id: {eq: "error-area"}) {
                heading
                subHeading
                image1 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                image2 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    `)

    const {heading, subHeading, image1, image2 } = errorSectionQuery.errorJson;
    const image = getImage(image1);
    const imageShap = getImage(image2);

    return (
        <ErrorWrap>
            <Container>
                <Row>
                    <Col>
                        <ErrorContent>
                            <BannerWrap>
                                <GatsbyImage image={image} alt=""/>
                            </BannerWrap>
                            <ErrorText>
                                <SubTitle>{subHeading}</SubTitle>
                                <Title>{heading}</Title>
                                <ButtonBox sx={{ mt: "30px"}}>
                                    <Button 
                                        path="/" 
                                        space={15} 
                                        shape="rounded-15"
                                    ><i className="icofont-long-arrow-left mr-2"></i> Back To Home </Button>
                                </ButtonBox>
                            </ErrorText>
                        </ErrorContent>
                    </Col>
                </Row>
            </Container>
            <ErrorAreaShap>
                <GatsbyImage image={imageShap} alt=""/>
            </ErrorAreaShap>
        </ErrorWrap>
    )
}

export default ErrorArea
