import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import { Link } from 'gatsby';
import { slugify } from "@utils/functions";
import { Col, Container, Row } from 'react-bootstrap'

import {
    CategoryArea,
    HeroFourCategory,

} from './style'

const CategoryAreaFour = () => {
    const PopularCategoryQuery = useStaticQuery(graphql`
        
        query CategoryQuery {
            categories: allCategoriesJson(limit: 5) {
                edges {
                    node {
                        name
                    }
                }
            }
        }
    `);
    const {categories} = PopularCategoryQuery
    return (
        <CategoryArea>
            <Container>
                <Row>
                    <Col>
                        <HeroFourCategory>
                            {categories.edges.map(cat => (
                                <Link to={`/category/${slugify(cat.node.name)}`} key={cat.node.name}>{cat.node.name}</Link>
                            ))}
                        </HeroFourCategory>
                    </Col>
                </Row>
            </Container>
        </CategoryArea>
    )
}

export default CategoryAreaFour
