import styled, {device} from '@theme/utils'

export const SingleHistoryItem = styled.div`
    padding: 30px 30px 30px 30px;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    &:last-of-type {
        border-bottom: none;
    }
    ${device.medium}{
        border-bottom: 1px solid #ddd;
        
    }
`
export const Title = styled.h3`
    margin-bottom: 20px;
`
export const DecText = styled.p`
    
`