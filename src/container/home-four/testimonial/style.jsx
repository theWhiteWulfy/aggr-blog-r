import styled, {themeGet, device} from '@theme/utils'

export const BgGrayColor = styled.div`
    background-color: #edf0f8;
`

export const SectionTitleWrap = styled.div`
    text-align: center;
`
export const SubTitle = styled.h6`
    color: ${themeGet("colors.primary")};
    margin-bottom: 20px;
`
export const TestimonialWrap = styled.div`
    padding-top: 60px;
    padding-bottom: 60px;
    ${device.medium}{
        padding-top: 100px;
        padding-bottom: 100px;
    }
    ${device.large}{
        
    }
`
export const TestimonialSliderArea = styled.div`

`
export const TestimonialSliderNavigationTwo = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`
export const NavigationButton = styled.div`
    width: 50px;
    height: 50px;
    line-height: 45px;
    border: 2px solid ${themeGet("colors.primary")};
    text-align: center;
    font-size: 25px;
    border-radius: 5px;
    color: ${themeGet("colors.primary")};
    background-color: transparent;
    transition: all 0.3s ease-in-out;
    margin: 10px;
    &:hover {
        background-color: ${themeGet("colors.primary")};
        color: ${themeGet("colors.white")};
    }
`