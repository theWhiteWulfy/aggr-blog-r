import { Link } from 'gatsby'
import React from 'react'
import { 
    PostContent,
    BlogPostAuthor,
    BlogPostTitle,
    PostMeta,
    PostDate,
    ReadTime
} from "./style";

const TrendingTody = ({title, dateSlug, authorSlug, slug}) => {
    return (
        <PostContent>
            <BlogPostAuthor>
                By <Link to={`/profile/${authorSlug}`}>{authorSlug}</Link>
            </BlogPostAuthor>

            <BlogPostTitle>
                <Link to={`/${slug}`}>{title}</Link>
            </BlogPostTitle>

            <PostMeta>
                <PostDate>
                    <Link to={`/date/${dateSlug}`}>{dateSlug}</Link>
                </PostDate>
                <ReadTime>10 min read</ReadTime>
            </PostMeta>
        </PostContent>
    )
}

export default TrendingTody
