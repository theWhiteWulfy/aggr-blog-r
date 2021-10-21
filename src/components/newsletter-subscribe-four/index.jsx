/** @jsx jsx */
import { jsx } from "theme-ui";
import Button from "../../components/shared/button"
import {
    NewsletterSubscribeInner,
    Title,
    SectionTitle,
    DecText,
    NewsletterInputBox,
    ButtonBox,
    NewsletterInput
} from "./style";


const NewsletterSubscribeFour = () => {
    return (
        <NewsletterSubscribeInner>
            <SectionTitle>
                <Title>Subscribe For Newsletter</Title>
                <DecText>93+ People Subscribe today.</DecText>
            </SectionTitle>
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
                    > Subscribe Now
                    </Button>
                </ButtonBox>
            </NewsletterInputBox>
        </NewsletterSubscribeInner>
    )
}

export default NewsletterSubscribeFour
