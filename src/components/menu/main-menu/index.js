import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import { HeaderNavigationArea, Navbar, Navitem } from "./style";

const MainMenu = ({ allmenuData }) => {
    const menuarr = allmenuData;
    return (
        <HeaderNavigationArea>
            <Navbar className="main-menu">
                {menuarr.map((menu) => {
                    const hasSubmenu = menu.node.isSubmenu ? true : false;
                    const submenu = menu.node.submenu;
                    return (
                        <Navitem
                            key={`menu-${menu.node.id}`}
                            className={`${hasSubmenu ? "has-submenu" : ""}`}
                        >
                            <Link activeClassName="active" to={menu.node.link}>
                                {menu.node.text}
                            </Link>
                            {submenu && (
                                <ul className="submenu-nav">
                                    {submenu.map((submenu, i) => {
                                        return (
                                            <li key={`submenu${i}`}>
                                                <Link to={submenu.link}>
                                                    {submenu.text}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </Navitem>
                    );
                })}
            </Navbar>
        </HeaderNavigationArea>
    );
};

MainMenu.propTypes = {
    allmenuData: PropTypes.array,
};

export default MainMenu;
