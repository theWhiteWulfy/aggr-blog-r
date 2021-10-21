import { Link } from 'gatsby'
import {
    SpecialBannerBlogPost,
    SingleSpecialBannerPost,
    SpecialBannerPostContent,
    BannerPostAuthor,
    Title,
    DecText,
    BannerPostMeta,
    PostDate,
    ReadTime

} from './style'

const SpecialBannerOne = ({title, body, date, authorSlug, dateSlug, slug}) => {
    return (
        <SpecialBannerBlogPost>
            <SingleSpecialBannerPost>
                <SpecialBannerPostContent>
                    <BannerPostAuthor>
                        By <Link to={`/profile/${authorSlug}`}>{authorSlug}</Link>
                    </BannerPostAuthor>
                    <Title>
                        <Link to={`/${slug}`}>{title}</Link>
                    </Title>
                    <DecText>{body}</DecText>
                    <BannerPostMeta>
                        <PostDate>
                            <Link to={`/date/${dateSlug}`}>{date}</Link>
                        </PostDate>
                        <ReadTime>10 min read</ReadTime>
                    </BannerPostMeta>
                </SpecialBannerPostContent>
            </SingleSpecialBannerPost>
        </SpecialBannerBlogPost>
    )
}

export default SpecialBannerOne
