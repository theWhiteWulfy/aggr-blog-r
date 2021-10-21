import PropTypes from "prop-types";
import theme from "@theme/index-5.js";
import { ThemeProvider } from "@theme/utils";
import { GlobalCSS } from "@assets/css/style";
import "@assets/css/bootstrap.css";
import "@assets/css/gordita-fonts.css"
import "@assets/css/icofont.min.css"
import "@assets/css/modal-video.min.css";
import HeaderFive from "./header/header-five";
import FooterFive from "./footer/footer-five";
const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <HeaderFive/>
            <div className="wrapper">
                <GlobalCSS />
                {children}
            </div>
            <FooterFive/>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
