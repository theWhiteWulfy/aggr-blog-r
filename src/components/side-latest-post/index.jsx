import { Link } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    SingleLatestPost,
    LatestPostThum,
    LatestPostContent,
    Title,
    LatestPostMeta,
    PostDate
} from './style'


const SideLatestPosts = ({title,date,thume_image,slug, dateSlug }) => {
    const image = getImage(thume_image);
    return (
        <SingleLatestPost>
            <LatestPostThum>
                <Link to={`/${slug}`}>
                    <GatsbyImage image={image} alt=""/>
                </Link>
            </LatestPostThum>
            <LatestPostContent>
                <Title>
                    <Link to={`/${slug}`}>{title}</Link>
                </Title>
                <LatestPostMeta>
                    <PostDate>
                        <i className="icofont-ui-calendar"></i> 
                        <Link to={`/date/${dateSlug}`}>{date}</Link>
                    </PostDate>
                </LatestPostMeta>
            </LatestPostContent>
        </SingleLatestPost>
    )
}

export default SideLatestPosts
