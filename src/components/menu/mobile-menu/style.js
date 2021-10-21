import styled, { themeGet, device } from "@theme/utils";

export const MobileMenuContent = styled.div``;
export const Navbar = styled.ul`
    margin-top: 50px;
`;
export const MobileNavitem = styled.li`
    border-bottom: 1px solid #f1f1f1;
    position: relative;

    &:last-child {
        border-bottom: none;
    }
    a {
        padding: 12px 0px;
        color: #001d23;
        display: block;
        width: 100%;
        font-size: 17px;
        font-weight: 500;
        line-height: 22px;
        position: relative;
        &:hover {
            color: ${themeGet("colors.primary")};
        }
    }
    &.has-submenu-dropdown {
        .menu-toggle {
            position: absolute;
            top: 12px;
            right: 0;
            border: none;
            justify-content: center;
            cursor: pointer;
            color: #333;
            background-color: transparent;
            padding: 4px 20px;
        }
        .submenu-nav {
            display: none;
            border-top: 1px solid #f1f1f1;
            padding-left: 15px;
        }
    }
`;
