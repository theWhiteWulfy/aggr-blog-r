import styled, { themeGet, device } from "@theme/utils";

export const HeroArea = styled.div`
    padding: 60px 0;
    ${device.medium}{
        padding: 100px 0;
    }
    ${device.large}{
        padding: 120px 0;
    }
`
export const HeroFiveInnerText = styled.div`

`
export const SubTitle = styled.h5`
    color: ${themeGet("colors.offer")};
    text-transform: uppercase;
    margin-bottom: 30px;
`
export const Title = styled.h1`
    font-size: 30px;
    font-weight: 700;
    display: block;
    ${device.medium}{
        font-size: 40px;
    }
    ${device.large}{
        font-size: 46px;
    }
    ${device.xlarge}{
        font-size: 60px;
    }
`

export const HeightLightTitle = styled.span`
    font-size: 34px;
    display: inline-block;
    position: relative;
    line-height: 1;
    z-index: 1;
    margin-right: 10px;
    ${device.medium}{
        font-size: 40px;
    }
    ${device.large}{
        font-size: 80px;
    }
    ${device.xlarge}{
        font-size: 94px;
    }
    &::after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 2px;
        width: 100%;
        background-color: #fed74b;
        z-index: -1;
        height: 15px;
    }
    ${device.device}{
        &::after {
            height: 25px;
        }
    }
`
export const HeroTextDec = styled.p`
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 600;
    max-width: 540px;
    ${device.device}{
        font-size: 20px;
    }
`
export const ButtonBox = styled.div`
    a {
        padding: 0 30px;
        color: #fff;
    }
`
export const HeroFiveCategory = styled.div`
    a {
        margin-right: 15px;
        margin-top: 15px;
        ${device.medium} {
            margin-right: 25px;
            margin-top: 25px;
        }
    }
`