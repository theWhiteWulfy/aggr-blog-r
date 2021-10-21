import styled, { device } from "@theme/utils";

export const NewsletterSubscribeInner = styled.div`
    background-color: #fff;
    padding: 50px 30px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    margin-top: 60px;
    ${device.small}{
        margin-top: 80px;
    }
    ${device.medium}{
        padding: 70px 70px;
    }


`
export const Title = styled.h3`

`
export const SectionTitle = styled.div`

`
export const NewsletterInputBox = styled.div`
    display: flex;
    z-index: 1;
    position: relative;
    flex-direction: column;
    ${device.small}{
        flex-direction: row;
    }
`
export const NewsletterInput = styled.input`
    max-width: 100%;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-right: 20px;
    padding: 5px 15px;
    font-weight: 500;
    height: 60px;
    margin-top: 30px;
    margin-bottom: 20px;

    ${device.small}{
        max-width: 270px;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    ${device.medium}{
        max-width: 300px;
    }

    ${device.large}{
        max-width: 400px;
    }
    ${device.xlarge}{
        max-width: 450px;
    }

`
export const ButtonBox = styled.div`

`
export const NewsletterInnerImage = styled.div`
    .newsletter-image-01 {
        position: absolute !important;
        bottom: 0;
        left: 18%;
        z-index: 0;
    }
    .newsletter-image-02 {
        position: absolute !important;
        bottom: 0;
        right: 34px;
        z-index: 0;
    }
`