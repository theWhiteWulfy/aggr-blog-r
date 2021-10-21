import * as React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from '../components/pagebreadcrumb'
import Login from "../container/login";

const LoginPage = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="Login" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
            />
            <Login/>
        </Layout>
    );
};
LoginPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default LoginPage;





