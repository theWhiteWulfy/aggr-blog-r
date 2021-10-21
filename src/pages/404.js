import * as React from "react";
import Layout from "@layout";
import SEO from "@components/seo";
import ErrorArea from "../container/error-404";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" pathname="/" />
        <ErrorArea/>
    </Layout>
);


export default NotFoundPage;
