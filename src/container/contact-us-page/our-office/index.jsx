import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import SingleOfficeInfo from '../../../components/office-info'
import { ContactUsPageArea } from './style'

const OurOffices = () => {
    const officeinfoQuery = useStaticQuery(graphql`
        query OfficeinfoQuery { 
            contactUsJson(id: {eq: "contact-us-area"}) {
                id
                officeWrap {
                    addresText
                    contactEmail
                    contactNumber
                    id
                    officeName
                    image1 {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `)

    const {officeWrap} = officeinfoQuery.contactUsJson;

    return (
        <ContactUsPageArea>
            <Container>
                <Row className="gx-5">
                    {officeWrap && officeWrap.map((item, i)=>{
                        return (
                            <Col lg={4} md={6} key={i}>
                                <SingleOfficeInfo
                                    image={item.image1}
                                    officeName={item.officeName}
                                    contactNumber={item.contactNumber}
                                    contactEmail={item.contactEmail}
                                    addresText={item.addresText}
                                />
                            </Col>
                        )
                    })}
                    
                </Row>
            </Container>
        </ContactUsPageArea>
    )
}

export default OurOffices
