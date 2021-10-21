import React from 'react'
import { Link } from 'gatsby';
import {GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    SingleBlogWrap,
    BlogContent,
    Author,
    Title,
    PostMeta,
    PostDate,
    DecText,
    PostReadTime
} from './style'

const SingleBlogItem = ({title, thume_image, body, date, dateSlug, slug, authorId}) => {
    const image = getImage(thume_image);
    return (
        <SingleBlogWrap>
            <Link to={`/${slug}`}>
                <GatsbyImage image={image} alt={title} />
            </Link>             
            <BlogContent>
                <Author>
                    By <Link to={`/profile/${authorId}`}>{authorId}</Link>
                </Author>
                <Title>
                    <Link to={`/${slug}`}>{title}</Link>
                </Title>
                <DecText>{body}</DecText>
                <PostMeta>
                    <PostDate>
                        <Link to={`/date/${dateSlug}`}>{date}</Link>
                    </PostDate>
                    <PostReadTime>10 min read</PostReadTime>
                </PostMeta>
            </BlogContent>
        </SingleBlogWrap>
    )
}

export default SingleBlogItem
