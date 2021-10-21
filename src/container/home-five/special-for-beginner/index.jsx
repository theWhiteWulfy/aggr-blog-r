import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import SpecialBannerTwo from '../../../components/special-for-beginner-two'
import {
    SpecialForBeginnerArea,
    SectionTitle,
    Title
} from './style'

const SpecialForBeginner = () => {

    const specialForBeginnerQuery = useStaticQuery(graphql`
        query SpecialForBeginnerTowQuery {
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
    const specialBeginnerTwoData = specialForBeginnerQuery.specialBeginnerTwo.edges

    return (
        <SpecialForBeginnerArea>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle>
                            <Title>Special For Beginner</Title>
                        </SectionTitle>
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
