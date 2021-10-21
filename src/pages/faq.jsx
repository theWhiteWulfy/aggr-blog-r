import * as React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from '../components/pagebreadcrumb'
import FaqArea from "../container/faq-page";

const FaqsPage = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="FAQ's" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
            />                                      
            <FaqArea/>
        </Layout>
    );
};
FaqsPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default FaqsPage;





