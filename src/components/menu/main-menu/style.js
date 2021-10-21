import styled, { themeGet, device } from "@theme/utils";

export const HeaderNavigationArea = styled.div`
    display: none;
    ${device.large} {
        display: block;
    }
`;
export const Navbar = styled.ul`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
`;
export const Navitem = styled.li`
    margin: 0 18px;
    position: relative;
    text-align: left;
    display: inline-block;
    &:first-of-type {
        margin-left: 0;
    }

    ${device.large}{
        margin: 0 15px;
    }
    ${device.xlarge}{
        margin: 0 25px;
    }

    &:last-of-type {
        margin-right: 0;
    }
    a {
        display: block;
        color: #000000;
        padding: 30px 2px;
        position: relative;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.18;
        transition: all 0.0s ease-in-out;
        &:hover,
        &.active {
            color: ${themeGet("colors.primary")};
        }
        &[aria-current="page"]{
            color: ${themeGet("colors.primary")} !important;
        }
    }

    &.has-submenu {
        padding-right: 10px;
        position: relative;
        > a {
            position: relative;
            &::after {
                position: static;
                margin-left: 5px;
                font-family: IcoFont!important;
                content: "\\ea99";
                font-size: 16px;
                vertical-align: middle;
                transition: all 0.3s ease-in-out;
            }
        }
        > .submenu-nav {
            position: absolute;
            top: 100%;
            left: -20px;
            box-shadow: 0 2px 29px rgba(0 0 0 / 5%);
            border-bottom: 3px solid ${themeGet("colors.primary")};
            background-color: #ffffff;
            transform: translateY(50px);
            transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
            transition-delay: 0.2s;
            transition-duration: 0.4s;
            visibility: hidden;
            opacity: 0;
            min-width: 200px;
            padding: 15px 0;
            z-index: 9;
            & > li {
                position: relative;
                & > a {
                    display: block;
                    padding: 5px 20px;
                    margin: 0;
                    color: #000000;
                    font-weight: 500;
                    transition: 0s;
                    &:hover {
                        color: ${themeGet("colors.primary")};
                    }
                }
            }
        }
        &:hover {
            > .submenu-nav {
                transform: none;
                opacity: 1;
                visibility: visible;
            }
        }
    }
`;
