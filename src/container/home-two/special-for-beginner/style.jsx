import styled, {themeGet, device } from "@theme/utils";

export const SpecialForBeginnerArea = styled.div`
    padding: 60px 0 ; 
    ${device.medium}{
        padding: 80px 0; 
    }
    ${device.large}{
        padding: 120px 0; 
    }
`
export const SectionTitleTwo = styled.div`
    position: relative;
    margin-bottom: 40px;
    &::after {
        background-color: #e3e3e3;
        content: "";
        left: 0;
        top: 50%;
        position: absolute;
        height: 1px;
        width: 100%;
    }
`
export const Title = styled.h2`
    color: #0f034a;
    background: #fff;
    display: inline-block;
    position: relative;
    z-index: 1;
    &::after {
        background-color: #fff;
        content: "";
        right: -50px;
        left: auto;
        top: 50%;
        position: absolute;
        height: 90%;
        width: 50px;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    &::before {
        background-color: #fff;
        content: "";
        left: -50px;
        right: auto;
        top: 50%;
        position: absolute;
        height: 90%;
        width: 50px;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
`
export const SpecialBannerImage = styled.div`
    margin-bottom: 20px;
`