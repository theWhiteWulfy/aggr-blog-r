import PropTypes from "prop-types";
import theme from "@theme/index-3.js";
import { ThemeProvider } from "@theme/utils";
import { GlobalCSS } from "@assets/css/style";
import "@assets/css/bootstrap.css";
import "@assets/css/gordita-fonts.css"
import "@assets/css/icofont.min.css"
import "@assets/css/modal-video.min.css";
import HeaderThree from "./header/header-three";
import FooterThree from "./footer/footer-three";
const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <HeaderThree/>
            <div className="wrapper">
                <GlobalCSS />
                {children}
            </div>
            <FooterThree/>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
