import styled, { device } from "@theme/utils";


export const FollowingAuthorArea = styled.div`
    border: 1px solid #f3f3f3;
    border-radius: 10px;
    text-align: center;
    padding: 30px 15px;
`
export const AuthorImage = styled.div`
    border: 1px solid #f3f3f3;
    display: inline-block;
    border-radius: 50000px;
    padding: 11px;
    margin-bottom: 25px;
    img {
        border-radius: 100%;
    }
`
export const AuthorTitle = styled.div`
    margin-bottom: 10px;
`
export const AuthorName = styled.h4`
   margin-bottom: 0;
`
export const AuthorDegination = styled.p`
    font-size: 14px;
`
export const AuthorDetails = styled.div`
   
`
export const AuthorDetailsText = styled.p`
    margin-bottom: 20px;
    font-size: 15px;
    line-height: 1.6;
`
export const AuthorPostShare = styled.div`
    margin-bottom: 30px;
`
export const SocialShareArea = styled.ul`
    li {
        display: inline-block;
        margin-right: 15px;
        a {
            height: 45px;
            width: 45px;
            line-height: 45px;
            text-align: center;
            background-color: #ddd;
            border-radius: 5px;
            display: block;
        }
    }
`
export const ButtonBox = styled.div`
    a {
        
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        background-color: transparent;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

        height: 50px;
        line-height: 48px;
        padding: 0 30px;
        background-color: #f4f4f4;
        font-weight: 500;
        border-radius: 15px;
        display: inline-block;
    }
`
