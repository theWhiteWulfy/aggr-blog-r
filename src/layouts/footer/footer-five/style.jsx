import styled, { device, themeGet } from "@theme/utils";
import FooterBg from "../../../data/images/bg/footer-bg-five.jpg"
export const FooterWrap = styled.footer`

`;
export const FooterMidArea = styled.div`
    background-color: ${themeGet('colors.primary')};
    background-image: url(${FooterBg});
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
    border: 2px solid #fff;
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
    }
`;

export const FooterBottomArea = styled.div`
    background: #462fd7;
    padding: 20px 0;
`
export const FooterBottomInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
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
        color: ${themeGet("colors.warning")};
    }
    ${device.medium} {
        padding: 0;
        margin-top: 0px;
    }
`;

export const HeaderTopMenuList = styled.ul`
    margin-top: 10px;
    text-align: center;
    margin-bottom: 10px;
    ${device.medium}{
        text-align: left;
    }

`
export const ListNavItem = styled.li`
    display: inline-block;
    padding-right: 20px;
    margin-right: 15px;
    position: relative;
    &::after {
        position: absolute;
        content: "";
        right: -0px;
        top: 50%;
        height: 4px;
        width: 4px;
        background: #ffc4a0;
        border-radius: 50000px;
        transform: translateY(-50%);
    }
    &:last-child {
        padding-right: 0px;
        margin-right: px;
        &::after {
            display: none;
        }
    }
    ${device.large}{
        padding-right: 15px;
        margin-right: 10px;
    }
    ${device.xlarge}{
        padding-right: 20px;
        margin-right: 15px;
    }
`
export const NavLink = styled.a`
    color: #ffffff; 
`