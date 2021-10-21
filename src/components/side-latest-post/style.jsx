import styled, { device } from "@theme/utils";

export const SingleLatestPost = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 20px;
`
export const LatestPostThum = styled.div`
    -webkit-flex-basis: 0 0 auto;
    -ms-flex-preferred-size: 0 0 auto;
    flex-basis: 0 0 auto;
    min-width: 84px;
    img {
        border-radius: 10px;
    }
`
export const LatestPostContent = styled.div`
    margin-left: 20px;
`
export const Title = styled.h6`
    margin-top: 0px;
    font-size: 15px;
`
export const LatestPostMeta = styled.div`
    font-size: 12px;
    margin-top: 10px;
`
export const PostDate = styled.span`
    position: relative;
    padding-right: 10px;
    margin-right: 6px;
    i {
        margin-right: 5px;
    }
`
export const PostTime = styled.span`

`