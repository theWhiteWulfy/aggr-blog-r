import styled, {themeGet, device } from "@theme/utils";

export const SingleBannerBlogPost = styled.div`
    margin-top: 30px;
    
`
export const SpecialBannerPostImage = styled.div`
    a {
        display: block;
        img {
            border-radius: 10px;
        }
    }
`
export const SingleSpecialBannerPost = styled.div`
    
`
export const SpecialBannerPostContent = styled.div`
    margin-top: 20px;
    
`
export const BannerPostAuthor = styled.div`
    color: #9b9ea1;
    font-weight: 600;
    margin-bottom: 10px;
`
export const Title = styled.h3`
    
`
export const DecText = styled.p`
    margin-top: 10px;
`
export const BannerPostMeta = styled.div`
    margin-top: 10px;
`
export const PostDate = styled.span`
    position: relative;
    padding-right: 10px;
    margin-right: 10px;
    font-size: 13px;
    color: #0f034a;
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
export const ReadTime = styled.span`
`