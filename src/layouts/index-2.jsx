import PropTypes from "prop-types";
import theme from "@theme/index-2.js";
import { ThemeProvider } from "@theme/utils";
import { GlobalCSS } from "@assets/css/style";
import "@assets/css/bootstrap.css";
import "@assets/css/gordita-fonts.css"
import "@assets/css/icofont.min.css"
import "@assets/css/modal-video.min.css";
import HeaderTwo from "./header/header-two";
import FooterTwo from "./footer/footer-two";
const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <HeaderTwo HeaderAbsolute/>
            <div className="wrapper">
                <GlobalCSS />
                {children}
            </div>
            <FooterTwo/>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
