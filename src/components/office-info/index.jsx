import React from 'react'
import Social, {SocialLink} from "../../components/social";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { 
    SingleOfficeInfowrap, 
    OfficeThum,
    OfficeTitle,
    SingleOfficeInfoBox,
    SingleContactInfo,
    IconBox,
    ContactText,
    NavLink,
    ShareWrap,
    Title

} from './style'

const SingleOfficeInfo = ({image, officeName, contactNumber, contactEmail, addresText}) => {
    const images = getImage(image);
    return (
        <SingleOfficeInfowrap>
            <OfficeThum>
                <GatsbyImage image={images} alt=""/>
                <OfficeTitle className="hover-btn">{officeName}</OfficeTitle>
            </OfficeThum>
            <SingleOfficeInfoBox>
                <SingleContactInfo>
                    <IconBox>
                        <StaticImage src="../../data/images/icons/phone-contact.png" alt=""/>
                    </IconBox>
                    <ContactText><NavLink href={`tel:${contactNumber}`}>{contactNumber}</NavLink></ContactText>
                </SingleContactInfo>
                <SingleContactInfo>
                    <IconBox>
                        <StaticImage src="../../data/images/icons/emaill-contact.png" alt=""/>
                    </IconBox>
                    <ContactText><NavLink href={`mailto:${contactEmail}`}>{contactEmail}</NavLink></ContactText>
                </SingleContactInfo>
                <SingleContactInfo>
                    <IconBox>
                        <StaticImage src="../../data/images/icons/map-contact.png" alt=""/>
                    </IconBox>
                    <ContactText><p>{addresText}</p></ContactText>
                </SingleContactInfo>
                <ShareWrap>
                    <Title>Connect With Us:</Title>
                    <Social 
                        sx={{ mt: "15px"}}
                        shape="rounded-5" 
                        space={15}
                    >
                        <SocialLink href="https://www.facebook.com/"><i className="icofont-facebook"></i></SocialLink>
                        <SocialLink href="https://www.skype.com/"><i className="icofont-skype"></i></SocialLink>
                        <SocialLink href="https://twitter.com/home/"><i className="icofont-twitter"></i></SocialLink>
                        <SocialLink href="https://www.linkedin.com/"><i className="icofont-linkedin"></i></SocialLink>
                    </Social>
                </ShareWrap>
            </SingleOfficeInfoBox>
        </SingleOfficeInfowrap>
    )
}

export default SingleOfficeInfo
