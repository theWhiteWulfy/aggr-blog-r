import styled, {themeGet, device } from "@theme/utils";

export const PostThum = styled.div`
    a {
        display: block;
        img {
            border-radius: 15px;
        }
    }
`
export const PostContent = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
    ${device.large}{
        margin-left: 40px;
    }
`
export const PostMeta = styled.div`
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 20px;
    & > span { 
        position: relative;
        padding-right: 15px;
        margin-right: 15px;
        &::after {
            position: absolute;
            content: "";
            right: -0px;
            top: 50%;
            height: 4px;
            width: 4px;
            background: #000000;
            border-radius: 50000px;
            transform: translateY(-50%);
        }
        &:last-of-type {
            &::after {
                display: none;
            }
        }
    }
`
export const BlogPostAuthor = styled.span`
    color: #9b9ea1;
    margin-bottom: 10px;
    a {
        color: #091d40;
    }
`

export const PostDate = styled.span`

`
export const ReadTime = styled.span`

`


export const BlogPostTitle = styled.h1`
    margin-bottom: 25px;
    font-size: 26px;
    font-weight: 800;
    color: #0f034a;
    ${device.large}{
        font-size: 32px;
    }
`
export const ReadMoreBtn = styled.div`
    border-bottom: 1px solid #ddd;
    display: inline-block;
    font-weight: 600;
    color: #0f034a;
    & i {
        font-size: 18px;
        margin-left: 10px;
    }
`



