import styled, { themeGet, device } from "@theme/utils";

export const HeaderWrap = styled.header`
    
`;
export const HeaderTopArea = styled.div`
    background-color: #22262a;
    padding-bottom: 10px;
`;
export const HeaderTopMenuList = styled.ul`
    margin-top: 10px;
    text-align: center;
    ${device.medium}{
        text-align: left;
    }

`
export const NavItem = styled.li`
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

export const HeaderTopContactInfo = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
`
export const HeaderTopSingleContactItem = styled.div`
    display: flex;
    align-items: center;
    color: #ffffff;
    margin: 0 8px;
    ${device.medium}{
        margin: 0 30px;
    }
`
export const HeaderTopContactIcon = styled.div`
    margin-right: 6px;
    display: inline-flex;
    ${device.medium}{
        margin-right: 15px;
    }
`
export const HeaderTopContactText = styled.div`
    font-size: 12px;
    color: #fff;
    ${device.small}{
        font-size: 14px;
    }
`
export const HeaderTopRightSide = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffc4a0;
    ${device.medium}{
        justify-content: flex-end;
    }
`
export const CountyName = styled.p`
    margin-bottom: 0;
    color: #ffc4a0;
`
export const Wayder = styled.span`

`
export const WayderIcon = styled.span`
    margin: 0 10px;
`
export const WayderText = styled.span`

`

export const HeaderMidArea = styled.div`
    margin-top: 20px;
    border-bottom: 1px solid #f3f3f3;
    padding-bottom: 20px;
`
export const Logo = styled.div`

`


export const HeaderAddBanner = styled.div`
    position: relative;
    display: none;
    ${device.large}{
        display: block;
    }

`
export const HeaderAddText = styled.h6`
    font-size: 15px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 50px;
    display: inline-block;
    span {
        display: block;
        font-size: 18px;
        text-align: left;
        margin-top: 3px;
        font-weight: bold;
    }
`



export const HeaderMidRightSide = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
`


export const SingleActionItem = styled.a`
    height: 40px;
    min-width: 40px;
    margin-left: 10px;
    background: #f4f4f4;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    &:hover {
        background: ${themeGet("colors.primary")};
    }
    ${device.large}{
        margin-left: 10px;
    }
    ${device.xlarge}{
        height: 45px;
        min-width: 45px;
        margin-left: 20px;
    }
`
export const HeaderBottomArea = styled.div`

`
export const HeaderActionArea = styled.div`
    position: relative;
    top: -0.5px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
export const ButtonBoxArea = styled.span`
    display: none;
    margin-top: 10px;
    ${device.small} {
        display: block;
    }
`;
export const MobileMenuBtn = styled.button`
    background-color: transparent;
    border: none;
    box-shadow: none;
    height: 21px;
    margin-left: 16px;
    margin-top: 0;
    position: relative;
    width: 35px;
    vertical-align: middle;
    ${device.large} {
        display: none;
    }
    span {
        background-color: ${themeGet("colors.primary")};
        border-radius: 2px;
        display: block;
        height: 3px;
        position: absolute;
        right: 0;
        transition: 0.4s;
        width: 100%;
        &:first-of-type {
            top: 0;
            width: 30px;
        }
        &:nth-of-type(2) {
            top: calc(50% - 0.3px);
            transform: translateY(-50%);
            width: 100%;
        }
        &:last-of-type {
            bottom: 0;
            width: 25px;
        }
    }
`;
export const MobileMenuArea = styled.div`
    position: fixed;
    right: -100%;
    top: 0;
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    height: 100vh;
    width: 100%;
    z-index: 9999;
    &.mobile-menu-open {
        opacity: 1;
        visibility: visible;
        pointer-events: visible;
        right: 0;
        .OffCanvasContent {
            transform: none;
            opacity: 1;
            visibility: visible;
        }
    }
    .OffCanvasContent {
        background-color: rgba(0, 0, 0, 0.8);
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        visibility: hidden;
        transition: 0.3s;
        height: 100%;
        width: 100%;
        z-index: 2;
    }
`;
export const OffCanvasInner = styled.div`
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    position: relative;
    transform: translateX(0);
    transition: 0.3s;
    height: 100vh;
    width: 100%;
    z-index: 3;
`;
export const OffCanvasContent = styled.div`
    width: 310px;
    background-color: #fff;
    height: 100%;
    padding: 0 30px;
    position: relative;
    overflow-y: auto;
    transition: 0.4s;
    transition-duration: 0.4s;
    transform: translateX(100%);
    width: 445px;
    z-index: 9;
    transform: none;
    transition-delay: 0.4s;
`;
export const OffCanvasHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;
export const CloseAction = styled.div``;
export const ButtonClose = styled.button`
    box-sizing: content-box;
    background: none;
    border: none;
    color: #999999;
    font-size: 30px;
    line-height: 1;
    opacity: 1;
    background: transparent
        url(
            data:image/svg + xml,
            %3csvgxmlns="http://www.w3.org/2000/svg"viewBox="0 0 16 16"fill="%23000"%3e%3cpathd="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"/%3e%3c/svg%3e
        )
        center/1em auto no-repeat;
    border: 0;
`;



