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

const LoginForm = () => {
    return (
        <Form action="#">
            <Input 
                type="text" 
                placeholder="Username"
            />
            <Input 
                type="password" 
                placeholder="Password"
            />
            <RememberForgetWrap>
                <RememberWrap>
                    <CheckboxInput type="checkbox"/>
                    <DescCheck>Remember</DescCheck>
                </RememberWrap>
                <a href="#">Forgot your password?</a>
            </RememberForgetWrap>
            <ButtonBox>
                <Button 
                    type="submit"
                    size="large" 
                    shape="rounded-10"
                >Log in</Button>
            </ButtonBox>
            <MemberRegister>
                <PageLinkDec> Not a member? <Link to="/register">  Register now</Link></PageLinkDec>
            </MemberRegister>
        </Form>
    )
}

export default LoginForm
