import styled, {themeGet, device } from "@theme/utils";

export const SpecialForBeginnerArea = styled.div`
    padding: 60px 0;
    ${device.medium}{
        padding: 80px 0;
    }
    ${device.large}{
        padding: 120px 0;
    }
`
export const SectionTitle = styled.div`
    position: relative;
    margin-bottom: 10px;
    text-align: center;
`
export const Title = styled.h2`
    color: #0f034a;
    background: #fff;
    display: inline-block;
    position: relative;
    z-index: 1;
`
export const SpecialBannerImage = styled.div`
    margin-bottom: 20px;
`