/* eslint-disable prettier/prettier */
const path = require("path");
const { slugify } = require("./src/utils/functions");
const _ = require("lodash");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@theme": path.resolve(
                    __dirname,
                    "./src/gatsby-plugin-theme-ui"
                ),
                "@components": path.resolve(__dirname, "./src/components"),
                "@shared": path.resolve(__dirname, "./src/components/shared"),
                "@containers": path.resolve(__dirname, "./src/containers"),
                "@layout": path.resolve(__dirname, "./src/layouts"),
                "@assets": path.resolve(__dirname, "./src/assets"),
                "@utils": path.resolve(__dirname, "./src/utils"),
                "@constants": path.resolve(__dirname, "./src/constants"),
                "@hooks": path.resolve(__dirname, "./src/hooks"),
                "@data": path.resolve(__dirname, "./src/data"),
            },
        },
    });
};

// Single Post Page
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    // fields create in qrapql file
    if (node.internal.type === "MarkdownRemark") {
        const slugFromTitle = slugify(node.frontmatter.title);
        const date = node.frontmatter.date;
        const dateSplit = date.split(" ");
        createNodeField({
            node,
            name: "slug",
            value: slugFromTitle,
        });
        createNodeField({
            node,
            name: 'id',
            value: slugFromTitle + '-' + dateSplit[0]
        });
        createNodeField({
            node,
            name: "dateSlug",
            value: dateSplit[0]
        });
        if (Object.prototype.hasOwnProperty.call(node.frontmatter, "author")) {
            createNodeField({
              node,
              name: "authorId",
              value: slugify(node.frontmatter.author)
            });
        }
        if (Object.prototype.hasOwnProperty.call(node.frontmatter, "categories")) {
            createNodeField({
              node,
              name: "cats",
              value: node.frontmatter.categories.map(cat => slugify(cat))
            });
        }
    }
    if(node.internal.type === "AuthorsJson"){
        createNodeField({
            node,
            name: "authorId",
            value: slugify(node.name)
        });
    }
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    //  const singlePostTemplate = path.resolve('src/templates/single-post.js')
    const templates = {
        singlePost: path.resolve("src/templates/single-post/index.js"),
        tagPosts: path.resolve("src/templates/tag-post/index.js"),
        categoriePosts: path.resolve("src/templates/categories-post/index.js"),
        authorPage: path.resolve("src/templates/author-post/index.js"),
        datePage: path.resolve("src/templates/date-post/index.js"),
        
    };

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            tags
                        }
                        fields {
                            slug
                            authorId
                            dateSlug
                            cats
                        }
                    }
                }
            }


        }
    `).then((res) => {
        if (res.errors) return Promise.reject(res.errors);

        // Create Single Blog Post Page
        const posts = res.data.allMarkdownRemark.edges;

        posts.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: templates.singlePost,
                context: {
                    // Pssing slug for Templates to use to get post
                    slug: node.fields.slug,
                },
            });
        });

        // Create Authors Page
        let authors = []
        _.each(posts, edge => {
            if(_.get(edge, 'node.fields.authorId')){
                authors = authors.concat(edge.node.fields.authorId)
            }
        })

        authors = _.uniq(authors)
        authors.forEach(author => {
            createPage({
                path: `/profile/${author}`,
                component: templates.authorPage,
                context: {
                    author
                }
            })
        })

        // Get all Tag
        let tags = [];
        _.each(posts, (edge) => {
            if (_.get(edge, "node.frontmatter.tags")) {
                tags = tags.concat(edge.node.frontmatter.tags);
            }
        });
        // Tag Number Count
        let tagPostCounts = {};
        tags.forEach((tag) => {
            tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
        });
        tags = _.uniq(tags);

        // Tag Post Page Create
        tags.forEach((tag) => {
            createPage({
                path: `/tag/${slugify(tag)}`,
                component: templates.tagPosts,
                context: {
                    tag,
                },
            });
        });

        // Category page

        let categories = [];
        _.each(posts, (edge) => {
            if (_.get(edge, "node.fields.cats")) {
                categories = categories.concat(edge.node.fields.cats);
            }
        });
        // Categories Number Count
        let catPostCounts = {};
        categories.forEach((cat) => {
            catPostCounts[cat] = (catPostCounts[cat] || 0) + 1;
        });
        categories = _.uniq(categories);

        // // Tag Post Page Create
        categories.forEach((cat) => {
            createPage({
                path: `/category/${slugify(cat)}`,
                component: templates.categoriePosts,
                context: {
                    cat,
                },
            });
        });

        // Create Date Page
        let dateSlugs = []
        _.each(posts, edge => {
            if(_.get(edge, 'node.fields.dateSlug')){
                dateSlugs = dateSlugs.concat(edge.node.fields.dateSlug)
            }
        })

        dateSlugs = _.uniq(dateSlugs)
        dateSlugs.forEach((dateSlug) => { 
            createPage({
                path: `/date/${dateSlug}`,
                component: templates.datePage,
                context: {
                    dateSlug
                }
            })
        })

        // Post List pagintion
        // const postsPerPage = 3;
        // const numberOfPages = Math.ceil(posts.length / postsPerPage);
        // Array.from({ length: numberOfPages }).forEach((_, index) => {
        //     const inFirstPage = index === 0;
        //     const currentPage = index + 1;
        //     if (inFirstPage) return;
        //     createPage({
        //         path: `/blog/${currentPage}`,
        //         component: templates.categoriePosts,
        //         context: {
        //             limit: postsPerPage,
        //             skip: index * postsPerPage,
        //             currentPage,
        //             numberOfPages,
        //         },
        //     });
        // });



    });
};
