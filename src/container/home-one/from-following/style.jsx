import styled, { device } from "@theme/utils";


export const FromFollowingWrap = styled.div`
    padding-top: 60px;
    padding-bottom: 60px;
    ${device.small}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
`

export const FromFollowingHaderArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-top: 1px solid #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
    margin-bottom: 40px;
`
export const FollowingSliderNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    .navigation-button {
        height: 40px;
        width: 40px;
        text-align: center;
        line-height: 38px;
        background-color: #f4f4f4;
        font-size: 24px;
        border-radius: 50000px;
        display: inline-block;
        transition: all 0.3s ease-in-out;
        &.following-slider-button-prev {
            margin-left: 10px;
        }
    }
`
export const FromFollowingLeftSide = styled.div`
    min-width: 100%;
    max-width: 100%;
    flex-grow: 1;
    
    ${device.medium}{
        min-width: 650px;
    }
    ${device.large}{
        min-width: 850px;
    }

`

export const FromFollowingRightSide = styled.div`
    min-width: 100%;
    flex-grow: 1;
    ${device.small}{
        min-width: 335px;
    }
    ${device.medium}{
        min-width: 235px;
    }
    ${device.large}{
        min-width: 235px;
    }
    ${device.xlarge}{
        min-width: 335px;
    }
`

export const FollowingAddBanner = styled.div`
    margin-top: 40px;
`
