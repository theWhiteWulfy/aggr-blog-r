import { Link } from 'gatsby'
import {GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    SingleBannerBlogPost,
    SpecialBannerPostImage,
    SpecialBannerPostContent,
    BannerPostAuthor,
    Title,
    BannerPostMeta,
    PostDate,
    ReadTime

} from './style'
const SpecialBannerTwo = ({thume_image, title, body, date, authorSlug, dateSlug, slug}) => {
    const image = getImage(thume_image);
    return (
        <SingleBannerBlogPost>
            <SpecialBannerPostImage>
                <Link to={`/${slug}`}>
                    <GatsbyImage image={image} alt="Banner Blog image"/>
                </Link>
            </SpecialBannerPostImage>
            
            <SpecialBannerPostContent>
                <BannerPostAuthor>
                    By <Link to={`/profile/${authorSlug}`}>{authorSlug}</Link>
                </BannerPostAuthor>
                <Title>
                    <Link to={`/${slug}`}>{title}</Link>
                </Title>
                <BannerPostMeta>
                    <PostDate>
                        <Link to={`/date/${dateSlug}`}>{date}</Link>
                    </PostDate>
                    <ReadTime>10 min read</ReadTime>
                </BannerPostMeta>
            </SpecialBannerPostContent>
        </SingleBannerBlogPost>
    )
}

export default SpecialBannerTwo
