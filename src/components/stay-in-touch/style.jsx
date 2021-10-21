import styled, { themeGet, device } from "@theme/utils";

export const StayInTouchArea = styled.div`
    margin-top: 30px;
    padding: 30px 24px;
    background: #fafafa;
    border-radius: 10px;
    text-align: center;
`
export const StayInTouchBox = styled.div`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -5px;
    margin-right: -5px;
`
export const SingleTouchCol = styled.div`
    width: 33.333%;
    flex: 0 0 auto;
    padding-left: 5px;
    padding-right: 5px;

    .facebook {
        .socail-icon {
            background-color: #4867AA;
        }
    }
    .twitter {
        .socail-icon {
            background-color: #1DA1F2;
        }
    }
    .behance {
        .socail-icon {
            background-color: #1869FF;
        }
    }
    .youtube-play {
        .socail-icon {
            background-color: #FE0000;
        }
    }
    .dribbble {
        .socail-icon {
            background-color: #EA4C8A;
        }
    }
    .linkedin {
        .socail-icon {
            background-color: #007BB6;
        }
    }


`
export const SingleTouch = styled.a`
    background-color: #ebebeb;
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
    border-radius: 10px;
    padding: 14px 10px;
    display: inline-block;
    &:hover {
        background-color: #ddd;
    }
`
export const TouchSocailIcon = styled.div`
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 40px;
    margin: auto;
    margin-bottom: 5px;
    border-radius: 100%;
    color: #ffffff;

`
export const TouchTitle = styled.p`
    color: #000000;
    font-size: 12px;
`
