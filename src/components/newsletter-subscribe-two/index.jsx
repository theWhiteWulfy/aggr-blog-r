/** @jsx jsx */
import { jsx } from "theme-ui";
import Button from "../../components/shared/button"
import {
    NewsletterSubscribeInner,
    Title,
    SectionTitle,
    NewsletterInputBox,
    ButtonBox
} from "./style";


const NewsletterSubscribeTwo = () => {
    return (
        <NewsletterSubscribeInner>
            <NewsletterInputBox>
                <SectionTitle>
                    <Title>28k People <span className="normal-width">Receive Weekly WordPress Related Newsletter</span>.</Title>
                </SectionTitle>
                <ButtonBox>
                    <Button
                        sx={{mt: "30px", color: "#fff" }}
                        path="/"
                        size="large"
                        color="primary"
                        shape="rounded-10"
                    > Subscribe Now
                    </Button>
                </ButtonBox>
            </NewsletterInputBox>
        </NewsletterSubscribeInner>
    )
}

export default NewsletterSubscribeTwo
