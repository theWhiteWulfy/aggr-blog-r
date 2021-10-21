/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Row, Col } from 'react-bootstrap'
import {graphql, useStaticQuery } from "gatsby";
import { slugify } from "@utils/functions";
import Button from '@components/shared/button'
import { StaticImage} from "gatsby-plugin-image";
import { 
    HeroAreaWrapper,
    HeroTwoArea,
    HeroAreaTwoInnter,
    HeroTwoTag,
    HeroTwoBanner,
    ShorTitle,
    Title,
    SubTitle
} from "./style";


const HeroTwo = () => {
    const heroTwoPostQuery = useStaticQuery(graphql`
        query HeroTwoPostQuery {
            categories: allCategoriesJson(limit: 7) {
                edges {
                    node {
                        name
                    }
                }
            }
            heroJson(id: {eq: "hero-two"}) {
                id
                hero_two {
                    shortTitle
                    title
                    subTitle
                }
            }
        }
    `);

    const {
        hero_two: {shortTitle, title, subTitle}
    } = heroTwoPostQuery.heroJson;
    const {categories} = heroTwoPostQuery
    return (
        <HeroAreaWrapper>
            <HeroTwoArea>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <HeroAreaTwoInnter>
                                <ShorTitle>{shortTitle}</ShorTitle>
                                <Title>{title}</Title>
                                <SubTitle>{subTitle}</SubTitle>
                                <HeroTwoTag>
                                    {categories && categories.edges.map((catItem, i)=>{ 
                                        return (
                                            <Button 
                                                sx={{
                                                    border: "2px solid #fff",
                                                    lineHeight: "46px",
                                                    padding: ['0 15px','0 35px' ]
                                                }}
                                                key={i} 
                                                shape="rounded-10"
                                                variant="outlined"
                                                path={`/category/${slugify(catItem.node.name)}`}
                                            >{catItem.node.name}</Button>  
                                        )
                                    })}
                                </HeroTwoTag>
                            </HeroAreaTwoInnter>
                        </Col>
                    </Row>
                </Container>
            </HeroTwoArea>
            <HeroTwoBanner>
                <StaticImage src="../../../data/images/banners/hero-text-banner.png" alt=""/>
            </HeroTwoBanner>
        </HeroAreaWrapper>
    )
}

export default HeroTwo
