import styled, { device } from "@theme/utils";
export const RecentArticleArea = styled.div`
    padding-top: 30px;
    padding-bottom: 60px;
    ${device.small}{
        padding-top: 40px;
        padding-bottom: 80px;
    }
    ${device.medium} {
        padding-top: 40px;
        padding-bottom: 100px;
    }
    ${device.large} {
        padding-top: 60px;
        padding-bottom: 120px;
    }
`
export const RecentArticleHeaderTwo = styled.div`
    border-top: 1px solid #ddd;
`
export const SectionTitle = styled.div`
    margin-top: 60px;
    text-align: center;
    margin-bottom:60px;
`
export const Title = styled.h2`
    
`