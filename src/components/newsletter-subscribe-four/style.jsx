import styled, { device } from "@theme/utils";

import NewsletterBgFour from '../../data/images/banners/home-four-newsletter-bg.jpg'

export const NewsletterSubscribeInner = styled.div`
    background-color: #ddd;
    position: relative;
    background: url(${NewsletterBgFour});
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    padding:  40px 20px;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    ${device.large}{
        padding: 70px;
    }
`
export const Title = styled.h2`
    color: #ffffff;
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 28px;
    ${device.large}{
        font-size: 44px;
    }
`
export const DecText = styled.p`
    color: #ffffff;
    font-size: 18px;
    ${device.large}{
        font-size: 25px;
    }
`
export const SectionTitle = styled.div`
    text-align: center;
`
export const NewsletterInputBox = styled.div`
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    flex-direction: column;
    ${device.small}{
        flex-direction: row;
        margin-top: 30px;
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
    color: #fff;
    margin-bottom: 20px;
    &::-webkit-input-placeholder { /* Edge */
        color: #fff;
    }
    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #fff;
    }
    &::placeholder {
        color: #fff;
    } 
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
    a {
        color: #fff;
    }
`