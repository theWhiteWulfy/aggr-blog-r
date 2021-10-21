import React from 'react'
import { Link } from "gatsby";
import { slugify } from "../../utils/functions";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { 
    LargeBlogPostWrap,
    LargeThum,
    AuthorBlogPostContent,
    BlogDetailsMetaBox,
    PostMetaLeftSide,
    BlogPostCategory,
    BlogPostAuthor,
    PostMetaRightSide,
    PostDate,
    PostReadTime,
    Title,
    DescText,
    LargeBlogPostbottom,
    LargeBlogPostAction,
    AuthorAction,
    CountNumber


} from "./style";
const LargeSinglePosts = ({title, thume_image, slug, body, date, categories, authorSlug, dateSlug, authorId}) => {
    const image = getImage(thume_image);
    return (
        <LargeBlogPostWrap>
            <LargeThum>
                <Link to={`/${slug}`}>
                    <GatsbyImage image={image} alt=""/>
                </Link>
            </LargeThum>
            <AuthorBlogPostContent>
                <BlogDetailsMetaBox>
                    <PostMetaLeftSide>
                        <BlogPostCategory>
                            {categories && categories.map((cat, i) => <Link key={i} to={`/category/${slugify(cat.name)}`} className={`${cat.color}`}>{cat.name}</Link>)}
                        </BlogPostCategory>
                        <BlogPostAuthor>
                          By <Link to={`/profile/${authorSlug}`}>{authorId}</Link>
                        </BlogPostAuthor>
                    </PostMetaLeftSide>
                    <PostMetaRightSide>
                        <PostDate>
                            <i className="icofont-ui-calendar"></i> 
                            <Link to={`/date/${dateSlug}`}>{date}</Link>
                        </PostDate>
                        <PostReadTime>10 min read</PostReadTime>
                    </PostMetaRightSide>
                </BlogDetailsMetaBox>
                <Title>
                    <Link to={`/${slug}`}>{title}</Link>
                </Title>
                <DescText>
                    {body}
                </DescText>

                <LargeBlogPostbottom>
                    <LargeBlogPostAction>
                        <AuthorAction>
                            <StaticImage src="../../data/images/icons/heart-2.png" alt=""/>
                            <CountNumber>8,687</CountNumber>
                        </AuthorAction>
                        <AuthorAction>
                            <StaticImage src="../../data/images/icons/message.png" alt=""/>
                            <CountNumber>9,567</CountNumber>
                        </AuthorAction>
                    </LargeBlogPostAction>
                    <LargeBlogPostAction>
                        <AuthorAction>
                            <StaticImage src="../../data/images/icons/small-bookmark.png" alt=""/>
                        </AuthorAction>
                        <AuthorAction>
                            <StaticImage src="../../data/images/icons/download.png" alt=""/>
                        </AuthorAction>
                    </LargeBlogPostAction>
                </LargeBlogPostbottom>

            </AuthorBlogPostContent>
        </LargeBlogPostWrap>
    )
}

export default LargeSinglePosts
