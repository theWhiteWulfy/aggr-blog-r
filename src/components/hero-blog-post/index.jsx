import React from 'react'
import { slugify } from "@utils/functions";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import { 
    SingleHeroBlogPost,
    HeroBlogPostTop,
    HeroBlogPostCategory,
    HeroBlogPostAuthor,
    HeroBlogPostTitle,
    PostShortDetails,
    HeroBlogPostMeta,
    PostMetaLeftSide,
    PostDate,
    PostReadTime,
    PostMetaRightSide
} from "./style";
import { Fragment } from 'react';


const HeroBlogPost = ({title, body, date, slug, dateSlug, categories, authorSlug}) => {
    return (
        <Fragment>
            <SingleHeroBlogPost>
                <HeroBlogPostTop>
                    <HeroBlogPostCategory>
                        {categories && categories.map((cat, i) => <Link key={i} to={`/category/${slugify(cat.name)}`} className={`cat-btn ${cat.color}`}>{cat.name}</Link>)}
                    </HeroBlogPostCategory>
                    <HeroBlogPostAuthor>
                        By <Link to={`/profile/${authorSlug}`}>{authorSlug}</Link>
                    </HeroBlogPostAuthor>
                </HeroBlogPostTop>
                <HeroBlogPostTitle>
                    <Link to={`/${slug}`}>{title}</Link>
                </HeroBlogPostTitle>
                <PostShortDetails>
                    {body}
                </PostShortDetails>
                <HeroBlogPostMeta>
                    <PostMetaLeftSide>
                        <PostDate>
                            <i className="icofont-ui-calendar"></i> 
                            <Link to={`/date/${dateSlug}`}>{date}</Link>
                        </PostDate>
                        <PostReadTime>14 min read</PostReadTime>
                    </PostMetaLeftSide>
                    <PostMetaRightSide>
                        <Link to="/"><StaticImage src="../../data/images/icons/small-bookmark.png" alt=""/></Link>
                        <Link to="/"><StaticImage src="../../data/images/icons/heart.png" alt=""/></Link>
                    </PostMetaRightSide>
                </HeroBlogPostMeta>
            </SingleHeroBlogPost>

        </Fragment>
    )
}

export default HeroBlogPost
