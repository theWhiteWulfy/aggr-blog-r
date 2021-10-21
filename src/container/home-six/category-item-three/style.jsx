import styled, { themeGet, device } from "@theme/utils";

export const CategorySection = styled.div`
    padding: 60px 0;
    ${device.medium} {
        padding: 80px 0;
    }
    ${device.medium} {
        padding: 120px 0;
    }
`
export const SectionTitle = styled.div`
    text-align: center;
`
export const Title = styled.h3`
    text-transform: capitalize;
`
export const MoreButtonBox = styled.div`
    text-align: center;
    margin-top: 60px;
    a {
        color: #fff !important;
        padding: 0 30px;
    }
`