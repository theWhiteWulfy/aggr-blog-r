import React from 'react'
import PropTypes from 'prop-types'
import {graphql, useStaticQuery } from "gatsby";
import SideLatestPosts from '../../components/side-latest-post';
import {
    LatestPostInnerWrap,
    LatestPostHeader,
    LatestPostBox
} from "./style";
const LatestPostArea = props => {
    const sideLatestPostsQuery = useStaticQuery(graphql`
        query SideLatestPostsQuery {
            latestPost: allMarkdownRemark(
                sort: {fields: [frontmatter___date], order: DESC},
                limit: 5
              ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            date(formatString: "DD MMMM YYYY")
                            format
                            is_featured
                            thume_image {
                                childImageSharp {
                                    gatsbyImageData(width: 84, height: 84, quality: 100)
                                }
                            }
                        }
                        fields {
                            slug
                            dateSlug
                        }
                    }
                }
            }
            
        }
    `);
    const sideLatestPostsData = sideLatestPostsQuery.latestPost.edges;

    return (
        <LatestPostInnerWrap>
            <LatestPostHeader>
                <div className="section-title">
                    <h3>Latest Post</h3>
                </div>
            </LatestPostHeader>
            <LatestPostBox>
                {sideLatestPostsData && sideLatestPostsData.map((latestPosts, i) => {
                    return ( 
                        <SideLatestPosts
                            key={i}
                            title={latestPosts.node.frontmatter.title}
                            thume_image={latestPosts.node.frontmatter.thume_image}
                            date={latestPosts.node.frontmatter.date}
                            dateSlug={latestPosts.node.fields.dateSlug}
                            slug={latestPosts.node.fields.slug}
                        />
                    );
                })}
            </LatestPostBox>
        </LatestPostInnerWrap>
    )
}

LatestPostArea.propTypes = {

}

export default LatestPostArea
