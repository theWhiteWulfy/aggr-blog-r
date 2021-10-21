import styled, { device } from "@theme/utils";

export const SingleTrendingTopicItem = styled.div`
    text-align: center;
    position: relative;
    a {
        display: block;
        min-width: 120px;
        max-width: 100%;
        position: relative;
        border-radius: 15px;
        img {
            border-radius: 15px;
            width: 100%;
        }
        &::after {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 50%;
            display: block;
            z-index: 1;
            content: '';
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #333 100%);
            transition: opacity 0.65s cubic-bezier(0.05, 0.2, 0.1, 1);
            cursor: pointer;
            border-radius: 15px;
        }
    }
    
`
export const Title = styled.h4`
    position: absolute;
    bottom: 20px;
    text-align: center;
    width: 100%;
    color: #fff;
    z-index: 2;
`