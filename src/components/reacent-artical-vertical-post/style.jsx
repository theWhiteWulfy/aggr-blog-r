import styled, { device } from "@theme/utils";

export const SingleMostPopulerItem = styled.div`
    margin-top: 45px;
    &:first-of-type {
        margin-top: 45px;
    }
    ${device.large}{
        &:first-of-type {
            margin-top: 0px;
        }
    }
`
export const MostPopulerThum = styled.div`
    display: block;
    max-width: 100%;
    flex: 0 0 auto;
    & img {
        border-radius: 10px;
        width: 100% !important;
        height: 100% !important;
        vertical-align: middle !important;
        object-fit: cover !important;
    }
    & .gatsby-image-wrapper {
            display: block !important;
    }
`
export const MostPopulerContent = styled.div`
    margin-top: 15px;
`
export const PostAuthor = styled.div`
    color: #9b9ea1;
    font-weight: 600;
    a {
        color: #0f034a;
    }
`
export const Title = styled.h3`
    color: #0f034a;
    margin-top: 10px;
`
export const DecText = styled.p`

`
export const PostMeta = styled.div`
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
export const PostReadTime = styled.span`

`