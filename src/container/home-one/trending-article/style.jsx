import styled, { device } from "@theme/utils";

export const TrendingArticleArea = styled.div`
    padding-top: 60px;
    ${device.small}{
        padding-top: 80px;
    }
`
export const TrendingArticleRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: -15px;
    margin-left: -15px;
    flex-wrap: wrap;
    ${device.large}{
        flex-wrap: nowrap;
    }
`
export const TrendingArticleLeftSide = styled.div`
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    ${device.large}{
        max-width: 50%;
    }
    ${device.xlarge}{
        max-width: 515px;
    }
`
export const TrendingArticleRightSide = styled.div`
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    ${device.large}{
        max-width: 50%;
    }
    ${device.xlarge}{
        max-width: 675px;
    }
`


export const TrendingArticleRighSide = styled.div`

`

