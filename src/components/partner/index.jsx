import React from 'react'
import {GatsbyImage, getImage } from "gatsby-plugin-image";
const PartnerItem = ({img}) => {
    const images = getImage(img);
    return (
        <a href="#!">
            <GatsbyImage image={images} alt=""/>
        </a>
    )
}

export default PartnerItem
