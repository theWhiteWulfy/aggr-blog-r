import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RegisterForm from '../../components/register-form'
import {LoginAndRegisterArea, LoginAndRegisterContent} from './style'

const LoginAndReister = () => {
    return (
        <LoginAndRegisterArea>
            <Container>
                <Row>
                    <Col lg={6} className="m-auto">
                        <LoginAndRegisterContent>

                            <div className="login-header mb-40">
                                <h3 className="mb-2">Register</h3>
                                <h5>Become a member</h5>
                            </div>

                            <RegisterForm/>
 
                        </LoginAndRegisterContent>
                    </Col>
                </Row>
            </Container>
        </LoginAndRegisterArea>
    )
}

export default LoginAndReister
