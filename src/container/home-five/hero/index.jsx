import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby";
import { Col, Container, Row } from 'react-bootstrap'
import Button from '../../../components/shared/button'
import { slugify } from "@utils/functions";
import {
    HeroArea,
    HeroFiveInnerText,
    SubTitle,
    Title,
    HeightLightTitle,
    HeroTextDec,
    ButtonBox,
    HeroFiveCategory
} from './style'
const HeroFiveArea = () => {
    const HeroFiveCategoryQuery = useStaticQuery(graphql`
        query CategoryFiveQuery {
            categories: allCategoriesJson(limit: 9) {
                edges {
                    node {
                        name
                        color
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
    const {categories} = HeroFiveCategoryQuery
    return (
        <HeroArea>
            <Container>
                <Row className="align-items-center">
                    <Col lg={7}>
                        <HeroFiveInnerText>
                            <SubTitle>All Solution In One</SubTitle>
                            <Title>
                                <HeightLightTitle> Unlimited </HeightLightTitle> 
                                  Advice &amp; Resource
                            </Title>
                            <HeroTextDec>That necessitates a robust ecommerce platform that
                                optimizes your store &amp; products
                            </HeroTextDec>
                            <ButtonBox>
                                <Button path="/" size="large" > Share your thinking <i className="icofont-long-arrow-right"></i></Button>
                            </ButtonBox>
                        </HeroFiveInnerText>
                    </Col>
                    <Col lg={5}>
                        <HeroFiveCategory>
                            {categories.edges.map(cat => (
                                <Link 
                                    to={`/category/${slugify(cat.node.name)}`} 
                                    key={cat.node.name}
                                    className={`cat-lg-btn ${cat.node.color}`}
                                    >
                                    {cat.node.name}
                                </Link>
                            ))}
                        </HeroFiveCategory>
                    </Col>
                </Row>
            </Container>
        </HeroArea>
    )
}

export default HeroFiveArea
