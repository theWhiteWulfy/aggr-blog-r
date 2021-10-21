import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby';
import {
    HeroAreaPost,
    PostAuthor,
    Title,
    PostMeta,
    PostDate,
    PostReadTime,

} from './style'
const HeroFourPost = ({title,authorSlug ,dateSlug, slug, body}) => {
    return (
        <Row className="align-items-center">
            <Col lg={10} className="m-auto">
                <HeroAreaPost>
                    <PostMeta>
                        <PostAuthor>
                            By <Link to={`/profile/${authorSlug}`}>{authorSlug}</Link>
                        </PostAuthor>
                        <PostDate>
                            <Link to={`/date/${dateSlug}`}>{dateSlug}</Link>
                        </PostDate>
                        <PostReadTime>10 min read</PostReadTime>
                    </PostMeta>
                    
                    <Title>
                        <Link to={`/${slug}`}>{title}</Link>
                    </Title>
                    
                </HeroAreaPost>
            </Col>
        </Row> 
    )
}

export default HeroFourPost
