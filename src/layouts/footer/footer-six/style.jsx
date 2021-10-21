import styled, { device, themeGet } from "@theme/utils";

export const FooterWrap = styled.footer`
    

`;
export const FooterTopArea = styled.div`
    background-color: #081b3c;
`;
export const FooterWidgetTop = styled.div`
    padding: 45px 0 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    ${device.large}{
        flex-direction: row;
    }
`
export const FooterWidgeiInfoTextBox = styled.div`
    max-width: 300px;
    ${device.medium}{
        max-width: 400px;
    }
    ${device.large}{
        max-width: 440px;
    }
`

export const Title = styled.h2`
    color: #fff;
`;

export const NewsletterInputBox = styled.div`
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    flex-direction: column;
    width: 100%;
    ${device.small}{
        flex-direction: row;
    }
`

export const NewsletterInput = styled.input`
    max-width: 100%;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-right: 20px;
    padding: 5px 15px;
    font-weight: 500;
    height: 60px;
    margin-top: 30px;
    color: #fff;
    margin-bottom: 20px;
    &::-webkit-input-placeholder { /* Edge */
        color: #fff;
    }
    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #fff;
    }
    &::placeholder {
        color: #fff;
    } 
    ${device.small}{
        max-width: 270px;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    ${device.medium}{
        max-width: 300px;
    }

    ${device.large}{
        max-width: 320px;
    }
    ${device.xlarge}{
        max-width: 450px;
    }

`


export const FooterMidArea = styled.div`
    background-color: #0a1e43;
    padding: 60px 0 90px;
`;
export const FooterWidget = styled.div`
    margin-top: 30px;
    max-width: 280px;
    &.footer-subscribe-center {
        margin-left: 0;
        
        ${device.medium} {
            margin-right: 0;
            margin-left: auto;
            margin-right: auto;
        }
        
    }
`;

export const FooterDec = styled.p`
     color: #fff;
`

export const FooterLogo = styled.div`
    margin-bottom: 20px;
`;


export const FooterSubscribeWrap = styled.div`
    
`
export const SingleInput = styled.div`
    margin-bottom: 15px;
`
export const Input = styled.input`
    width: 100%;
    max-width: 300px;
    font-weight: 500;
    padding: 15px 30px;
    border: 1px solid #453095;
    background-color: transparent;
    border-radius: 15px;
    color: ${themeGet("colors.white")};
    height: 60px;
    ::-webkit-input-placeholder { /* Edge */
        color: #fff;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #fff;
    }
    ::placeholder {
        color: #fff;
    }
`
export const ButtonBox = styled.div`
    a {
        color: #fff;
    }
`

export const FooterMenuWidget = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: -10px;
    margin-left: -5px;
    flex-wrap: wrap;
`;
export const SingleFooterMenu = styled.div`
    flex: 0 0 auto;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 30px;
    width: 50%;
    ${device.small} {
        width: 33.3333%;
        padding-left: 5px;
        padding-right: 10px;
    }
`;
export const FooterWidgetTitle = styled.div`
    margin-bottom: 30px;
`;
export const WidgetTitle = styled.h4`
    color: #ffffff;
`;
export const FooterWidgetMenuList = styled.ul`
    
`;
export const NavItem = styled.li`
    margin-bottom: 10px;
    a {
        color: #ffff;
        &:hover {
            color: ${themeGet("colors.primary")};
        }
    }
`;

export const FooterBottomArea = styled.div`
    background: #0a1e43;
    padding: 20px 0;
`
export const FooterBottomInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${device.medium} {
        flex-direction: row;
    }
`

export const CopyrightText = styled.p`
    color: #f4faff;
    font-size: 15px;
    margin-bottom: 0;
    margin-top: 20px;
    & > svg {
        width: 15px;
        height: 15px;
        path {
            fill: red;
        }
    }
    a {
        color: ${themeGet("colors.white")};
    }
    ${device.medium} {
        padding: 0;
        margin-top: 0px;
    }
`;

export const ButtonRightBox = styled.div`
    margin-top: 20px;
    a {
        color: #fff;
    }
`