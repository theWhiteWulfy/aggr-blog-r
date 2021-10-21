import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import LargeSinglePosts from "../../components/large-single-post";
import LatestPostArea from '../../container/latest-post';
import { StaticImage } from "gatsby-plugin-image";
import {BlogDetailsArea,TagTitle, BlogDetailsRightSidebar, BlogAddBanner } from "./style";

const TagPosts = ({ data, location, pageContext }) => {
    const { tag } = pageContext;

    return (
        <Layout>
            <SEO title={"Blog Tags Post"} pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                crumbLabel="Blog Tag Post"
            />
            <BlogDetailsArea>
                <Container>
                    <Row>
                        <Col>
                            <TagTitle>{`Tag Posts: ${tag}`}</TagTitle>
                        </Col>
                    </Row>
                    <Row className="gx-5">
                        <Col lg={8} md={7}>
                            <Row>
                                {data.allMarkdownRemark.edges.map((blog, i) => {
                                    return (
                                        <Col lg={12} key={i}>
                                            <LargeSinglePosts
                                                title={blog.node.frontmatter.title}
                                                thume_image={
                                                    blog.node.frontmatter
                                                        .thume_image
                                                }
                                                categories={
                                                    blog.node.frontmatter.categories
                                                }
                                                body={blog.node.excerpt}
                                                date={blog.node.frontmatter.date}
                                                slug={blog.node.fields.slug}
                                                authorId={blog.node.fields.authorId}
                                                authorSlug={blog.node.fields.authorId}
                                            />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Col>
                        <Col lg={4} md={5}>
                            <BlogDetailsRightSidebar>
                                <BlogAddBanner>
                                    <a href="#">
                                        <StaticImage src="../../data/images/banners/add-banner.jpg" alt=""/>
                                    </a>
                                </BlogAddBanner>
                                <LatestPostArea/>
                            </BlogDetailsRightSidebar>
                        </Col>
                    </Row>
                </Container>
            </BlogDetailsArea>
            
        </Layout>
    );
};

TagPosts.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export const tagQuery = graphql`
    query($tag: String!) {
        allMarkdownRemark(
            sort: { 
                fields: frontmatter___date, order: DESC }
                filter: { 
                    frontmatter: { tags: { in: [$tag] }
                }
            }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        categories {
                            name
                        }
                        date(formatString: "MMMM DD YYYY")
                        tags
                        quote_text
                        title
                        thume_image {
                            childImageSharp {
                                gatsbyImageData(width: 850, height: 400)
                            }
                        }
                        author {
                            name
                        }
                    }
                    fields {
                        slug
                        authorId
                    }
                    excerpt(pruneLength: 100, truncate: true)
                }
            }
        }
    }
`;
export default TagPosts;
