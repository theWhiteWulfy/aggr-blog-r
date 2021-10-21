import * as React from "react";
import Layout from "../layouts/index-2.jsx";
import SEO from "@components/seo";
import HeroTwo from "../container/home-two/hero";
import MostPopularArea from "../container/home-two/most-popular/index.jsx";
import RecentArticlesArea from "../container/home-two/recent-article/index.jsx";
import NewsLettersArea from "../container/home-two/newsletter/index.jsx";
import SpecialForBeginner from "../container/home-two/special-for-beginner/index.jsx";

const IndexTwoPage = () => {
    return (
        <Layout>
            <SEO title="Home Two" pathname="/" />
            <HeroTwo/>
            <MostPopularArea/>
            <RecentArticlesArea/>
            <NewsLettersArea/>
            <SpecialForBeginner/>
        </Layout>
    );
};

export default IndexTwoPage;
