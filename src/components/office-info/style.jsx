import styled, { device, themeGet } from "@theme/utils";

export const SingleOfficeInfowrap = styled.div`
    margin-top: 30px;
    &:hover {
        .hover-btn {
            background-color: ${themeGet("colors.primary")};
        }
    }
`
export const OfficeThum = styled.div`
    margin-top: 30px;
    padding: 30px;
    background: #f7f7f7;
    border-radius: 15px;
    position: relative;
`
export const OfficeTitle = styled.span`
    position: absolute;
    bottom: 60px;
    text-align: center;
    left: 50%;
    display: inline-block;
    background-color: #333;
    border-radius: 15px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    color: #ffffff;
    padding: 10px 40px;
    transition: all 0.3s ease-in-out;

`
export const SingleOfficeInfoBox = styled.div`
    margin-top: 30px;
    padding: 40px 15px;
    border: 1px solid #ddd;
    border-radius: 15px;
    background-color: transparent;
    &:hover {
        border: 1px solid ${themeGet("colors.primary")};
    }
    ${device.medium}{
        padding: 40px 15px;
    }
    ${device.large}{
        padding: 40px 15px;
    }
    ${device.xlarge}{
        padding: 40px 55px;
    }
`
export const SingleContactInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
export const IconBox = styled.span`
    min-height: 45px;
    min-width: 45px;
    line-height: 45px;
    border-radius: 10px;
    margin-right: 20px;
    text-align: center;
    background-color: #f4f4f4;
    .gatsby-image-wrapper-constrained {
        vertical-align: middle!important;
    }
`
export const ContactText = styled.span`

`
export const NavLink = styled.a`

`
export const ShareWrap = styled.div`

`
export const Title = styled.h4`

`