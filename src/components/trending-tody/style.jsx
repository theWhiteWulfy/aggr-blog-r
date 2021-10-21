import styled, {themeGet, device } from "@theme/utils";

export const PostThum = styled.div`
    a {
        display: block;
        img {
            border-radius: 15px;
        }
    }
`
export const TrendingPostContent = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
    ${device.large}{
        margin-left: 40px;
    }
`
export const BlogPostAuthor = styled.div`
    color: #9b9ea1;
    margin-bottom: 10px;
    font-size: 14px;
    a {
        color: ${themeGet('colors.primary')}
    }
    ${device.medium}{
        font-size: 18px;
    }
`

export const BlogPostTitle = styled.h2`
    margin-bottom: 15px;
`
export const BlogPostDec = styled.p`
    margin-bottom: 15px;
    font-size: 14px;
    ${device.large}{
        font-size: 18px;
    }
`
export const PostMeta = styled.div`
    font-size: 13px;
    font-weight: 600;
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
export const PostDate = styled.span`

`
export const ReadTime = styled.span`

`



