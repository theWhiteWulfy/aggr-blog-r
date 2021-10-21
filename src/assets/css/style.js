import React from "react";
import { Global, css, device, useTheme } from "@theme/utils";

export const GlobalCSS = () => {
    const theme = useTheme();
    return (
        <Global
            styles={css`
                * {
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                }
                html {
                    -webkit-text-size-adjust: 100%;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    scroll-behavior: smooth;
                    // Default
                    height: 100%;
                    font-size: 37.5%; // 1rem = 6px

                    // Medium Device >=768
                    ${device.medium} {
                        font-size: 43.75%; // 1rem = 7px
                    }

                    // Large Device >=992
                    ${device.large} {
                        font-size: 50%; // 1rem = 8px
                    }

                    // Extra Large Device >=1200
                    ${device.xlarge} {
                        font-size: 56.25%; // 1rem = 9px
                    }

                    // Extra Large Device >=1367
                    ${device.xxlarge} {
                        font-size: 62.5%; // 1rem = 10px
                    }
                }
                article,
                aside,
                details,
                figcaption,
                figure,
                footer,
                header,
                nav,
                section,
                summary {
                    display: block;
                }
                audio,
                canvas,
                video {
                    display: inline-block;
                }
                audio:not([controls]) {
                    display: none;
                    height: 0;
                }
                [hidden] {
                    display: none;
                }
                html,
                button,
                input,
                select,
                textarea {
                    font-family: "Gordita";
                }
                a:focus {
                    outline: thin dotted;
                }
                a:active,
                a:hover {
                    outline: 0;
                }
                b,
                strong {
                    font-weight: bold;
                }
                blockquote,
                q {
                    -webkit-hyphens: none;
                    -moz-hyphens: none;
                    -ms-hyphens: none;
                    hyphens: none;
                    quotes: none;
                }
                small {
                    font-size: smaller;
                }
                sub,
                sup {
                    font-size: 75%;
                    line-height: 0;
                    position: relative;
                    vertical-align: baseline;
                }
                sup {
                    top: -0.5em;
                }
                sub {
                    bottom: -0.25em;
                }
                li > ul,
                li > ol {
                    margin: 0;
                }
                img {
                    -ms-interpolation-mode: bicubic;
                    border: 0;
                    vertical-align: middle;
                }
                svg:not(:root) {
                    overflow: hidden;
                }
                figure {
                    margin: 0;
                }
                form {
                    margin: 0;
                }
                button,
                input,
                select,
                textarea {
                    font-size: 100%;
                    margin: 0;
                    max-width: 100%;
                    vertical-align: baseline;
                }

                button,
                input {
                    line-height: normal;
                }

                button,
                html input[type="button"],
                input[type="reset"],
                input[type="submit"] {
                    -webkit-appearance: button;
                    -moz-appearance: button;
                    appearance: button;
                    cursor: pointer;
                }

                button[disabled],
                input[disabled] {
                    cursor: default;
                }

                input[type="checkbox"],
                input[type="radio"] {
                    padding: 0;
                }

                input[type="search"] {
                    -webkit-appearance: textfield;
                    -moz-appearance: textfield;
                    appearance: textfield;
                    appearance: textfield;
                    padding-right: 2px;
                    width: 100%;
                }

                input[type="search"]::-webkit-search-decoration {
                    -webkit-appearance: none;
                    appearance: none;
                }

                button::-moz-focus-inner,
                input::-moz-focus-inner {
                    border: 0;
                    padding: 0;
                }
                textarea {
                    overflow: auto;
                    vertical-align: top;
                }
                * {
                    box-sizing: border-box;
                }
                img {
                    max-width: 100%;
                }
                html {
                    overflow: hidden;
                    overflow-y: auto;
                }
                body {
                    overflow: hidden;
                    margin: 0;
                    padding: 0;
                    line-height: ${theme.lineHeights.body};
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    font-family: ${theme.fonts.body};
                    font-weight: ${theme.fontWeights.body};
                    color: ${theme.colors.text};
                    font-size: ${theme.fontSize.body};
                    background-color: ${theme.colors.white};
                }
                a {
                    transition: ${theme.transition};
                    color: ${theme.colors.heading};
                    text-decoration: none;
                    &:hover {
                        text-decoration: none;
                        color: ${theme.colors.primary};
                    }
                }
                ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }
                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                .h1,
                .h2,
                .h3,
                .h4,
                .h5,
                .h6 {
                    font-family: ${theme.fonts.heading};
                    line-height: ${theme.lineHeights.heading};
                    color: ${theme.colors.heading};
                    font-weight: ${theme.fontWeights.heading};
                    margin: 0;
                    margin-bottom: 8px;
                }
                h1,
                .h1 {
                    font-size: ${theme.fontSize.h1[0]};
                    ${device.small} {
                        font-size: ${theme.fontSize.h1[1]};
                    }
                    ${device.medium} {
                        font-size: ${theme.fontSize.h1[2]};
                    }
                    ${device.large} {
                        font-size: ${theme.fontSize.h1[3]};
                    }
                    ${device.xlarge} {
                        font-size: ${theme.fontSize.h1[4]};
                    }
                }
                h2,
                .h2 {
                    font-size: ${theme.fontSize.h2[0]};
                    ${device.small} {
                        font-size: ${theme.fontSize.h2[1]};
                    }
                    ${device.medium} {
                        font-size: ${theme.fontSize.h2[2]};
                    }
                    ${device.large} {
                        font-size: ${theme.fontSize.h2[3]};
                    }
                    ${device.xlarge} {
                        font-size: ${theme.fontSize.h2[4]};
                    }
                }
                h3,
                .h3 {
                    font-size: ${theme.fontSize.h3[0]};
                    ${device.small} {
                        font-size: ${theme.fontSize.h3[1]};
                    }
                    ${device.medium} {
                        font-size: ${theme.fontSize.h3[2]};
                    }
                    ${device.large} {
                        font-size: ${theme.fontSize.h3[3]};
                    }
                    ${device.xlarge} {
                        font-size: ${theme.fontSize.h3[4]};
                    }
                    
                }
                h4,
                .h4 {
                    font-size: ${theme.fontSize.h4[0]};
                    ${device.large} {
                        font-size: ${theme.fontSize.h4[1]};
                    }
                }
                h5,
                .h5 {
                    font-size: ${theme.fontSize.h5[0]};
                    ${device.large} {
                        font-size: ${theme.fontSize.h5[1]};
                    }
                }
                h6,
                .h6 {
                    font-size: ${theme.fontSize.h6[0]};
                    ${device.large} {
                        font-size: ${theme.fontSize.h6[1]};
                    }
                }
                p {
                    margin: 0 0 15px;
                    font-family: ${theme.fonts.body};
                    color: ${theme.colors.text};
                    &:last-child {
                        margin-bottom: 0;
                    }
                    &:only-child {
                        margin-bottom: 0;
                    }
                }
                input,
                button,
                select,
                textarea {
                    background: transparent;
                    border: 1px solid ${theme.colors.boder};
                    transition: ${theme.transition};
                    color: ${theme.colors.text};
                    &:focus,
                    &:active {
                        outline: none;
                        border-color: ${theme.colors.primary};
                    }
                }
                input,
                select,
                textarea {
                    width: 100%;
                    font-size: 14px;
                }
                input,
                select {
                    height: 40px;
                    padding: 0 15px;
                }
                .wrapper {
                    position: relative;
                }
                .cat-btn {
                    min-width: 76px;
                    font-size: 14px;
                    text-align: center;
                    padding: 4px 10px;
                    border-radius: 10px;
                    color: #222;
                    display: inline-block;
                    background-color: #ffebdf;
                    ${device.medium} {
                        min-width: 100px;
                        font-size: 15px;
                    }
                    &.education {
                        background-color: #e1f3ff;
                    }
                    &.food {
                        background-color: #f9e7a0;
                    }
                    &.video {
                        background-color: #d2ccc9;
                    }
                    &.doctor {
                        background-color: #e6f9ed;
                    }
                    &.lifestyle {
                        background-color: #e1fae3;
                    }
                    &.technology {
                        background-color: #c8e8d4;
                    }
                    &.marketing {
                        background-color: #e2d4cb;
                    }
                    &.travel {
                        background-color: #eaf6fd;
                    }
                }
                .cat-lg-btn {
                    min-width: 80px;
                    font-size: 16px;
                    text-align: center;
                    padding: 0 20px;
                    height: 40px;
                    line-height: 40px;
                    border-radius: 10px;
                    color: #222;
                    display: inline-block;
                    background-color: #ffebdf;
                    ${device.medium} {
                        padding: 0 30px;
                        height: 60px;
                        line-height: 60px;
                    }
                    &.education {
                        background-color: #e1f3ff;
                    }
                    &.food {
                        background-color: #f9e7a0;
                    }
                    &.video {
                        background-color: #d2ccc9;
                    }
                    &.doctor {
                        background-color: #e6f9ed;
                    }
                    &.lifestyle {
                        background-color: #e1fae3;
                    }
                    &.technology {
                        background-color: #c8e8d4;
                    }
                    &.marketing {
                        background-color: #e2d4cb;
                    }
                    &.travel {
                        background-color: #eaf6fd;
                    }
                }

                .container {
                    max-width: 100%;
                    padding-right: var(--bs-gutter-x,2.50rem);
                    padding-left: var(--bs-gutter-x,2.50rem);
                    ${device.small} {
                        
                    }
                    ${device.medium} {
                        max-width: 720px;
                        padding-right: var(--bs-gutter-x,.75rem);
                        padding-left: var(--bs-gutter-x,.75rem);
                    }
                    ${device.large} {
                        max-width: 960px;
                    }
                    ${device.xlarge} {
                        max-width: 1200px;
                    }
                   
                }

                .link-overlay {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    text-indent: -99999px;
                }

                     
                .container-custom-xl {
                    max-width: 1540px;
                    width: 100%;
                    @media #{$laptop-device} {
                        max-width: 100%;
                    }
                    @media #{$desktop-device} {
                        max-width: 100%;
                        width: 100%;
                    }
                }
                .container-custom-150 {
                    padding-right: 15px;
                    padding-left: 15px;
                    ${device.medium} {
                        padding-right: 15px;
                        padding-left: 15px;
                    }
                    ${device.large} {
                        padding-right: 15px;
                        padding-left: 15px;
                    }
                    ${device.xlarge} {
                        padding-right: 50px;
                        padding-left: 50px;
                    }
                    ${device.xxlarge} {
                        padding-right: 80px;
                        padding-left: 80px;
                    }
                    ${device.xxxlarge} {
                        padding-right: 115px;
                        padding-left: 115px;
                    }
                }

                .row--35 {
                    margin-left: -15px;
                    margin-right: -15px;
                    // Responsive
                    ${device.medium} {
                        margin-left: -15px;
                        margin-right: -15px;
                    }
                    ${device.large} {
                        margin-left: -15px;
                        margin-right: -15px;
                    }
                    ${device.xlarge} {
                        margin-left: -35px;
                        margin-right: -35px;
                    }

                    &>[class*="col"],
                    &>[class*="col-"] {
                        padding-left: 15px;
                        padding-right: 15px;

                        // Responsive
                        ${device.medium} {
                            padding-left: 15px;
                            padding-right: 15px; 
                        }
                        ${device.large} {
                            padding-left: 15px;
                            padding-right: 15px;
                        }
                        ${device.xlarge} {
                            padding-left: 35px;
                            padding-right: 35px;
                        }
                    }
                }
                .row--30 {
                    margin-left: -15px;
                    margin-right: -15px;
                    // Responsive
                    ${device.medium} {
                        margin-left: -15px;
                        margin-right: -15px;
                    }
                    ${device.large} {
                        margin-left: -15px;
                        margin-right: -15px;
                    }
                    ${device.xlarge} {
                        margin-left: -30px;
                        margin-right: -30px;
                    }

                    &>[class*="col"],
                    &>[class*="col-"] {
                        padding-left: 15px;
                        padding-right: 15px;

                        // Responsive
                        ${device.medium} {
                            padding-left: 15px;
                            padding-right: 15px; 
                        }
                        ${device.large} {
                            padding-left: 15px;
                            padding-right: 15px;
                        }
                        ${device.xlarge} {
                            padding-left: 30px;
                            padding-right: 30px;
                        }
                    }
                }
                .row--17 {
                    padding-left: 15px;
                    padding-right: 15px;
                    // Responsive
                    ${device.medium} {
                        padding-left: 15px;
                        padding-right: 15px;
                    }
                    ${device.large} {
                        padding-left: 15px;
                        padding-right: 15px;
                    }
                    ${device.xlarge} {
                        margin-left: -17px;
                        margin-right: -17px;
                    }

                    &>[class*="col"],
                    &>[class*="col-"] {
                        padding-left: 15px;
                        padding-right: 15px;
                        // Responsive
                        ${device.medium} {
                            padding-left: 15px;
                            padding-right: 15px;
                        }
                        ${device.large} {
                            padding-left: 15px;
                            padding-right: 15px;
                        }
                        ${device.xlarge} {
                            padding-left: 17px;
                            padding-right: 17px;
                        }
                    }
                }
                .row--10 {
                    margin-left: -10px;
                    margin-right: -10px;

                    // Responsive
                    ${device.medium} {
                        margin-left: -10px;
                        margin-right: -10px;
                    }
                    ${device.large} {
                        margin-left: -10px;
                        margin-right: -10px;
                    }
                    ${device.xlarge} {
                        margin-left: -10px !important;
                        margin-right: -10px !important;
                    }

                    &>[class*="col"],
                    &>[class*="col-"] {
                        padding-left: 10px;
                        padding-right: 10px;
                        // Responsive
                        ${device.medium} {
                            padding-left: 10px;
                            padding-right: 10px;
                        }
                        ${device.large} {
                            padding-left: 10px !important;
                            padding-right: 10px !important;
                        }
                        ${device.xlarge} {
                            padding-left: 10px !important;
                            padding-right: 10px !important;
                        }
                    }
                }

            `}
        />
    );
};
