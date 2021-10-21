/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import LargeSinglePosts from "../../components/large-single-post";
import LatestPostArea from '../../container/latest-post';
import { 
    BlogDetailsArea,
    BlogDetailsRightSidebar 
} from "./style";

const CategorisPosts = ({ data, location, pageContext }) => {
    return (
        <Layout>
            <SEO title={"Blog Categories Post"} pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
            />
            <BlogDetailsArea>
                <Container>
                    <Row className="gx-5">
                        <Col lg={8} md={7}>
                            <Row>
                                {data.allMarkdownRemark.edges.map((blog, i) => {
                                    return (
                                        <Col lg={12} key={i}>
                                            <LargeSinglePosts
                                                title={blog.node.frontmatter.title}
                                                thume_image={
                                                    blog.node.frontmatter.thume_image
                                                }
                                                categories={
                                                    blog.node.frontmatter.categories
                                                }
                                                body={blog.node.excerpt}
                                                date={blog.node.frontmatter.date}
                                                slug={blog.node.fields.slug}
                                                authorSlug={blog.node.fields.authorId}
                                                authorId={blog.node.fields.authorId}
                                                dateSlug={blog.node.fields.dateSlug}
                                            />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Col>
                        <Col lg={4} md={5}>
                            <BlogDetailsRightSidebar sx={{ mt: "-40px !important"}}>
                                <LatestPostArea/>
                            </BlogDetailsRightSidebar>
                        </Col>
                    </Row>
                </Container>
            </BlogDetailsArea>
            
        </Layout>
    );
};

CategorisPosts.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export const CategorieQuery = graphql`
    query($cat: String!) {
        allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            filter: {fields: {cats: { in: [$cat]}}}
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        categories {
                            name
                            color
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
                    }
                    fields {
                        slug
                        authorId
                        dateSlug
                    }
                    excerpt(pruneLength: 240, truncate: true)
                }
            }
        }
    }
`;
export default CategorisPosts;
