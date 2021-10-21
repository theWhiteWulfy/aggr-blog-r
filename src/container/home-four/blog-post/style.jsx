import styled, { device } from "@theme/utils";

export const RecentArticleArea = styled.div`
    padding-bottom: 60px;
    ${device.medium}{
        padding-bottom: 80px;
    }
    ${device.large}{
        padding-bottom: 100px;
    }

    .custom-row {
        > .col {
            flex: 1 0 100%;
            max-width: 100%;
            &:nth-of-type(4n+2), &:nth-of-type(4n+3) {
                flex: 1 0 100%;
                max-width: 100%;
            }
            ${device.small}{
                flex: 1 0 50.000%;
                max-width: 50.000%;
                &:nth-of-type(4n+2), &:nth-of-type(4n+3) {
                    flex: 1 0 50.000%;
                    max-width: 50.000%;
                }
            }
        }
    }

`