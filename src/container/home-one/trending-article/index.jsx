import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import {graphql, useStaticQuery } from "gatsby";
import TrendingSingleItems from '../../../components/trending-article-item';
import TrendingSingleLargeItems from '../../../components/trending-article-large-item';
import { 
    TrendingArticleArea,
    TrendingArticleRow,
    TrendingArticleLeftSide,
    TrendingArticleRightSide
} from "./style";


const TredingArticle = props => {
    const tredingArticleQuery = useStaticQuery(graphql`
        query TredingArticleQueryQuery {
            smallTredingArticle: allMarkdownRemark(
                sort: {fields: [frontmatter___date], order: DESC},
                filter: {frontmatter: {is_trending_article: {eq: true}}},
                limit: 3
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            video_link
                            categories {
                                name
                                color
                            }
                            date(formatString: "DD-MM-YYYY")
                            smallImage: thume_image {
                                childImageSharp {
                                    gatsbyImageData(width: 100, height: 169, layout: CONSTRAINED, quality: 100)
                                }
                            }
                            thume_image {
                                childImageSharp {
                                    gatsbyImageData(width: 160, height: 160, layout: CONSTRAINED, quality: 100)
                                }
                            }
                        }
                        fields {
                            slug
                            authorId
                            dateSlug
                        }
                        excerpt(pruneLength: 225)
                    }
                }
            }
            largeTredingArticle: allMarkdownRemark(
                sort: {fields: [frontmatter___date], order: DESC},
                filter: {frontmatter: {is_trending_article: {eq: true}}},
                limit: 3,
                skip: 3
              ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            date(formatString: "DD-MM-YYYY")
                            video_link
                            categories {
                                name
                                color
                            }
                            smallImage: thume_image {
                                childImageSharp {
                                    gatsbyImageData(width: 100, height: 169, layout: CONSTRAINED, quality: 100)
                                }
                            }
                            thume_image {
                                childImageSharp {
                                    gatsbyImageData(width: 315, height: 160, layout: CONSTRAINED, quality: 100)
                                }
                            }
                        }
                        fields {
                            slug
                            authorId
                            dateSlug
                        }
                        excerpt(pruneLength: 225)
                    }
                }
            }
            
        }
    `);
    
    const smalltredingArticleData = tredingArticleQuery.smallTredingArticle.edges;
    const largetredingArticleData = tredingArticleQuery.largeTredingArticle.edges;

    return (
        <TrendingArticleArea>
            <Container>
                <Row>
                    <Col lg={8} xs={7}>
                        <div className="section-title mb-40">
                            <h3>Trending Article</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <TrendingArticleRow>
                            <TrendingArticleLeftSide>
                                {smalltredingArticleData && smalltredingArticleData.map((item, index) => {
                                    return (
                                        <TrendingSingleItems
                                            key={`trending-${index}`}
                                            title={item.node.frontmatter.title}
                                            thume_image={item.node.frontmatter.thume_image}
                                            small_image={item.node.frontmatter.smallImage}
                                            categories={item.node.frontmatter.categories}
                                            slug={item.node.fields.slug}
                                            authorSlug={item.node.fields.authorId}
                                            authorId={item.node.fields.authorId}
                                            postAuthor={item.node.frontmatter.author}
                                            body={item.node.excerpt}
                                            date={item.node.frontmatter.date}
                                            dateSlug={item.node.fields.dateSlug}
                                        />
                                    );
                                })}
                            </TrendingArticleLeftSide>

                            <TrendingArticleRightSide>

                                {largetredingArticleData && largetredingArticleData.map((followingBlog, i) => {
                                    return (
                                        <TrendingSingleLargeItems
                                            key={`largetrending-${i}`}
                                            title={followingBlog.node.frontmatter.title}
                                            thume_image={followingBlog.node.frontmatter.thume_image}
                                            small_image={followingBlog.node.frontmatter.smallImage}
                                            categories={followingBlog.node.frontmatter.categories}
                                            slug={followingBlog.node.fields.slug}
                                            authorSlug={followingBlog.node.fields.authorId}
                                            authorId={followingBlog.node.fields.authorId}
                                            postAuthor={followingBlog.node.frontmatter.author}
                                            body={followingBlog.node.excerpt}
                                            date={followingBlog.node.frontmatter.date}
                                            dateSlug={followingBlog.node.fields.dateSlug}
                                        />
                                    );
                                })}

                            </TrendingArticleRightSide>

                        </TrendingArticleRow>

                    </Col>
                </Row>
            </Container>
        </TrendingArticleArea>
    )
}

TredingArticle.propTypes = {

}

export default TredingArticle
