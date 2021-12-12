/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Row, Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../../components/shared/button";
import {
    ErrorWrap,
    ErrorAreaShap,
    ErrorContent,
    BannerWrap,
    ErrorText,
    SubTitle,
    Title,
    ButtonBox,
} from "./style";

const ErrorArea = () => {
    const image = getImage("../../data/images/banners/error-404.png");
    const imageShap = getImage("../../data/images/banners/error-404-shap.png");

    return (
        <ErrorWrap>
            <Container>
                <Row>
                    <Col>
                        <ErrorContent>
                            <BannerWrap>
                                <GatsbyImage image={image} alt="" />
                            </BannerWrap>
                            <ErrorText>
                                <SubTitle>This Page is Not Found.</SubTitle>
                                <Title>
                                    We are sorry for this error. Can’t find this
                                    page.
                                </Title>
                                <ButtonBox sx={{ mt: "30px" }}>
                                    <Button
                                        path="/"
                                        space={15}
                                        shape="rounded-15"
                                    >
                                        <i className="icofont-long-arrow-left mr-2"></i>{" "}
                                        Back To Home{" "}
                                    </Button>
                                </ButtonBox>
                            </ErrorText>
                        </ErrorContent>
                    </Col>
                </Row>
            </Container>
            <ErrorAreaShap>
                <GatsbyImage image={imageShap} alt="" />
            </ErrorAreaShap>
        </ErrorWrap>
    );
};

export default ErrorArea;
