import styled, { device } from "@theme/utils";

export const SingleHeroBlogPost = styled.div`
    margin-top: 35px;
    ${device.large}{
        margin-top: 25px;
    }
    ${device.xlarge}{
        margin-top: 35px;
    }
    &:first-of-type {
        margin-top: 35px;
        ${device.large}{
            margin-top: 0;
            
        }
    }
`
export const HeroBlogPostArea = styled.div`
    max-width: 375px;
    padding-left: 15px;
    padding-right: 15px;
`
export const HeroBlogPostTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${device.large}{
        margin-bottom: 10px;
    }
`
export const HeroBlogPostCategory = styled.div`
    margin-right: 25px;
    a {
        min-width: 100px;
        background: #ffebdf;
        text-align: center;
        padding: 6px 5px;
        border-radius: 10px;
        display: inline-block;
    }
`
export const HeroBlogPostAuthor = styled.div`
    color: #9b9ea1;
    .hero-blog-post-author a {
        color: #000000;
    }
`
export const HeroBlogPostTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 18px;
    ${device.medium}{
        margin-bottom: 5px;
        font-size: 18px;
    }
    ${device.xlarge}{
        margin-top: 20px;
        font-size: 24px;
    }
`
export const PostShortDetails = styled.p`

`
export const HeroBlogPostMeta = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const PostMetaLeftSide = styled.div`

`
export const PostDate = styled.span`
    position: relative;
    padding-right: 15px;
    margin-right: 10px;
    font-size: 13px;
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
    i {
        margin-right: 3px;
    }

`
export const PostReadTime = styled.span`
    font-size: 13px;
`
export const PostMetaRightSide = styled.div`
    a {
        margin-top: 10px;
        margin-left: 10px;
    }

`