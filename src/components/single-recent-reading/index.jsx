import React from 'react'
import { Link } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    SingleRecentReadingPost,
    RecentReadingPostThum,
    RecentReadingPostContent, 
    RecentReadingPostAuthor,
    Title,
    RecentReadingPostMeta,
    PostDate,
    PostRiadTime


} from './style'

const SingleRecentReading = () => {
    return (
        <SingleRecentReadingPost>
            <RecentReadingPostThum href="#!">
                {/* <StaticImage src="../../data/images/recent-reading-list/04_reading-list.jpg" alt=""/> */}
            </RecentReadingPostThum>
            <RecentReadingPostContent>
                <RecentReadingPostAuthor>
                    By <Link to="/">Kathy Ramirez</Link>
                </RecentReadingPostAuthor>
                <Title>
                    <Link to="/">With WooLentor's drag-
                        and-drop interface for...
                    </Link>
                </Title>
                <RecentReadingPostMeta>
                    <PostDate>
                        <i className="icofont-ui-calendar"></i> 
                        <a href="#">03-04-2021</a>
                    </PostDate>
                    <PostRiadTime>10 min read</PostRiadTime>
                </RecentReadingPostMeta>
            </RecentReadingPostContent>
        </SingleRecentReadingPost>

    )
}

export default SingleRecentReading
