import React from 'react'
import Button from '../../components/shared/button'
import {Form, SingleInputBox, Input, Textarea} from './style'

const ContactFormBox = () => {
    return (
        <Form action="#" method="post">
            <SingleInputBox>
                <Input 
                    type="text" 
                    name="con_name" 
                    placeholder="Name"
                />
            </SingleInputBox>
            <SingleInputBox>
                <Input 
                    type="email" 
                    name="con_email" 
                    placeholder="Email"
                />
            </SingleInputBox>
            <SingleInputBox>
                <Input 
                    type="text" 
                    name="con_phone" 
                    placeholder="Phone"
                />
            </SingleInputBox>
            <SingleInputBox>
                <Textarea 
                    name="con_message" 
                    placeholder="Massage"
                ></Textarea>
            </SingleInputBox>
            <SingleInputBox>
                <Button 
                    type="submit"
                    size="large" 
                    shape="rounded-10"
                >Send Message <i className="icofont-long-arrow-right"></i></Button>
            </SingleInputBox>
        </Form>
    )
}

export default ContactFormBox
