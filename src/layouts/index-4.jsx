import PropTypes from "prop-types";
import theme from "@theme/index-4.js";
import { ThemeProvider } from "@theme/utils";
import { GlobalCSS } from "@assets/css/style";
import "@assets/css/bootstrap.css";
import "@assets/css/gordita-fonts.css"
import "@assets/css/icofont.min.css"
import "@assets/css/modal-video.min.css";
import HeaderFour from "./header/header-four";
import FooterFour from "./footer/footer-four";
const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <HeaderFour/>
            <div className="wrapper">
                <GlobalCSS />
                {children}
            </div>
            <FooterFour/>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
