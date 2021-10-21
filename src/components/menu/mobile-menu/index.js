import { Link } from "gatsby";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { MobileMenuContent, Navbar, MobileNavitem } from "./style";
import {
    getClosest,
    getSiblings,
    slideToggle,
    slideUp,
} from "../../../utils/mobile-nav-utils";

const MobileNavMenu = ({ MobilemenuData }) => {
    const MobileMenuArr = MobilemenuData;

    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-expand") ||
            target.classList.contains("menu-expand")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    //console.log(child);
                    if (child.nodeName === "UL") {
                        slideUp(child, 500);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 500);
                }
            });
        }
    };

    return (
        <MobileMenuContent>
            <Navbar className="site-mobile-menu">
                <ul>
                    {MobileMenuArr.map((menu) => {
                        const hasSubmenu = menu.node.isSubmenu ? true : false;
                        const submenu = menu.node.submenu;
                        return (
                            <MobileNavitem
                                key={`menu-${menu.node.id}`}
                                className={`${
                                    hasSubmenu ? "has-submenu-dropdown" : ""
                                }`}
                            >
                                <Link
                                    activeClassName="active"
                                    to={menu.node.link}
                                >
                                    {menu.node.text}
                                </Link>
                                {submenu && (
                                    <Fragment>
                                        <button
                                            className="menu-toggle menu-expand"
                                            onClick={onClickHandler}
                                            onKeyDown={onClickHandler}
                                        >
                                            <i className="icofont-rounded-down"></i>
                                        </button>
                                        <ul className="submenu-nav">
                                            {submenu.map((submenu, i) => {
                                                return (
                                                    <MobileNavitem
                                                        key={`submenu${i}`}
                                                    >
                                                        <Link to={submenu.link}>
                                                            {submenu.text}
                                                        </Link>
                                                    </MobileNavitem>
                                                );
                                            })}
                                        </ul>
                                    </Fragment>
                                )}
                            </MobileNavitem>
                        );
                    })}
                </ul>
            </Navbar>
        </MobileMenuContent>
    );
};

MobileNavMenu.propTypes = {
    MobilemenuData: PropTypes.array,
};

export default MobileNavMenu;
