import React from 'react'
import {graphql, useStaticQuery } from "gatsby";
import SideLatestPosts from '../../../components/side-latest-post';
import {
    ArchivePostInnerWrap,
    ArchivePostHeader,
    ArchivePostBox
} from "./style";
const ArchivePostArea = () => {
    const archivePostsQuery = useStaticQuery(graphql`
        query ArchivePostsQuery {
            latestPost: allMarkdownRemark(
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
    const archivePostsData = archivePostsQuery.latestPost.edges;

    return (
        <ArchivePostInnerWrap>
            <ArchivePostHeader>
                <div className="section-title">
                    <h3>Archive  Post</h3>
                </div>
            </ArchivePostHeader>
            <ArchivePostBox>
                {archivePostsData && archivePostsData.map((latestPosts, i) => {
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
            </ArchivePostBox>
        </ArchivePostInnerWrap>
    )
}


export default ArchivePostArea
