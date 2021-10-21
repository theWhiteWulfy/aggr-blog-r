import styled, {themeGet, device } from "@theme/utils";

export const SpecialBannerBlogPost = styled.div`
    &::last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
`
export const SingleSpecialBannerPost = styled.div`
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 30px;
    
`
export const SpecialBannerPostContent = styled.div`
    margin-top: 25px;
    
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