import styled, {themeGet, device} from "@theme/utils";

export const AboutHistoryArea = styled.div`
    padding-bottom: 60px;
`
export const SinglePlatformBox = styled.div`
    background-color: #fafafa;
    padding: 20px;
    border-radius: 10px;
    margin-top: 30px;
    ${device.xlarge}{
        padding: 40px;
    }
    &.platform-d-flex {
        display: flex;
        flex-direction: column;
        ${device.medium}{
            flex-direction: row;
        }
    }
`
export const PlatformIcon = styled.div`
    background-color: ${themeGet("colors.primary")};
    display: inline-block;
    height: 90px;
    width: 90px;
    line-height: 90px;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 20px;
    & .gatsby-image-wrapper-constrained {
        vertical-align: middle !important;
    }
`
export const PlatformContent = styled.div`
    
`
export const Title = styled.h3`
    margin-bottom: 20px;
`
export const TextDec = styled.p`
    
`
export const TextDec2 = styled.p`
    
`
export const PlatformContentBox = styled.div`
    max-width: 100%;
    padding-right: 20px;
    ${device.medium}{
        max-width: 300px;
    }
`
export const PlateformImageBox = styled.div`
    margin-left: 0px;
    margin-top: 30px;
    ${device.medium}{
        margin-left: 30px;
        margin-top: 0px;
    }
    ${device.large}{
        margin-left: 0px;
    }
    ${device.xlarge}{
        margin-left: 0px;
    }
`
export const PlateforemImage = styled.div`
    position: relative;
`
export const PlatformBoxButton = styled.div`
    position: absolute;
    width: 100%;
    bottom: 30px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
`