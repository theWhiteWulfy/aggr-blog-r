/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import Social, {SocialLink} from "../../components/social";
import { graphql, Link } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import { slugify } from "@utils/functions";
import StayInTouchs from '@components/stay-in-touch';
import LatestPostArea from '../../container/latest-post';
import PostAuthorBox from "../../components/post-author";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { DiscussionEmbed } from "disqus-react";
import {
    SingleBlogContent,
    PostDetailsContentWrap,
    BlogDetailsArea,
    PostDetailsBody,
    Thumb,
    Content,
    BlogDetailsMetaBox,
    PostMetaLeftSide,
    BlogDetailsPostAuthor,
    PostMidSide,
    PostDate,
    PostTime,
    PostMetaRightSide,
    Title,
    MetaBox,
    CategorySocialContent,
    PostSocialItems,
    PostCategoryItems,
    CommentArea,
    CommentTitle,
} from "./style";

const SinglePosts = ({ data, location, pageContext }) => {
    const post = data.markdownRemark.frontmatter;
    const {authorId, dateSlug} = data.markdownRemark.fields;
    const {author} = post;

    const image = getImage(post.thume_image.childImageSharp);

    // Social Share
    const baseUrl = "https://hasthems.com";

    // Disqus Comments add
    const disqusShorttname = "mitech-1";
    const disquscConfig = {
        identifier: data.markdownRemark.id,
        title: post.title,
        url: baseUrl + "/" + pageContext.slug,
    };

    return (
        <Layout>
            <SEO title={post.title} pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
            />
            <BlogDetailsArea>
                <Container>
                    <Row className="gx-5">
                        <Col lg={8}>
                            <PostDetailsContentWrap>
                                <PostDetailsBody>
                                    <Thumb>
                                        <GatsbyImage
                                            image={image}
                                            alt={post.title}
                                        />
                                    </Thumb>
                                    <Content>

                                        <BlogDetailsMetaBox>
                                            <PostMetaLeftSide>
                                                <MetaBox>
                                                    {post.categories &&
                                                        post.categories.map((categorie, i) => (
                                                            <Link
                                                                className={`post-category ${categorie.color}`}
                                                                key={`${slugify(
                                                                    categorie
                                                                )}-${i}`}
                                                                to={`/category/${slugify(
                                                                    categorie.name
                                                                )}`}
                                                            >
                                                                {categorie.name}
                                                            </Link>
                                                        )
                                                    )}
                                                </MetaBox>
                                                <BlogDetailsPostAuthor>
                                                    By <Link to={`/profile/${authorId}`}>{author.name}</Link>
                                                </BlogDetailsPostAuthor>
                                            </PostMetaLeftSide>

                                            <PostMidSide>
                                                <PostDate>
                                                    <i className="icofont-ui-calendar"></i> 
                                                    <Link to={`/date/${dateSlug}`}>{post.date}</Link>
                                                </PostDate>
                                                <PostTime>10 min read</PostTime>
                                            </PostMidSide>

                                            <PostMetaRightSide>
                                                <a href="#"><StaticImage src="../../data/images/icons/small-bookmark.png" alt=""/></a>
                                                <a href="#"><StaticImage src="../../data/images/icons/heart.png" alt=""/></a>
                                            </PostMetaRightSide>
                                        </BlogDetailsMetaBox>
                                        
                                        <Title>{post.title}</Title>
                                        <SingleBlogContent
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    data.markdownRemark.html,
                                            }}
                                        />

                                        <CategorySocialContent>
                                            
                                            <PostCategoryItems>
                                                <span>Tags:</span>
                                                {post.tags.map((tag, i) => (
                                                    <Link
                                                        key={i}
                                                        to={`/tag/${slugify(
                                                            tag
                                                        )}`}
                                                    >
                                                        {tag}
                                                        {i !==
                                                            post.tags.length -
                                                                1 && ", "}
                                                    </Link>
                                                ))}
                                            </PostCategoryItems>

                                            <Social 
                                                sx={{ mt: ["30px", "0"]}}
                                                shape="rounded-5" 
                                                space={15}
                                            >
                                                <SocialLink 
                                                    href={
                                                        "https://www.facebook.com/sharer/sharer.php?u=" +
                                                        baseUrl +
                                                        pageContext.slug
                                                    }>
                                                        <i className="icofont-facebook"></i>
                                                </SocialLink>
                                                <SocialLink 
                                                    href={
                                                        "https://twitter.com/share?url=" +
                                                        baseUrl +
                                                        pageContext.slug +
                                                        "&text=" +
                                                        post.title +
                                                        "&via" +
                                                        "twitterHandle"
                                                    }><i className="icofont-twitter"></i>
                                                </SocialLink>
                                                <SocialLink href="https://www.linkedin.com/"><i className="icofont-linkedin"></i></SocialLink>
                                            </Social>


                                        </CategorySocialContent>
                                        
                                        <CommentArea>
                                            <CommentTitle>Comments</CommentTitle>
                                            <DiscussionEmbed
                                                shortname={disqusShorttname}
                                                config={disquscConfig}
                                            />
                                        </CommentArea>
                                    </Content>
                                </PostDetailsBody>
                            </PostDetailsContentWrap>
                        </Col>
                        <Col lg={4}>
                            <div className="blog-details-sidebar">
                                {author && (
                                    <PostAuthorBox
                                        postAuthorName={author.name}
                                        postAuthorImage={author.image}
                                        postAuthorBio={author.bio}
                                        postAuthordescription={author.description}
                                        authorSlug={author.fields.authorId}
                                    />
                                )}  
                                <LatestPostArea/>
                                <StayInTouchs/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </BlogDetailsArea>
        </Layout>
    );
};

SinglePosts.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export const postQuery = graphql`
    query blogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            fields {
                slug
                authorId
                dateSlug
            }
            frontmatter {
                categories {
                    name
                    color
                }
                date
                tags
                quote_text
                title
                author {
                    name
                    bio
                    description
                    fields {
                      authorId
                    }
                    social {
                      twitter
                      google
                      facebook
                    }
                    image {
                      childImageSharp {
                        gatsbyImageData(layout: FIXED, width: 80, height: 80, quality: 100)
                      }
                    }
                }
                thume_image {
                    childImageSharp {
                        gatsbyImageData(width: 850, height: 400)
                    }
                }
            }
            excerpt
        }
    }
`;
export default SinglePosts;
