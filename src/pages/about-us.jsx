import * as React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import AboutPlatform from "../container/about-us/about-platform";
import LokaldtHistoryArea from "../container/about-us/lokaldt-history";
import TeamMembersArea from "../container/about-us/team-members";
import TestimonialArea from "../container/about-us/testimonial";

const AboutUsPage = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="About Us" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="About Us"
            />
            <AboutPlatform />
            <LokaldtHistoryArea />
            <TeamMembersArea />
            <TestimonialArea />
        </Layout>
    );
};
AboutUsPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default AboutUsPage;
