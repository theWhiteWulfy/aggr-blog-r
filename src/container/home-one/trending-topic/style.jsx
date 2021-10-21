import styled, { device, themeGet } from "@theme/utils";
export const BgGray1Area = styled.div`
    background-color: #fafafa;
`;
export const TrendingTopicArea = styled.div`
    padding-top: 60px;
    padding-bottom: 60px;
    ${device.small}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
`

export const TrendingTopicSectionTitle = styled.div`
    max-width: 232px;
    padding: 0 15px;
    margin-bottom:40px;

`

export const TrendingTopicNavigation = styled.div`
    
`

export const NavigationButton = styled.div`
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 38px;
    background-color: #222;
    font-size: 24px;
    border-radius: 50000px;
    color: #fff;
    display: inline-block;
    transition: all 0.3s ease-in-out;
    &:last-child {
        margin-left: 10px;
    }
    &:hover {
        background-color: ${themeGet("colors.primary")};
        color: #fff;
    }
    margin-top: 30px;
`
export const TrendingTopicItemWrap = styled.div`
    max-width: 968px;
`
export const SingleTrendingTopicItem = styled.div`

`

