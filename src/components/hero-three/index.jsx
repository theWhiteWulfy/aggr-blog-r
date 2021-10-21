import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import {
    HeroAreaThreePost,
    PostAuthor,
    Title,
    DecText,
    PostMeta,
    PostDate,
    PostReadTime,
    HeroThreeBox,
    HeroThreeBoxImage

} from './style'
const HeroThreePost = ({title,authorSlug ,thume_image,dateSlug, slug, body}) => {
    const image = getImage(thume_image);
    return (
        <Row className="align-items-center">
            <Col lg={{span: 6, order: 1 }} md={{span: 6, order: 1 }} sm={{span: 12, order: 2 }} xs={{span: 12, order: 2 }}>
                <HeroAreaThreePost>
                    <PostAuthor>
                        By <Link to={`/profile/${authorSlug}`}>{authorSlug}</Link>
                    </PostAuthor>
                    <Title>
                        <Link to={`/${slug}`}>{title}</Link>
                    </Title>
                    <DecText>
                        {body}
                    </DecText>
                    <PostMeta>
                        <PostDate>
                            <Link to={`/date/${dateSlug}`}>{dateSlug}</Link>
                        </PostDate>
                        <PostReadTime>10 min read</PostReadTime>
                    </PostMeta>
                </HeroAreaThreePost>
            </Col>
            <Col lg={{span: 6, order: 2 }} md={{span: 6, order: 2 }} sm={{span: 12, order: 1 }} xs={{span: 12, order: 1 }}>
                <HeroThreeBox>
                    <HeroThreeBoxImage>
                        <GatsbyImage image={image} alt=""/>
                    </HeroThreeBoxImage>
                </HeroThreeBox>
            </Col>
        </Row> 
    )
}

export default HeroThreePost
