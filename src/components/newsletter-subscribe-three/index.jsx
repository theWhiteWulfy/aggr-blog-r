/** @jsx jsx */
import { jsx } from "theme-ui";
import Button from "../../components/shared/button"
import {
    NewsletterSubscribeInner,
    Title,
    SectionTitle,
    NewsletterInputBox,
    ButtonBox,
    SubscribeTodayUpdate,
    TodayUpdateText
} from "./style";


const NewsletterSubscribeThree = () => {
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
                        color="secondary"
                        shape="rounded-10"
                    > Subscribe Now
                    </Button>
                </ButtonBox>
            </NewsletterInputBox>
            <SubscribeTodayUpdate>
                <TodayUpdateText><span>93+</span> People Subscribe today.</TodayUpdateText>
            </SubscribeTodayUpdate>
        </NewsletterSubscribeInner>
    )
}

export default NewsletterSubscribeThree
