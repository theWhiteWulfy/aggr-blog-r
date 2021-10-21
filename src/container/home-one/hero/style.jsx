import styled, { device } from "@theme/utils";

export const HeroOneArea = styled.div`
    background-color: #f7f7f7;
    padding: 60px 0;
    ${device.small}{
        padding: 80px 0;
    }
`;

export const HeroInnerArea = styled.div` 
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: -15px;
    margin-left: -15px;
    ${device.large}{
        flex-wrap: nowrap;
    }
`
export const HeroCategoryArea = styled.div`
    width: 100%;
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    order: 3;
    ${device.small}{
        max-width: 36%;
        order: 2;
    }
    ${device.medium}{
        max-width: 270px;
        order: 1;
    }
    ${device.large}{
        max-width: 220px;
    }
    ${device.xlarge}{
        max-width: 290px;
    }
`
export const HeroBannerArea = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    order: 1;
    ${device.small}{
        max-width: 64%;
        order: 1;
    }
    ${device.medium}{
        max-width: 63%;
        order: 2;
    }
    ${device.large}{
        max-width: auto;
    }
    a {
        display: block;
        padding: 10px;
        background-color: #fff;
        border-radius: 15px;
        img {
            border-radius: 15px;
        }
    }
`
export const HeroBlogPostArea = styled.div`
    width: 100%;
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    order: 2;
    ${device.small}{
        order: 3;
    }
    ${device.medium}{
        order: 3;
    }
    ${device.large}{
        max-width: 375px;
    }
`
