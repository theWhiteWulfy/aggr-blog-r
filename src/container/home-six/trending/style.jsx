import styled, { themeGet, device } from "@theme/utils";

export const TrendingTodysArea = styled.div`
    background-color: #f8f8f8;
    position: relative;
    padding: 60px 0;
    ${device.medium}{
        padding: 80px 0;
    }
    ${device.large}{
        padding: 120px 0;
    }
`
export const TrendingHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const SectionTitleTwo = styled.div`
    position: relative;
`
export const Title = styled.h3`

`


export const SliderNavigation = styled.div`
    display: flex;
    .navigation-button {
        font-size: 24px;
        height: 20px;
        line-height: 20px;
        color: #333;
        transition: all 0.3s ease-in-out;
        background-color: transparent;
        &.trending-slider-button-prev {
            margin-left: 20px;
            padding-left: 20px;
            border-left: 1px solid #dadada;
        }
        &:hover {
            color: ${themeGet('colors.primary')};
        }
    }

`

