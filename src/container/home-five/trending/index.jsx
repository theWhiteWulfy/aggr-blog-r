import React from 'react'
import { Container } from 'react-bootstrap'
import {graphql, useStaticQuery } from "gatsby";
import Swiper, { SwiperSlide } from "@components/swiper";
import TrendingTody from '../../../components/trending-tody'
import {
    TrendingTodysArea,
    SectionTitleTwo,
    Title
} from './style'

const TrendingArea = () => {
    const tredingArticleQuery = useStaticQuery(graphql`
    query TredingArticleQuery {
        largeTredingArticle: allMarkdownRemark(
            filter: {frontmatter: {is_trending_article: {eq: true}}}
          ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        thume_image {
                            childImageSharp {
                                gatsbyImageData(width: 570, height: 425, quality: 100)
                            }
                        }
                    }
                    fields {
                        slug
                        authorId
                        dateSlug
                    }
                    excerpt(pruneLength: 100)
                }
            }
        }
        
    }
`);

const tredingTodyData = tredingArticleQuery.largeTredingArticle.edges;

    return (
        <TrendingTodysArea>
            <SectionTitleTwo>
                <Title>Trending Today’s</Title>
            </SectionTitleTwo>

            <Container>
                <Swiper
                    layout={{
                        nav: "trending-navigation",
                        dots: "trending-dots-style",
                    }}
                    navigation={{
                        nextEl: ".trending-slider-button-next",
                        prevEl: ".trending-slider-button-prev"
                    }}
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{ clickable: true }}
                >
                    {tredingTodyData && tredingTodyData.map((trending, i) => {
                        return (
                            <SwiperSlide key={`trending-${i}`}>
                                <TrendingTody
                                    title={trending.node.frontmatter.title}
                                    thume_image={trending.node.frontmatter.thume_image}
                                    slug={trending.node.fields.slug}
                                    authorSlug={trending.node.fields.authorId}
                                    postAuthor={trending.node.frontmatter.author}
                                    body={trending.node.excerpt}
                                    dateSlug={trending.node.fields.dateSlug}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Container>
                   
        </TrendingTodysArea>
    )
}

export default TrendingArea
