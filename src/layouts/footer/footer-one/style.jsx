import styled, { device, themeGet } from "@theme/utils";

export const FooterWrap = styled.footer`
    

`;
export const FooterTopArea = styled.div`
    background-color: #22262a;
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
    border: 1px solid #2d3135;
    border-radius: 10px;
    font-weight: 500;
    padding: 15px 30px;
    background-color: #2d3135;
    color: #ffc4a0;
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
    background: #2d3135;
`
export const FooterBottomInner = styled.div`
    display: flex;
    justify-content: space-between;
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
        color: ${themeGet("colors.primary")};
    }
    ${device.medium} {
        padding: 0;
        margin-top: 0px;
    }
`;

export const ButtonRightBox = styled.div`
    padding: 10px 0;
`