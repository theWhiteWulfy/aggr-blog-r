import { Link } from 'gatsby'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {GatsbyImage, getImage } from "gatsby-plugin-image";
import { 
    PostThum,
    PostContent,
    BlogPostAuthor,
    BlogPostTitle,
    ReadMoreBtn,
    PostMeta,
    PostDate,
    ReadTime
} from "./style";

const HeroSixPost = ({title,thume_image, dateSlug, authorSlug, slug}) => {
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
                <PostContent>
                    <PostMeta>
                        <BlogPostAuthor>
                            By <Link to={`/profile/${authorSlug}`}>{authorSlug}</Link>
                        </BlogPostAuthor>
                        <PostDate>
                            <Link to={`/date/${dateSlug}`}>{dateSlug}</Link>
                        </PostDate>
                        <ReadTime>10 min read</ReadTime>
                    </PostMeta>

                    <BlogPostTitle>
                        <Link to={`/${slug}`}>{title}</Link>
                    </BlogPostTitle>

                    <ReadMoreBtn>
                        <Link to={`/${slug}`}>
                            Read more <i className="icofont-long-arrow-right"></i>
                        </Link>
                    </ReadMoreBtn>

                    
                </PostContent>
            </Col>
        </Row>
    )
}

export default HeroSixPost
