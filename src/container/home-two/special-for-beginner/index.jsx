import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";
import SpecialBannerOne from '../../../components/special-banner'
import SpecialBannerTwo from '../../../components/special-for-beginner-two'
import {
    SpecialForBeginnerArea,
    SectionTitleTwo,
    Title,
    SpecialBannerImage
} from './style'

const SpecialForBeginner = () => {

    const specialForBeginnerQuery = useStaticQuery(graphql`
        query SpecialForBeginnerQuery {
            specialBeginnerOne: allMarkdownRemark(
                    filter: {frontmatter: {is_special_for_beginner: {eq: true}}}
                    limit: 2
                ) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            thume_image {
                                childImageSharp {
                                    gatsbyImageData(width: 372, height: 272, quality: 100)
                                }
                            }
                        }
                        fields {
                            slug
                            authorId
                            dateSlug
                        }
                        excerpt(pruneLength: 160)
                    }
                }
            }
            specialBeginnerTwo: allMarkdownRemark(
                filter: {frontmatter: {is_special_for_beginner: {eq: true}}}
                limit: 3
                skip: 2
            ) {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        thume_image {
                            childImageSharp {
                                gatsbyImageData(width: 372, height: 272, quality: 100)
                            }
                        }
                    }
                    fields {
                        slug
                        authorId
                        dateSlug
                    }
                }
            }
        }
        }
    `)

    const specialBeginnerOneData = specialForBeginnerQuery.specialBeginnerOne.edges
    const specialBeginnerTwoData = specialForBeginnerQuery.specialBeginnerTwo.edges

    return (
        <SpecialForBeginnerArea>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitleTwo>
                            <Title>Special For Beginner</Title>
                        </SectionTitleTwo>
                    </Col>
                </Row>
                <Row>
                    <Col lg={7}>
                        <SpecialBannerImage>
                            <StaticImage src="../../../data/images/banners/special-banner.jpg" alt="Special Banner Image"/>
                        </SpecialBannerImage>
                    </Col>
                    <Col lg={5}>
                        {specialBeginnerOneData && specialBeginnerOneData.map((item, i) => {
                            return (
                                <SpecialBannerOne
                                    key ={i}
                                    title={item.node.frontmatter.title}
                                    thume_image={item.node.frontmatter.thume_image}
                                    date={item.node.frontmatter.date}
                                    slug={item.node.fields.slug}
                                    authorSlug={item.node.fields.authorId}
                                    dateSlug={item.node.fields.dateSlug}
                                    body={item.node.excerpt}
                                />
                            );
                        })}
                    </Col>
                </Row>
                <Row className="row--35">
                    {specialBeginnerTwoData && specialBeginnerTwoData.map((item, i) => {
                        return (
                            <Col lg={4} md={6} sm={6} key ={i}> 
                                <SpecialBannerTwo
                                    title={item.node.frontmatter.title}
                                    thume_image={item.node.frontmatter.thume_image}
                                    date={item.node.frontmatter.date}
                                    slug={item.node.fields.slug}
                                    authorSlug={item.node.fields.authorId}
                                    dateSlug={item.node.fields.dateSlug}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </SpecialForBeginnerArea>
    )
}

export default SpecialForBeginner
