import styled, { device, themeGet } from "@theme/utils";

export const ContactFromWrapper = styled.div`
    padding-bottom: 100px;
`
export const SectionTitle = styled.div`
    margin-bottom: 30px;
`
export const Title = styled.h3`
    font-size: 28px;
    ${device.medium}{
        font-size: 34px;
    }
    ${device.large}{
        font-size: 40px;
    }
`
export const ContactUsMap = styled.div`
    margin-top: 40px;
`
export const Iframe = styled.iframe`
    width: 100%;
    height: 300px;
    ${device.medium}{
        height: 400px;
    }
    ${device.large}{
        height: 700px;
    }
`