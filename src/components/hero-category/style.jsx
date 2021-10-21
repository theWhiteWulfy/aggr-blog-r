import styled, { device, themeGet } from "@theme/utils";


export const SingleHeroCategoryItem = styled.div`
    a {
        display: block;
        margin-bottom: 0;
        margin-top: 35px;
        position: relative;
        ${device.small}{
            margin-top: 0px;
            margin-bottom: 28px;
        }
        ${device.medium}{
            margin-top: 0px;
            margin-bottom: 25px;
        }
        ${device.large}{
            margin-bottom: 20px;
        }
        ${device.xlarge}{
            margin-bottom: 30px;
        }
        
        .gatsby-image-wrapper-constrained {
            display: block !important;
            img {
                border-radius: 15px;
                width: 100%;
            }
        }
        &::after {
            position: absolute;
            height: 100%;
            width: 100%;
            content: "";
            left: 0;
            top: 0;
            background-color: rgba(0, 0, 0, 0.7);
            border-radius: 15px;
            opacity: 0;
            visibility: hidden;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
        }
    }
    .single-hero-hover {
        opacity: 0;
        visibility: hidden;
    }
    &:hover {
        a {
            &::after {
                opacity: 1;
                visibility: visible;
            }
        }
        .single-hero-hover {
            opacity: 1;
            visibility: visible;
        }
    }
`

export const HeroCategoryInnerBox = styled.div`
    position: absolute;
    opacity: 0;
    visibility: hidden;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    color: #fff;
    z-index: 1;
    transition: all 0.3s ease-in-out;
    .icon {
        font-size: 28px;
        height: 40px;
        width: 40px;
        background-color: ${themeGet("colors.primary")};
        line-height: 40px;
        text-align: center;
        border-radius: 50000px;
    }
    ${device.large}{
        padding: 10px 20px;
    }
    ${device.xlarge}{
        padding: 10px 30px;
    }
    
`
export const Title = styled.h3`
    color: #ffffff;

    ${device.medium}{
        font-size: 18px;
    }
    ${device.xlarge}{
        font-size: 20px;
    }
`

