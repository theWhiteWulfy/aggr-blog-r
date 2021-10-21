import styled, {device} from '@theme/utils'

export const BgGrayColor = styled.div`
    background-color: #edf0f8;
`
export const TestimonialWrap = styled.div`
    padding-top: 60px;
    ${device.medium}{
        padding-top: 100px;
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
    border: 2px solid #ffc4a0;
    text-align: center;
    font-size: 25px;
    border-radius: 500000px;
    color: #ffffff;
    background-color: #ffc4a0;
    transition: all 0.3s ease-in-out;
    margin: 10px;
`