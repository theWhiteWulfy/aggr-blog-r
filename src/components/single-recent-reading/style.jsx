import styled, { device } from "@theme/utils";

export const SingleRecentReadingPost = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 40px;
`
export const RecentReadingPostThum = styled.a`

`
export const RecentReadingPostContent = styled.div`
    margin-left: 25px;
`
export const RecentReadingPostAuthor = styled.div`
    color: #9b9ea1;
    margin-bottom: 10px;
    a {
        color: #000000;
    }
`
export const Title = styled.h6`

`
export const RecentReadingPostMeta = styled.div`
    font-size: 12px;
    margin-top: 10px;
`
export const PostDate = styled.span`
    position: relative;
    padding-right: 10px;
    margin-right: 10px;
    &::after {
        position: absolute;
        content: "";
        right: -0px;
        top: 50%;
        height: 4px;
        width: 4px;
        background: #000000;
        border-radius: 50000px;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
`
export const PostRiadTime = styled.span`

`