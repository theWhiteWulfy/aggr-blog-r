import styled, {device} from '@theme/utils'

export const SingleTeamArea = styled.div`
    position: relative;
    overflow: hidden;
    margin-top: 40px;
    &:hover {
        .hover-action {
            opacity: 1;
            visibility: visible;
        }
    }
    
`
export const TeamThum = styled.div`
    img {
        width: 100%;
    }
`
export const TeamContent = styled.div`
    opacity: 0;
    visibility: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.9) 0, rgba(253, 195, 158, 0.9) 100%);
`
export const TeamShareTop = styled.div`
    
`
export const TeamMemberInfo = styled.div`
    margin-bottom: 20px;
`

export const NameTitle = styled.h6`
    color: #ffffff;
`
export const Desination = styled.p`
    color: #ffc4a0;
`