import styled, { device } from "@theme/utils";
export const GagarathHistoryWrap = styled.div``;
export const GagarathRow = styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    flex-direction: column;
    ${device.medium} {
        flex-direction: row;
    }
`;
export const GagarathCol6 = styled.div`
    width: 100%;
    flex: 0 0 auto;
    border-left: 1px solid #ddd;
    height: 100%;
    border-bottom: 1px solid #ddd;
    &:first-of-type {
        border-left: none;
    }
    ${device.medium} {
        width: 50%;
        border-bottom: none;
    }
`;
export const GagarathHistoryTitle = styled.h2`
    font-size: 22px;
    font-weight: 300;
    margin-right: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
    span {
        font-weight: 600;
    }
    ${device.medium} {
        font-size: 42px;
    }
    ${device.large} {
        font-size: 52px;
    }
    ${device.xlarge} {
        font-size: 62px;
    }
`;
