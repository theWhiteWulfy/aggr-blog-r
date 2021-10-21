import * as React from "react";
import Layout from "@layout";
import SEO from "@components/seo";
import HeroOne from "../container/home-one/hero";
import TredingArticle from "../container/home-one/trending-article";
import FromFollowingArea from "../container/home-one/from-following";
import TrendingTopics from "../container/home-one/trending-topic";
import FeaturedVideoArea from "../container/home-one/featured-video";
import AddBanner from "../container/home-one/add-banner";

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            <HeroOne/>
            <TredingArticle/>
            <FromFollowingArea/>
            <TrendingTopics/>
            <FeaturedVideoArea/>
            <AddBanner/>
        </Layout>
    );
};

export default IndexPage;
