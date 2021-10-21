import React from 'react'
import {
    SingleFollowItem,
    ItemLink,
    FollowSocailIcon,
    SocailTitle,
    FollowShareOnover
} from './style'

const FollowUsItem = ({socailIcon, title, number, path }) => {
    return (
        <SingleFollowItem>
            <ItemLink href={path}>
                <FollowSocailIcon>
                    <i className={`${socailIcon}`}></i>
                    <SocailTitle>{title}</SocailTitle>
                </FollowSocailIcon>
                <FollowShareOnover>
                    <p className="follow-title">{number}</p>
                    <p className="follow-hover">Follow</p>
                </FollowShareOnover>
            </ItemLink>
        </SingleFollowItem>
        
    )
}

export default FollowUsItem
