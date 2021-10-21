import {
    jsx,
    css,
    keyframes,
    Global,
    ThemeProvider,
    useTheme,
} from "@emotion/react";
import styled from "@emotion/styled";
import { themeGet } from "@styled-system/theme-get";

const breakpoints = ["576px", "768px", "992px", "1200px", "1400px", "1600px"];

export const device = {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
    xlarge: `@media screen and (min-width: ${breakpoints[3]})`,
    xxlarge: `@media screen and (min-width: ${breakpoints[4]})`,
    xxxlarge: `@media screen and (min-width: ${breakpoints[5]})`,
};

export { Global, css, jsx, keyframes, ThemeProvider, themeGet, useTheme };
export * from "styled-system";
export default styled;
