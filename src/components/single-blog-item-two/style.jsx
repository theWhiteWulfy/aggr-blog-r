import styled, {themeGet, device } from "@theme/utils";

export const SingleBlogWrap = styled.div`
    margin-top: 40px;
    & > a {
        dispaly: block;
        img {
            border-radius: 15px;
        }
    }
` 
export const BlogContent = styled.div`
    margin-top: 25px;
` 
export const Author = styled.div`
    color: #9b9ea1;
    font-weight: 600;
    a {
        text-transform: capitalize;
        color: ${themeGet("color.primary")};
    }
` 
export const Title = styled.h4`
    margin-top: 10px;  
` 
export const PostMeta = styled.div`
    & span{
        position: relative;
        padding-right: 14px;
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
            transform: translateY(-50%);
        }
        &:last-of-type {
            padding-right: 0;
            margin-right: 0;
            &::after {
                display: none;
            }
        }
    }
    
` 

export const DecText = styled.p`
   
` 
export const PostDate = styled.span`
   
` 
export const PostReadTime = styled.span`
    
` 