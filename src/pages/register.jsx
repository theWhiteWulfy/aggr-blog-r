import * as React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from '../components/pagebreadcrumb'
import LoginAndReister from "../container/register";

const RegisterPage = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="Register" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
            />
            <LoginAndReister/>
        </Layout>
    );
};
RegisterPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default RegisterPage;





