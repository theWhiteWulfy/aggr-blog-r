import styled, {themeGet, device } from "@theme/utils";

export const SingleFeaturedVideoItem = styled.div`
    margin-bottom: 40px;
` 
export const SinglePopupWrap = styled.div`
    position: relative;
    
    .gatsby-image-wrapper-constrained {
        display: block !important;
        img {
            width: 100%;
            border-radius: 10px;
        }
    }
    .video-link {
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        display: block;
        &:hover {
            & .video-play,
            & .video-play-sm{
                transform: scale3d(1.15, 1.15, 1.15);
            }
        }
    }
` 
export const HtPopupVideo = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
` 
export const VideoButtonTwo = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    & .video-play-sm {
        width: 58px;
        height: 58px;
        background: ${themeGet("colors.primary")};
        border: 3px solid #fff;
        box-shadow: 0 2px 41px 0 rgba(91, 99, 254, 0.36);
        border-radius: 50%;
        transition: all 1s cubic-bezier(0, 0, 0.2, 1) !important;
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.07);
        & .video-play-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            line-height: 1;
            margin-left: 1px;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 0;
                height: 0;
                transform: translate(-50%, -50%);
                border-top: 9px solid transparent;
                border-bottom: 9px solid transparent;
                border-left: 12px solid #fff;
                border-top-width: 8px;
                border-bottom-width: 9px;
                border-left-width: 15px;
                border-left-color: $white;
            }
        }
    }
` 

export const VideoPlayIcon = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1;
    margin-left: 1px;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        transform: translate(-50%, -50%);
        border-top: 11px solid transparent;
        border-bottom: 11px solid transparent;
        border-left: 17px solid #fff;
        border-top-width: 12px;
        border-bottom-width: 12px;
        border-left-width: 19px;
        border-left-color: $white;
    }
` 


export const FeaturedVdeoContent = styled.div`
    
` 
export const FeaturedBlogPostTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    margin-top: 25px;
` 
export const FrendingBlogPostCategory = styled.div`
    margin-right: 20px;
    a {
        min-width: 70px;
    }
` 
export const PostMetaLeftSide = styled.div`
    
` 
export const PostDate = styled.span`
    position: relative;
    padding-right: 10px;
    margin-right: 10px;
    font-size: 12px;
    i {
        margin-right: 5px;
    }
    ${device.small}{
        font-size: 13px;
    }
` 
export const ReadTime = styled.span`
    
` 
export const PostMetaRightSide = styled.div`
    margin-left: 30px;
    a {
        margin-left: 10px;
    }
` 
export const Title = styled.h4`
    
` 
