import styled, {themeGet, device } from "@theme/utils";

export const RecentArticleArea = styled.div`
    padding-bottom: 60px;
    ${device.medium}{
        padding-bottom: 80px;
    }
    ${device.large}{
        padding-bottom: 120px;
    }
`
export const SectionTitleArea = styled.div`
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 30px;
    margin-bottom: 20px;
    text-align: center;
`
export const Title = styled.h2`

`
