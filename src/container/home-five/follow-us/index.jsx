import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import FollowUsItem from '../../../components/single-follow-us'
import {
    FollowUsArea,
    SectionTitle,
    Title,
    FollowUsBox
} from './style'

const FollowUsWidget = () => {

    const followUsQery = useStaticQuery(graphql`
        query FollowUsQery {
            allFollowUsJson {
                nodes {
                    title
                    socailIcon
                    path
                    number
                }
            }
        }
      
    `)

    const followUsdata = followUsQery.allFollowUsJson.nodes;
    
    return (
        <FollowUsArea>
            <SectionTitle>
                <Title>Follow Us</Title>
            </SectionTitle>
            <FollowUsBox>
                {followUsdata && followUsdata.map((item, i)=>{
                    return(
                        <FollowUsItem
                            key={i}
                            socailIcon={item.socailIcon}
                            title={item.title}
                            number={item.number}
                            path={item.path}
                        />
                    )
                })}
                
            </FollowUsBox>
        </FollowUsArea> 
    )
}

export default FollowUsWidget
