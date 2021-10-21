import * as React from "react";
import SEO from "@components/seo";
import Layout from "../layouts/index-4.jsx";
import HeroFourArea from "../container/home-four/hero/index.jsx";
import CategoryAreaFour from "../container/home-four/category/index.jsx";
import TestimonialArea from "../container/home-four/testimonial/index.jsx";
import Newsletter from "../container/home-four/newsletter/index.jsx";
import BlogPostArea from "../container/home-four/blog-post/index.jsx";

const IndexFourPage = () => {
    return (
        <Layout>
            <SEO title="Home Four" pathname="/" />
            <HeroFourArea/>
            <CategoryAreaFour/>
            <BlogPostArea/>
            <TestimonialArea/>
            <Newsletter/>
        </Layout>
    );
};

export default IndexFourPage;
