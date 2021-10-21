import { Link } from 'gatsby'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {GatsbyImage, getImage } from "gatsby-plugin-image";
import { 
    PostThum,
    TrendingPostContent,
    BlogPostAuthor,
    BlogPostTitle,
    BlogPostDec,
    PostMeta,
    PostDate,
    ReadTime
} from "./style";

const TrendingTody = ({title,thume_image, body, dateSlug, authorSlug, slug}) => {
    const images = getImage(thume_image)
    return (
        <Row className="align-items-center">
            <Col lg={6} md={6}>
                <PostThum>
                    <Link to={`/${slug}`}>
                        <GatsbyImage image={images} alt=""/>
                    </Link>
                </PostThum>
            </Col>
            <Col lg={6} md={6}>
                <TrendingPostContent>
                     <BlogPostAuthor>
                        By <Link to={`/profile/${authorSlug}`}>{authorSlug}</Link>
                    </BlogPostAuthor>

                    <BlogPostTitle>
                        <Link to={`/${slug}`}>{title}</Link>
                    </BlogPostTitle>

                    <BlogPostDec>{body}</BlogPostDec>

                    <PostMeta>
                        <PostDate>
                            <Link to={`/date/${dateSlug}`}>{dateSlug}</Link>
                        </PostDate>
                        <ReadTime>10 min read</ReadTime>
                    </PostMeta>
                </TrendingPostContent>
            </Col>
        </Row>
    )
}

export default TrendingTody
