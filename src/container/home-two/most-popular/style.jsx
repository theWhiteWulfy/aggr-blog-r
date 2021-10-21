import styled, {themeGet, device } from "@theme/utils";
export const MostPopulerArea = styled.div`
    padding: 60px 0 30px; 
    ${device.medium}{
        padding: 80px 0 50px; 
    }
    ${device.large}{
        padding: 120px 0 90px; 
    }
` 
export const SectionTitleWrap = styled.div`

` 
export const SectionTitle = styled.h2`

` 
export const MostPopularSliderNavigation = styled.div`
    display: flex;
    justify-content: flex-end;
` 
export const NavigationButton = styled.div`
    width: 50px;
    height: 50px;
    line-height: 45px;
    border: 1px solid #e7e5ed;
    text-align: center;
    font-size: 25px;
    border-radius: 10px;
    color: #0f034a;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    &.most-populer-button-next {
        margin-left: 10px;
    }
    &:hover {
        border: 1px solid  ${themeGet("colors.primary")};
        background-color: ${themeGet("colors.primary")};
        color: #fff;
    }
` 