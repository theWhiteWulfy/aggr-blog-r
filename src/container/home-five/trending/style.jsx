import styled, { themeGet, device } from "@theme/utils";

export const TrendingTodysArea = styled.div`
    .swiper-container {
        padding-bottom: 60px;
    }
    & .trending-dots-style {
        & .swiper-pagination {
            bottom: 0px;
        }
        
        .swiper-pagination-bullet {
            height: 12px;
            width: 12px;
            border-radius: 5000px;
            background-color: #0f034a;
            margin: 4px;
        }
        .swiper-pagination-bullet-active {
            background-color: #5974ff;
            border-radius: 5000px;
        }
    }
`
export const SectionTitleTwo = styled.div`
    position: relative;
    margin-bottom: 40px;
    text-align: center;
    &::after {
        background-color: #e3e3e3;
        content: "";
        left: 0;
        top: 50%;
        position: absolute;
        height: 1px;
        width: 100%;
    }
`
export const Title = styled.h2`
    color: #0f034a;
    background: #fff;
    display: inline-block;
    position: relative;
    z-index: 1;
    &::before {
        background-color: #fff;
        content: "";
        left: -50px;
        right: auto;
        top: 50%;
        position: absolute;
        height: 90%;
        width: 50px;
        transform: translateY(-50%);
    }
    &::after {
        background-color: #fff;
        content: "";
        right: -50px;
        left: auto;
        top: 50%;
        position: absolute;
        height: 90%;
        width: 50px;transform: translateY(-50%); 
    }
`

