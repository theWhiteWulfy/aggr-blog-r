import PropTypes from "prop-types";
import theme from "@theme";
import { ThemeProvider } from "@theme/utils";
import { GlobalCSS } from "@assets/css/style";
import "@assets/css/bootstrap.css";
import "@assets/css/gordita-fonts.css"
import "@assets/css/icofont.min.css"
import "@assets/css/modal-video.min.css";
import Header from "./header/header-one";
import Footer from "./footer/footer-one";
const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <div className="wrapper">
                <GlobalCSS />
                {children}
            </div>
            <Footer/>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
