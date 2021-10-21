import styled, {themeGet, device } from "@theme/utils";


export const PostContent = styled.div`
    margin-top: 30px;
    background-color: #ffffff;
    padding: 43px 40px;
    border-radius: 15px;
    -webkit-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
`
export const BlogPostAuthor = styled.div`
    color: #9b9ea1;
    margin-bottom: 12px;
    font-weight: 500;
    transition: 0s ease-in-out;
    a {
        color: ${themeGet('colors.primary')}
    }
`

export const BlogPostTitle = styled.h4`
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



