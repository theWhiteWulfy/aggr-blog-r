import styled, { device } from "@theme/utils";

export const BottomAddBannerArea = styled.div`
    padding-bottom: 60px;
    ${device.small} {
        padding-bottom: 80px;
    }
    
`
export const BottomAddBannerBox = styled.a`
    position: relative;
    display: block;
    .gatsby-image-wrapper-constrained {
        display: block !important;
        vertical-align: middle !important;
        padding: 25px 0px;
        border-radius: 10px;
        img {
            width: 100%;
        }
    }
    
`
export const BottomAddText = styled.h6`
    font-size: 25px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50px;
    display: inline-block;
    span {
        display: block;
        font-size: 32px;
        text-align: left;
        margin-top: 3px;
    }
`
