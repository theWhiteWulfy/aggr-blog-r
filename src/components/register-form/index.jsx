import React from 'react'
import { Link } from "gatsby";
import Button from '../../components/shared/button'
import {
    Form, 
    Input, 
    RememberForgetWrap,
    RememberWrap,
    CheckboxInput,
    DescCheck,
    ButtonBox,
    MemberRegister,
    PageLinkDec
} from './style'

const RegisterForm = () => {
    return (
        <Form action="#">
            <Input 
                type="text" 
                placeholder="Username"
            />
            <Input 
                type="email" 
                placeholder="Email Address"
            />
            <Input 
                type="password" 
                placeholder="Password"
            />
            <RememberForgetWrap>
                <RememberWrap>
                    <CheckboxInput type="checkbox"/>
                    <DescCheck>Agree to the <a href="#">Terms and Conditions</a></DescCheck>
                </RememberWrap>
            </RememberForgetWrap>
            <ButtonBox>
                <Button 
                    type="submit"
                    size="large" 
                    shape="rounded-10"
                >Register Now</Button>
            </ButtonBox>
            <MemberRegister>
                <PageLinkDec> A member? <Link to="/login"> Log in now</Link></PageLinkDec>
            </MemberRegister>
        </Form>
    )
}

export default RegisterForm
