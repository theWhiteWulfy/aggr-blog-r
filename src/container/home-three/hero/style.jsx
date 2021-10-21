import styled, { device } from "@theme/utils";
import HeroThreeBg from "../../../data/images/hero/home-3-hero-bg.jpg"

export const HeroAreaThree = styled.div`
    background-image: url(${HeroThreeBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #091d40;
`;
export const HeroInnerthree = styled.div`
    height: auto;
    padding: 100px 0;
    position: relative;
    display: flex;
    align-items: center;
    ${device.medium} {
        height: 500px;
    }
    ${device.large} {
        height: 600px;
    }
    ${device.xlarge} {
        height: 830px;
    }
`;