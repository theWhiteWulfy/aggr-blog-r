
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    SingleMostPopulerItem,
    MostPopulerThum,
    MostPopulerContent,
    PostAuthor,
    Title,
    DecText,
    PostMeta,
    PostDate,
    PostReadTime,
} from './style'

const ReacentArticalVerticalPost = ({thume_image, title, authorSlug ,dateSlug, slug, body}) => {
    const image = getImage(thume_image);
    return (
        <SingleMostPopulerItem>
            <MostPopulerThum >
                <Link to={`/${slug}`}>
                    <GatsbyImage image={image} alt={title}/>
                </Link>
            </MostPopulerThum>
            <MostPopulerContent>
                <PostAuthor>
                    By <Link to={`/profile/${authorSlug}`}>{authorSlug}</Link>
                </PostAuthor>
                <Title>
                    <Link to={`/${slug}`}>{title}</Link>
                </Title>
                <DecText>{body}</DecText>
                <PostMeta>
                    <PostDate>
                        <Link to={`/date/${dateSlug}`}>{dateSlug}</Link>
                    </PostDate>
                    <PostReadTime>10 min read</PostReadTime>
                </PostMeta>
            </MostPopulerContent>
        </SingleMostPopulerItem>
    )
}

export default ReacentArticalVerticalPost
