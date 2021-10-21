import styled, { device } from "@theme/utils";
import HeroThreeBg from "../../../data/images/hero/home-4-hero-bg.jpg"

export const HeroAreaFour = styled.div`
    background-image: url(${HeroThreeBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #091d40;
`;
export const HeroInner = styled.div`
    height: auto;
    padding: 200px 0 0;
    position: relative;
    display: flex;
    align-items: center;
`;
export const HeroFourImage = styled.div`
    margin-bottom: 100px;
`;
export const HeroFourInnerImage = styled.div`
    margin-top: 60px;
    margin-bottom: -100px;
    padding: 15px;
    border: 2px solid #edf0f8;
    max-width: 770px;
    border-radius: 15px;
    img {
        border-radius: 15px;
    }
`;