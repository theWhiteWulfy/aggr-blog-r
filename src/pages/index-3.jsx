import * as React from "react";
import Layout from "../layouts/index-3.jsx";
import SEO from "@components/seo";
import HeroThreeArea from "../container/home-three/hero/index.jsx";
import PopularCategory from "../container/home-three/category-list/index.jsx";
import RecentArticleThree from "../container/home-three/recent-article/index.jsx";
import NewsLettersArea from "../container/home-three/newsletter/index.jsx";
import TrendingTodyArea from "../container/home-three/most-popular/index.jsx";
import PartnerArea from "../container/home-three/partner/index.jsx";

const IndexThreePage = () => {
    return (
        <Layout>
            <SEO title="Home Three" pathname="/" />
            <HeroThreeArea/>
            <PopularCategory/>
            <RecentArticleThree/>
            <NewsLettersArea/>
            <TrendingTodyArea/>
            <PartnerArea/>
        </Layout>
    );
};

export default IndexThreePage;
