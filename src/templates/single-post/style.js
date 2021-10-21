import styled, { themeGet, device } from "@theme/utils";

export const BlogDetailsArea = styled.section`
    padding: 60px 0;
    ${device.medium} {
        padding: 80px 0;
    }
    ${device.large} {
        padding: 120px 0;
    }
`;
export const PostDetailsContentWrap = styled.div`
    
`;
export const PostDetailsBody = styled.div``;

export const Thumb = styled.div`
    margin-bottom: 30px;
    img {
        border-radius: 10px;
    }
    ${device.large} {
        margin-bottom: 40px;
    }
`;

export const Content = styled.div``;



export const BlogDetailsMetaBox = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    ${device.small}{
        flex-direction: row;
    }
`;

export const PostMetaLeftSide = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
    ${device.small}{
        width: auto;
    }
`;

export const BlogDetailsPostAuthor = styled.div`
    
`;
export const PostMidSide = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;
export const PostDate = styled.span`
    position: relative;
    padding-right: 10px;
    margin-right: 10px;
    font-size: 13px;
    i {
        margin-right: 5px;
    }
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
`;
export const PostTime = styled.span`
    font-size: 13px;
`;

export const MetaBox = styled.div`
    align-items: center;
    display: flex;
    justify-content: start;
    margin-right: 15px;
    .post-category {
        min-width: 100px;
        text-align: center;
        padding: 4px 5px;
        border-radius: 10px;
        color: #222;
        background-color: #ffc4a0;
    }
    .post-author {
        color: #595959;
        display: inline-block;
        font-weight: 500;
        .icon {
            background-color: #e6e6e6;
            display: inline-block;
            height: 28px;
            line-height: 28px;
            margin-right: 10px;
            min-width: 28px;
            text-align: center;
            width: 28px;
            transition: 0.3s;
            -webkit-transition: 0.3s;
            -moz-transition: 0.3s;
            -ms-transition: 0.3s;
            -o-transition: 0.3s;
        }
    }
`;

export const PostMetaRightSide = styled.div`
    margin-bottom: 10px;
    a {
        margin-left: 10px;
    }
`;




export const Title = styled.h3`
    margin-bottom: 15px;
`;

export const SingleBlogContent = styled.div`
    blockquote{
        background-color: #fafafa;
        padding: 60px 60px;
        text-align: center;
        position: relative;
        margin-top: 30px;
        margin-bottom: 30px;
        p {
            position: relative;
            font-size: 20px;
            font-weight: 600;
            margin-top: 30px;
            color: #222;
        }
        &::before {
            color: #ffc4a0;
            font-size: 106px;
            position: absolute;
            content: "“";
            height: auto;
            width: 105px;
            line-height: 100px;
            top: 30px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
        }
    }
`;
export const CategorySocialContent = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 41px;
    padding-bottom: 20px;
    flex-direction: column;
    ${device.small}{
        flex-direction: row;
    }
`;

export const PostCategoryItems = styled.div`
    span {
        color: #001d23;
        display: inline-block;
        font-weight: 700;
        margin-right: 1px;
    }
    a {
        color: #fc6539;
        margin-left: 3px;
        &::after {
            contain: ","
            position: relative;
        }
    }
`;

export const CommentArea = styled.div`
    padding-top: 34px;
    padding-bottom: 34px;
    ${device.large} {
        padding-top: 54px;
    }

`;

export const CommentTitle = styled.h4``;
