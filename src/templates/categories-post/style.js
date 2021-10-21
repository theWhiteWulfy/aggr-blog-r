import styled, { device } from "@theme/utils";

export const BlogDetailsArea = styled.section`
    padding: 60px 0;
    ${device.medium} {
        padding: 80px 0;
    }
    ${device.large} {
        padding: 80px 0;
    }
    ${device.xlarge} {
        padding: 80px 0;
    }
`;
export const TagTitle = styled.h3`
    margin-bottom: 30px;
`
export const BlogDetailsRightSidebar = styled.div`
    margin-left: 0;
    ${device.xlarge}{
        margin-left: 40px;
    }
`
export const BlogAddBanner = styled.div`
    a {
        display: block;
        img {
            width: 100% !important;
        }
    }
`