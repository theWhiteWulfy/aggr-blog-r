import React from 'react'
import {GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    SingleTestimonialItemTwo, 
    TestimonialPostAuthor, 
    TestimonialAuthorImage, 
    TestimonialAuthorInfo,
    NameTitle,
    Designation,
    TestimonialPostContent,
    TestimonialPostTitle,
    TestimonialDec
} from './style'
const TestimonialItems = ({images, name, designation, title:Title_Text, desText }) => {
    const ThumImage = getImage(images[0]);
    return (
        <SingleTestimonialItemTwo>
            <TestimonialPostAuthor>
                <TestimonialAuthorImage>
                    <GatsbyImage image={ThumImage} alt={name}/>
                </TestimonialAuthorImage>
                <TestimonialAuthorInfo>
                    <NameTitle>{name}</NameTitle>
                    <Designation>{designation}</Designation>
                </TestimonialAuthorInfo>
            </TestimonialPostAuthor>
            <TestimonialPostContent>
                <TestimonialPostTitle>
                    {Title_Text}
                </TestimonialPostTitle>
                <TestimonialDec>
                    {desText}
                </TestimonialDec>
            </TestimonialPostContent>
        </SingleTestimonialItemTwo>
    )
}

export default TestimonialItems
