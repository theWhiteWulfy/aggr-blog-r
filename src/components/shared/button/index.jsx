/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { StyledButton, StyledAnchor, StyledLink, createStyles } from "./style";

const Button = ({
    children,
    type,
    color,
    size,
    shape,
    variant,
    sx,
    className,
    path,
    label,
    ...props
}) => {
    const buttonProps = {
        css: (theme) => createStyles(theme, color, size, shape, variant),
    };
    if (path) {
        const internal = /^\/(?!\/)/.test(path);
        const isHash = path.startsWith("#");

        if (internal) {
            return (
                <StyledLink
                    className={className}
                    to={path}
                    {...buttonProps}
                    sx={sx}
                >
                    {label && <span className="sr-only">{label}</span>}
                    <span>{children}</span>
                </StyledLink>
            );
        }
        if (isHash) {
            return (
                <StyledAnchor
                    className={className}
                    href={path}
                    {...buttonProps}
                    sx={sx}
                >
                    {label && <span className="sr-only">{label}</span>}
                    <span>{children}</span>
                </StyledAnchor>
            );
        }
        return (
            <StyledAnchor
                href={path}
                {...buttonProps}
                sx={sx}
                target="_blank"
                rel="noopener"
                className={className}
            >
                {label && <span className="sr-only">{label}</span>}
                <span>{children}</span>
            </StyledAnchor>
        );
    }

    return (
        <StyledButton
            className={className}
            type={type}
            {...buttonProps}
            sx={sx}
        >
            {children}
        </StyledButton>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    sx: PropTypes.object,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "dark",
        "light",
        "warning",
        "outlined-transparent",
        "border-gradient",
        "border-normal",
        "bgSuccess",
        "bg-white"
    ]),
    size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "fullwidth"]),
    shape: PropTypes.oneOf(["square", "rounded-10", "rounded-15", "rounded", "oval"]),
    variant: PropTypes.oneOf(["outlined", "iconButton"]),
    path: PropTypes.string,
    label: PropTypes.string,
};

Button.defaultProps = {
    type: "button",
    size: "medium",
    shape: "rounded",
    color: "primary"
};

export default Button;
