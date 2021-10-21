import styled, { themeGet, device } from "@theme/utils";

export const HeroSection = styled.div`
    padding: 60px 0;
    position: relative;
    ${device.medium}{
        padding: 80px 0;
    }
    ${device.large}{
        padding: 120px 0;
    }

`

export const SliderNavigation = styled.div`

    .navigation-button {
        display: none;
        ${device.medium}{
            display: inherit;
            width: 50px;
            height: 50px;
            line-height: 45px;
            border: 2px solid #e6e8ec;
            text-align: center;
            font-size: 25px;
            border-radius: 10px;
            color: #333;
            transition: all 0.3s ease-in-out;
            position: absolute;
            z-index: 1;
            background-color: transparent;
            transform: translateY(-50%);
            position: absolute;
            top: 50%;
            left: 5%;
            &.hero-slider-button-prev {
                left: auto;
                right: 5%;
            }
            &:hover {
                border: 2px solid ${themeGet('colors.primary')};
                background-color: ${themeGet('colors.primary')};
                color: #fff;
            }
        }
    }

`

