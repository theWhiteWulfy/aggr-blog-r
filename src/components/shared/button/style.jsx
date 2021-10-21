import styled, { themeGet, device, css } from "@theme/utils";
import { Link } from "gatsby";

export const createStyles = (theme, color, size, shape, variant) => css`
    height: 50px;
    line-height: 48px;
    padding: 0 30px;
    background: #f4f4f4;
    font-weight: 500;
    border-radius: 15px;
    font-size: 15px;
    &:hover {
        background-color: ${theme.colors.primary};
    }
    i {
        margin-left: 10px;
        font-size: 22px;
    }

    ${color === "primary" &&
    css`
        background-color: ${theme.colors.primary};
        font-weight: 500;
        color: #222;
        border: none;
        &:focus{
            outline: none !important;
        }
        &:hover,&:focus {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
            box-shadow: none;
        }
        i {
            margin-left: 10px;
            font-size: 22px;
        }
    `}
    ${color === "secondary" &&
    css`
        background: ${theme.colors.secondary};
        color: #fff;
    `}
    ${color === "light" &&
    css`
        background-color: transparent;
        border-color: #fff;
        padding: 10px 20px;
        font-size: 15px;
        min-height: 45px;
        min-width: 150px;
    `}
    ${color === "warning" &&
    css`
        background-color: #fed74b;
        padding: 10px 20px;
        font-size: 15px;
        color: #222;
        border: transparent;
        &:hover,&:focus {
            background-color: ${theme.colors.offer};
            color: #fff;
        }
    `}
    ${color === "bg-white" &&
    css`
        background-color: #fff;
        border-color: #222;
        padding: 10px 20px;
        font-size: 15px;
        min-height: 45px;
        min-width: 150px;
        &:hover,&:focus {
            background-color: #222;
            color: #fff;
        }
    `}
    
    ${color === "outlined-transparent" &&
    css`
        background-color: transparent;
    `}
    ${color === "bgSuccess" &&
    css`
        background-color: #218b00;
        color: #fff;
        &:hover,&:focus {
            background-color: #218b00;
            color: #fff;
        }
    `}
    
    ${color === "border-normal" &&
    css`
        border: 2px ​solid #ddd;
    `}


    ${size === "xsmall" &&
    css`
        border-radius: 19px;
        font-size: 15px;
        line-height: 1.2;
        min-height: 34px;
        min-width: 100px;
        font-size: ${theme.fontSize.body};
    `}
    ${size === "small" &&
    css`
        font-size: 15px;
        min-width: 150px;
        padding: 10px 18px;
        font-width: 500;
        font-size: ${theme.fontSize.body} ${device.small} {
            font-size: 13px;
            min-width: 135px;
            padding: 10px 18px;
        }
        i {
            font-size: 12px;
        }
    `}
    ${size === "medium" &&
    css`
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        display: inline-block;
        font-size: 15px;
    `}
    ${size === "large" &&
    css`
        padding: 0 30px;
        height: 60px;
        line-height: 60px;
        display: inline-block;
        font-size: 15px;
        ${device.large} {
            padding: 0 20px;
        }
        ${device.medium} {
            padding: 0 20px;
        }
    `}
    ${shape === "rounded" &&
    css`
        border-radius: 15px;
    `}
    ${shape === "rounded-10" &&
    css`
        border-radius: 10px;
    `}
    ${shape === "rounded-15" &&
    css`
        border-radius: 15px;
    `}

    ${variant === "outlined" &&
    css`
        background: transparent;
        color: ${theme.colors.text};
        border: 2px solid #d7d7d7;
        &:hover {
            background: ${theme.colors.primary};
            border: 2px solid ${theme.colors.primary};
            color: #fff;
        }
    `}
`;

export const StyledAnchor = styled.a``;

export const StyledLink = styled(Link)``;

export const StyledButton = styled.button``;
