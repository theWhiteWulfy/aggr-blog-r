import styled , {device} from "@theme/utils"

export const NewsletterArea = styled.div`
    padding-top: 60px;
    padding-bottom: 60px;
    ${device.medium} {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    ${device.large} {
        padding-top: 120px;
        padding-bottom: 120px;
    }
`