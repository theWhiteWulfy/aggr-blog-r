import styled, { themeGet } from "@theme/utils";

export const SingleFollowItem = styled.div`
    margin-top: 15px;
    
`
export const ItemLink = styled.a`
    background: #f8f7fc;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    padding: 17px 20px;
    &:hover {
        color: ${themeGet('colors.white')};
        background: ${themeGet('colors.primary')};
        .follow-title {
            opacity: 0;
            visibility: hidden;
        }
        .follow-hover {
            color: #fff;
            opacity: 1;
            visibility: visible;
        }
    }
`
export const FollowSocailIcon = styled.div`
    font-weight: 600;
`
export const SocailTitle = styled.span`
    margin-left: 10px;
`
export const FollowShareOnover = styled.div`
    position: relative;
    p {
        margin-bottom: 0;
        position: absolute;
        right: 0;
        transition: all 0.3s ease-in;
        color: #000000;
        font-weight: 600;
     }
    .follow-title {
        opacity: 1;
        visibility: visible;
    }
    .follow-hover {
        opacity: 0;
        visibility: hidden;
    }
`