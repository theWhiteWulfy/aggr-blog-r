import styled, { device, themeGet } from "@theme/utils";

export const FaqWrapper = styled.div`
    .faq-box-wrap {
        margin-top: 100px;
        margin-bottom: 100px;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
    }
`
export const FaqSectionTitle = styled.div`
    margin-top: 30px;
`
export const FaqsTitle = styled.h4`
font-size: 32px;
margin-top: 50px;
    
    font-weight: 400;
    margin-right: 30px;
    span {
        font-weight: 600;
        display: block;
    }

    ${device.medium}{
        font-size: 42px;
        margin-top: 50px;
    }
    ${device.large}{
        font-size: 42px;
        margin-top: 50px;
    }
    ${device.xlarge}{
        font-size: 62px;
        margin-top: 100px;
    }  
`

export const FaqContentWrap = styled.div`
    border-left: 1px solid #ddd;
    .accordion__item {
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #ddd;
        &:last-child {
            border-bottom: none;
        }
    }  
    .accordion__heading {
        background: transparent;
        border: none;
        font-weight: 600;
        font-size: 14px;
        padding: 20px 0 20px 10px;
        .acc-btn {
            display: flex;
        }
        ${device.medium}{
            padding: 40px 0 40px 40px;
            font-size: 20px;
        }

        & .number-of-accordion {
            min-height: 46px;
            min-width: 46px;
            text-align: center;
            line-height: 46px;
            background-color: #f4f4f4;
            border-radius: 10px;
            margin-right: 20px;
            font-size: 15px;
            display: inline-block;
        }
        & [aria-expanded=true] {
            & .number-of-accordion {
                background-color: ${themeGet("colors.primary")};
                color: #fff;
            }
        }
    }
    .accordion__panel {
        font-size: 14px;
        padding: 0px 0 20px 10px;
        ${device.medium}{
            font-size: 15px;
            padding: 0 0 40px 100px;
        }
    }
`

