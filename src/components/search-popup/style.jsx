import styled, { device } from "@theme/utils";

export const OffcanvasSearch = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    z-index: 9999;
    visibility: hidden;
    opacity: 0;
    overflow: hidden;
    transform: translateY(100%);
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
   
    &.inside {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
    }

    
`

export const OffcanvasSearchBox = styled.div`
    max-width: 1000px;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:15px;
`

export const MobileNavigationClose = styled.div`
    position: relative;
    cursor: pointer;
    height: 48px;
    width: 48px;
    line-height: 48px;
    display: inline-block;
    &:before{
        position: absolute;
        top: 28px;
        left: 0px;
        content: '';
        width: 42px;
        height: 3px;
        background: #fff;
        transform-origin: 50% 50%;
        transform: rotate(45deg);
        transition: all 0.3s ease-in-out;
    }
    &:after{
        position: absolute;
        top: 28px;
        left: 0px;
        content: '';
        width: 42px;
        height: 3px;
        background: #fff;
        transform-origin: 50% 50%;
        transform: rotate(-45deg);
        transition: all 0.3s ease-in-out;
    }
    &:hover{
        color: $primary;
        &:before, &:after{
            transform: none;
        }
    }
`

export const SearchRemove = styled.div`
    text-align: right;
    margin-bottom: 30px;
`
export const SearchOverlayForm = styled.div`
    
`
export const Form = styled.form`
    
`
export const Input = styled.input`
    border: none;
    border-bottom: 1px solid #fff;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    padding: 10px 0;
`