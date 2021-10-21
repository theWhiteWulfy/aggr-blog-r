import styled, { device } from "@theme/utils";

import NewsletterBgTwo from '../../data/images/banners/home-three-newsletter-bg.jpg'

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
    max-width: 894px;
    text-align: left;
    padding: 60px 40px 100px;
    ${device.large}{
        padding: 80px 100px;
    }

`
export const ButtonBox = styled.div`

`
export const SubscribeTodayUpdate = styled.div`
    position: absolute;
    left: 45px;
    bottom: 30px;
    width: 200px;
    ${device.medium}{
        bottom: 80px;
        right: 70px;
        width: 230px;
        left: auto;
    }
    ${device.large}{
        bottom: 60px;
        right: 70px;
        width: 250px;
    }
    
`
export const TodayUpdateText = styled.h4`
    font-size: 20px;
    color: #ffffff;
    font-weight: 400;
    span {
        font-weight: 600;   
    }
    ${device.large}{
        font-size: 28px;
    }
`