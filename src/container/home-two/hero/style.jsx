import styled, { themeGet, device } from "@theme/utils";
import BannerTitleShape from "@data/images/hero/home-2-hero-bg.jpg";
export const HeroAreaWrapper = styled.div`
    position: relative;
`;
export const HeroTwoBanner = styled.div`
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
`;
export const HeroTwoArea = styled.div`
    position: relative;
    background-image: url(${BannerTitleShape});
    background-repeat: no-repeat;
    background-size: cover;
    height: auto;
    padding: 180px 0 100px;
    display: flex;
    align-items: center;
    background-color: #091d40;
    ${device.medium}{
        height: 700px;
        padding: 100px 0 0px;
    }
    ${device.large}{
        height: 850px;
    }
    &::before {
        content: '';
        background-color: rgba(15, 0, 84, 0.7);
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
`;
export const HeroAreaTwoInnter = styled.div`
    z-index: 3;
    text-align: center;
    position: relative;
`;
export const ShorTitle = styled.h5`
    color: ${themeGet("colors.primary")};
    text-transform: uppercase;
    letter-spacing: 1px;
`;
export const Title = styled.h1`
    color: ${themeGet("colors.white")};
    font-weight: bold;
    font-size: 45px;
    ${device.medium}{
        font-size: 65px;
    }
    ${device.large}{
        font-size: 95px;
    }
`;
export const SubTitle = styled.h2`
    font-size: 30px;
    color: ${themeGet("colors.white")};
    font-weight: bold;
    ${device.medium}{
        font-size: 40px;
    }
    ${device.large}{
        font-size: 60px;
    }
`;
export const HeroTwoTag = styled.div`
    max-width: 750px;
    margin: 30px auto 0;
    ${device.large}{
        margin: 60px auto 0;
    }
    a {
        margin: 10px;
        color: ${themeGet("colors.primary")};
        &:hover {
            background: ${themeGet("colors.primary")};
        }
    }
`;
