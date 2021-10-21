import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../../components/login-form'
import {LoginAndRegisterArea, LoginAndRegisterContent} from './style'

const Login = () => {
    return (
        <LoginAndRegisterArea>
            <Container>
                <Row>
                    <Col lg={6} className="m-auto">
                        <LoginAndRegisterContent>

                            <div className="login-header mb-40">
                                <h3>Log In Your Account</h3>
                            </div>

                            <LoginForm/>
 
                        </LoginAndRegisterContent>
                    </Col>
                </Row>
            </Container>
        </LoginAndRegisterArea>
    )
}

export default Login
