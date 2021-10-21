import styled, { device } from "@theme/utils";

export const LargeBlogPostWrap = styled.div`
    margin-bottom: 40px;
`

export const LargeThum = styled.div`
    a {
        display: block;
        img {
            border-radius: 10px;
        }
    }
`
export const AuthorBlogPostContent = styled.div`
    
`
export const BlogDetailsMetaBox = styled.div`
    margin-top: 20px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    ${device.small} {
        flex-direction: row;
    }
`



export const PostMetaLeftSide = styled.div`

`
export const BlogPostCategory = styled.span`
    a {
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        background-color: #e1f3ff;
        display: inline-block;
        border-radius: 10px;
    }
`
export const BlogPostAuthor = styled.span`
    margin-left: 15px;
`

export const PostMetaRightSide = styled.div`

`

export const PostDate = styled.span`
    position: relative;
    padding-right: 15px;
    margin-right: 15px;
    font-size: 13px;
    i {
        margin-right: 5px;
    }
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
export const PostReadTime = styled.span`
    font-size: 13px;
`

export const Title = styled.h3`

`
export const DescText = styled.p`

`
export const LargeBlogPostbottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    margin-top: 20px;
`
export const LargeBlogPostAction = styled.div`
    display: flex;
    padding: 0px 20px;
    margin: 20px 0;
`
export const AuthorAction = styled.span`
    margin-right: 10px;
    margin-left: 10px;
    display: flex;
    align-items: center;
`
export const CountNumber = styled.span`
    margin-left: 5px;
`

