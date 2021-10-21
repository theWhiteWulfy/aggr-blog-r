import styled, { themeGet, device } from "@theme/utils";
export const HeroAreaPost = styled.div`
    text-align: center;
`
export const Title = styled.h1`
    font-size: 28px;
    margin-bottom:15px;
    a {
        color: #fff;
    }
    ${device.xlarge}{
        font-size: 45px;
    }
`
export const PostMeta = styled.div`
    font-size: 14px;
    color: #ffffff; 
    a {color: #ffffff; }
    span {
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
            background: ${themeGet("colors.primary")};
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
export const PostAuthor = styled.span`
    color: #9b9ea1;
    a {
        color: #fff;
        text-transform: capitalize;
    }
`
export const PostDate = styled.span`
    
`
export const PostReadTime = styled.span`
    color: #ffffff;
`
export const HeroThreeBox = styled.div`
    
`
export const HeroThreeBoxImage = styled.div`
    margin-bottom: 20px;
    border-radius: 20px;
    border: 1px solid #ddd;
    padding: 15px;
    img {
        border-radius: 15px;
    }
`