import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import { Link } from 'gatsby';
import { slugify } from "@utils/functions";
import { Col, Container, Row } from 'react-bootstrap'

import {
    MostpopularCategoryArea,
    SectionTitle,
    Title,
    HeroThreeCategory,

} from './style'

const PopularCategory = () => {
    const PopularCategoryQuery = useStaticQuery(graphql`
        
        query popularCategoryQuery {
            categories: allCategoriesJson(limit: 9) {
                edges {
                    node {
                        name
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 260, height: 110, quality: 100)
                            }
                        }
                    }
                }
            }
        }
    `);
    const {categories} = PopularCategoryQuery
    return (
        <MostpopularCategoryArea>
            <Container>
                <Row>
                    <Col>
                        <SectionTitle>
                            <Title>Most Popular Category</Title>
                        </SectionTitle>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <HeroThreeCategory>
                            {categories.edges.map(cat => (
                                <Link to={`/category/${slugify(cat.node.name)}`} key={cat.node.name}>{cat.node.name}</Link>
                            ))}
                        </HeroThreeCategory>
                    </Col>
                </Row>
            </Container>
        </MostpopularCategoryArea>
    )
}

export default PopularCategory
