import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import { Container} from 'react-bootstrap'
import Swiper, { SwiperSlide } from "@components/swiper";
import HeroThreePost from '../../../components/hero-three';
import {
    HeroAreaThree,
    HeroInnerthree,

} from './style'
const HeroThreeArea = () => {

    const heroSlidrPostQuery = useStaticQuery(graphql`
        query HeroSlidrPostQuery {
            allMarkdownRemark (
                filter: {frontmatter: {is_featured: {eq: true}}}
                limit: 3
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            date(formatString: "DD MMMM YYYY")
                            categories {
                                name
                                color
                            }
                            is_featured
                            thume_image {
                                childImageSharp {
                                    gatsbyImageData(width: 570, height: 420, quality: 100)
                                }
                            }
                            author {
                                name
                            }
                        }
                        fields {
                            slug
                            authorId
                            dateSlug
                        }
                        excerpt(pruneLength: 85)
                    }
                }
            }
        }
    `);
    const heroSlidrPostData = heroSlidrPostQuery.allMarkdownRemark.edges;

    return (
        <HeroAreaThree>
            <Swiper
                layout={{
                    nav: "hero-three-navigation",
                    dots: "hero-three-dots-style",
                }}
                navigation={{
                    nextEl: ".hero-three-slider-button-next",
                    prevEl: ".hero-three-slider-button-prev"
                }}
                slidesPerView={1}
                spaceBetween={0}
            >
                {heroSlidrPostData && heroSlidrPostData.map((post, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <HeroInnerthree>
                                <Container>
                                    <HeroThreePost
                                       key={`heroThreePost-${i}`}
                                       title={post.node.frontmatter.title}
                                       thume_image={post.node.frontmatter.thume_image}
                                       categories={post.node.frontmatter.categories}
                                       body={post.node.excerpt}
                                       authorSlug={post.node.fields.authorId}
                                       slug={post.node.fields.slug}
                                       authorId={post.node.frontmatter.author.name}
                                       dateSlug={post.node.fields.dateSlug} 
                                    />
                                </Container> 
                            </HeroInnerthree>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </HeroAreaThree>
    )
}

export default HeroThreeArea
