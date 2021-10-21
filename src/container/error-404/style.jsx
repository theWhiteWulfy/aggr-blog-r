import styled, { device, themeGet } from "@theme/utils";


export const ErrorWrap = styled.div`
    padding: 100px 0;
    position: relative;
`

export const ErrorContent = styled.div`
    text-align: center;
`
export const BannerWrap = styled.div`

`
export const ErrorText = styled.div`
    text-align: center;
    max-width: 600px;
    margin: auto;
    margin-top: 50px;
`
export const SubTitle = styled.h5`

`
export const Title = styled.h2`

`
export const ButtonBox = styled.div`

`

export const ErrorAreaShap = styled.div`
    position: absolute;
    bottom: 0px;
    left: 20px;
    display: none;
    ${device.large}{
        left: 100px;
    }
    ${device.medium}{
        display: block;
    }
`