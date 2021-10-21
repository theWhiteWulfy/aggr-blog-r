
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import {GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../../components/shared/button"
import Social, {SocialLink} from "../../components/social";
import { 
    FollowingAuthorArea,
    AuthorImage,
    AuthorTitle,
    AuthorName,
    AuthorDegination,
    AuthorDetails,
    AuthorDetailsText,
    AuthorPostShare,
    ButtonBox

} from "./style";

const PostAuthorBox = ({postAuthorName, postAuthordescription, postAuthorImage, postAuthorBio, authorSlug}) => {
    const image = getImage(postAuthorImage)
    return (
        <FollowingAuthorArea>
            <AuthorImage>
                <GatsbyImage image={image} alt=""/>
            </AuthorImage>
            <AuthorTitle>
                <AuthorName><Link to={`/profile/${authorSlug}`}>{postAuthorName}</Link></AuthorName>
                <AuthorDegination>{postAuthordescription}</AuthorDegination>
            </AuthorTitle>
            <AuthorDetails>
                <AuthorDetailsText>{postAuthorBio}</AuthorDetailsText>

                <AuthorPostShare>
                    <Social 
                        sx={{ mt: "20px"}}
                        shape="rounded-5" 
                        space={15}
                    >
                        <SocialLink href="https://www.facebook.com/"><i className="icofont-facebook"></i></SocialLink>
                        <SocialLink href="https://www.skype.com/"><i className="icofont-skype"></i></SocialLink>
                        <SocialLink href="https://twitter.com/home/"><i className="icofont-twitter"></i></SocialLink>
                        <SocialLink href="https://www.linkedin.com/"><i className="icofont-linkedin"></i></SocialLink>
                    </Social>
                </AuthorPostShare>

                <ButtonBox>
                    <Button path={`/profile/${authorSlug}`} size="large" sx={{ fontSize: '14px !important'}}> 
                        View Profile 
                        <i className="icofont-long-arrow-right"></i>
                    </Button>
                </ButtonBox>
            </AuthorDetails>
        </FollowingAuthorArea>
    )
}

export default PostAuthorBox
