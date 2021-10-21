import React from 'react'
import {SingleHistoryItem, Title, DecText} from './style'
const HistoryItem = ({title, decText}) => {
    return (
        <SingleHistoryItem>
            <Title>{title}</Title>
            <DecText>{decText}</DecText>
        </SingleHistoryItem>
    )
}
export default HistoryItem
