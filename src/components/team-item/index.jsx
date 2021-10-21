import React from 'react'
import {GatsbyImage, getImage } from "gatsby-plugin-image";
import Social, {SocialLink} from "../../components/social";

import {
    SingleTeamArea,
    TeamThum,
    TeamContent,
    TeamShareTop,
    TeamMemberInfo,
    NameTitle,
    Desination
} from './style'

const TeamItems = ({name, designation, images}) => {
    const ThumImage = getImage(images[0]);
    return (
        <SingleTeamArea>
            <TeamThum>
                <GatsbyImage image={ThumImage} alt=""/>
            </TeamThum>
            <TeamContent className="hover-action">
                <TeamShareTop>
                    <Social 
                        sx={{ mt: "30px"}}
                        shape="rounded-5" 
                        space={10}
                        bgColor="bgWhite"
                        size="sm"
                    >
                        <SocialLink href="https://www.facebook.com/"><i className="icofont-facebook"></i></SocialLink>
                        <SocialLink href="https://twitter.com/home/"><i className="icofont-twitter"></i></SocialLink>
                        <SocialLink href="https://www.linkedin.com/"><i className="icofont-linkedin"></i></SocialLink>
                    </Social>
                </TeamShareTop>
                <TeamMemberInfo>
                    <NameTitle>{name}</NameTitle>
                    <Desination>{designation}</Desination>
                </TeamMemberInfo>
            </TeamContent>
        </SingleTeamArea>
    )
}

export default TeamItems
