import * as React from "react";
import SEO from "@components/seo";
import Layout from "../layouts/index-6.jsx";
import HeroArea from "../container/home-six/hero/index.jsx";
import TrendingArea from "../container/home-six/trending/index.jsx";
import PartnerArea from "../container/home-six/partner/index.jsx";
import CategoryOne from "../container/home-six/category-item-one/index.jsx";
import CategoryTwo from "../container/home-six/category-item-two/index.jsx";
import CategoryThree from "../container/home-six/category-item-three/index.jsx";

const IndexSixPage = () => {
    return (
        <Layout>
            <SEO title="Home Six" pathname="/" />
            <HeroArea/>
            <TrendingArea/>
            <PartnerArea/>
            <CategoryOne/>
            <CategoryTwo/>
            <CategoryThree/>
        </Layout>
    );
};

export default IndexSixPage;
