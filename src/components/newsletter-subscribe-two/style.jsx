import styled, { device } from "@theme/utils";

import NewsletterBgTwo from '../../data/images/banners/home-two-newsletter-bg.jpg'

export const NewsletterSubscribeInner = styled.div`
    background-color: #ddd;
    position: relative;
    background: url(${NewsletterBgTwo});
    border-radius: 10px;
    background-size: cover;
    background-position: center;
`
export const Title = styled.h2`
    color: #ffffff;
    font-size: 30px;
    font-weight: bold;
    .normal-width {
        font-weight: 500;
    }
    ${device.large}{
        font-size: 44px;
    }
`
export const SectionTitle = styled.div`

`
export const NewsletterInputBox = styled.div`
    max-width: 730px;
    margin: auto;
    text-align: center;
    padding: 80px 15px;
`
export const ButtonBox = styled.div`

`