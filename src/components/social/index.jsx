/** @jsx jsx */
import { jsx } from "theme-ui";
import { Children } from "react";
import PropTypes from "prop-types";
import { StyledSocial } from "./style";
import SocialLink from "./social-link";

const Social = ({ children, className, sx, dir, variant, shape, bgColor, size, space }) => {
    const RenderChild = Children.map(children, (el) => {
        const child = el;
        if (child !== null) {
            const childType = child.type;
            const name = childType.displayName || childType.name;
            if (name === "SocialLink") {
                return (
                    <child.type
                        {...child.props}
                        variant={variant}
                        dir={dir}
                        size={size}
                        space={space}
                        shape={shape}
                        bgColor={bgColor}
                    />
                );
            }
        }
        return null;
    });
    return (
        <StyledSocial className={className} sx={sx}>
            {RenderChild}
        </StyledSocial>
    );
};

Social.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
    variant: PropTypes.oneOf(["contained", "outlined", "texted"]),
    shape: PropTypes.oneOf(["square", "rounded-5", "rounded-10", "rounded-15", "oval"]),
    dir: PropTypes.oneOf(["horizontal", "vertical"]),
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
    bgColor: PropTypes.oneOf(["default", "black", "bgWhite", "themetwo", "themethree", "transparent" ]),
    space: PropTypes.number,
};

Social.defaultProps = {
    dir: "horizontal",
    size: "md",
    shape: "rounded-5",
    bgColor: "default"
};

export { SocialLink };
export default Social;
