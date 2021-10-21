import styled, { css } from "@theme/utils";

export const StyledSocial = styled.div``;

export const createStyles = (theme, dir, variant, shape, bgColor, size, space) => css`
    ${dir === "horizontal" &&
    css`
        display: inline-block;
        ${space &&
        css`
            margin-right: ${space}px;
            &:last-of-type {
                margin-right: 0;
            }
        `}
    `}
    ${dir === "vertical" &&
    css`
        display: block;
        ${space &&
        css`
            margin-bottom: ${space}px;
            &:last-of-type {
                margin-bottom: 0;
            }
        `}
    `}
    ${variant === "texted" &&
    css`
        padding: 0;
        color: ${theme.colors.black};
        background: transparent !important;
        height: auto !important;
        width: 30px !important;
        &:hover {
            color: ${theme.colors.primary} !important;
        }
    `}
    
    ${bgColor === "default" &&
    css`
        background: #ddd;
        &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
        }
    `}
    ${bgColor === "black" &&
    css`
        background: #2d3135;
        color: ${theme.colors.white};
        &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
        }
    `}
    ${bgColor === "bgWhite" &&
    css`
        background: ${theme.colors.white};
        color: #222;
        &:hover {
            background: #222;
            color: ${theme.colors.white};
        }
    `}
    ${bgColor === "themetwo" &&
    css`
        background: #3b4179;
        color: ${theme.colors.white};
        &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
        }
    `}
    ${bgColor === "themethree" &&
    css`
        background: #5974ff;
        color: ${theme.colors.white};
        &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
        }
    `}
    ${bgColor === "transparent" &&
    css`
        background: transparent;
        border: 1px solid #fff;
        color: ${theme.colors.white};
        &:hover {
            background: ${theme.colors.white};
            color: ${theme.colors.primary};
        }
    `}
    ${shape === "rounded-5" &&
    css`
        border-radius: 5px;
    `}
    ${shape === "rounded-10" &&
    css`
        border-radius: 10px;
    `}
    ${shape === "rounded-15" &&
    css`
        border-radius: 15px;
    `}

    ${size === "md" &&
    css`
        font-size: 16px;
        height: 45px;
        width: 45px;
        line-height: 45px;
        text-align: center;
    `}
    ${size === "sm" &&
    css`
        font-size: 14px;
        height: 40px;
        width: 40px;
        line-height: 40px;
        text-align: center;
    `}
`;

export const StyledLink = styled.a``;
