import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TeamItems from '../../../components/team-item'
import { graphql, useStaticQuery } from 'gatsby'
import {
    TeamArea
} from './style'

const TeamMembersArea = () => {
    // const teamMemberQuery = useStaticQuery(graphql`
    
    // `)


    const teamMembersQuery = useStaticQuery(graphql`
        query TeamMembersQuery {
            teamJson(id: {eq: "team-area"}) {
                section_title {
                    subTitle
                    title
                }
                team {
                    name
                    designation
                    images {
                        childrenImageSharp {
                            gatsbyImageData(width: 600, quality: 100)
                        }
                    }
                }
            }
        }
      
    `);
    const {
        section_title: { title, subTitle },
        team
    } = teamMembersQuery.teamJson;

    return (
        <TeamArea>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="section-title text-center">
                            <h6 className="sub-title-primary mb-20">{subTitle}</h6>
                            <h2 className="title">{title}</h2>
                        </div>
                    </Col>
                </Row>
                <Row className="gx-5">
                    {team && team.map((itemData, i) =>(
                        <Col sm={6} md={6} lg={3} key={i}>
                            <TeamItems
                                images={itemData.images.childrenImageSharp}
                                name={itemData.name}
                                designation={itemData.designation}
                            />
                        </Col>
                    ))}
                    
                </Row>
            </Container>
        </TeamArea>
    )
}

export default TeamMembersArea
