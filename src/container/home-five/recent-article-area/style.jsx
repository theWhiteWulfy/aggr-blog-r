import styled, { themeGet, device } from "@theme/utils";
export const SectionWrap = styled.div`
    padding-top: 60px;
    ${device.medium}{
        padding-top: 80px;
    }
    ${device.large}{
        padding-top: 120px;
    }

`
export const SectionTitle = styled.div`

`
export const Title = styled.h2`

`
export const ButtonBox = styled.div`
    text-align: center;
    margin-top: 40px;
    a {
        color: #fff;
    }
`
export const ArchivePostInnerWrap = styled.div`
    ${device.large}{
        max-width: 300px;
        margin-left: auto;
    }
`
export const AddBannerArea = styled.div`
    
`