import styled, { device } from "@theme/utils";
export const HeroAreaThreePost = styled.div`

`
export const PostAuthor = styled.div`
    color: #9b9ea1;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 18px;
    a {
        color: #fff;
        text-transform: capitalize;
    }
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
export const DecText = styled.p`
    color: #ffffff;
    max-width: 470px;
    margin-bottom:15px;
    font-size: 16px;
    ${device.xlarge}{
        font-size: 18px;
    }
`
export const PostMeta = styled.div`
    font-size: 17px;
    color: #ffffff; 
    a {color: #ffffff; }
`
export const PostDate = styled.span`
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
        background: #ffffff;
        border-radius: 50000px;
        transform: translateY(-50%);
    }
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