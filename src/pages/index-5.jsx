import * as React from "react";
import SEO from "@components/seo";
import Layout from "../layouts/index-5.jsx";
import TestimonialArea from "../container/home-five/testimonial/index.jsx";
import SpecialForBeginner from "../container/home-five/special-for-beginner/index.jsx";
import HeroFiveArea from "../container/home-five/hero/index.jsx";
import TrendingArea from "../container/home-five/trending/index.jsx";
import PartnerArea from "../container/home-five/partner/index.jsx";
import RecentArticleArea from "../container/home-five/recent-article-area/index.jsx";

const IndexFourPage = () => {
    return (
        <Layout>
            <SEO title="Home Five" pathname="/" />
            <HeroFiveArea/>
            <TrendingArea/>
            <PartnerArea/>
            <RecentArticleArea/>
            <SpecialForBeginner/>
            <TestimonialArea/>
        </Layout>
    );
};

export default IndexFourPage;
