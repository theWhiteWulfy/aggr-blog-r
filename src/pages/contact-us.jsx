import * as React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from '../components/pagebreadcrumb'
import OurOffices from "../container/contact-us-page/our-office";
import ContactFormArea from "../container/contact-us-page/contact-form";

const ContactUsPage = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="Contact Us" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
            />
            <OurOffices/>
            <ContactFormArea/>
        </Layout>
    );
};
ContactUsPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default ContactUsPage;





