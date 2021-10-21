import React from 'react'
import {
    StayInTouchArea,
    StayInTouchBox,
    SingleTouchCol,

    SingleTouch,
    TouchSocailIcon,
    TouchTitle


} from './style'

const StayInTouchs = () => {
    return (
        <StayInTouchArea>
            <div className="section-title">
                <h3>Stay In Touch</h3>
            </div>
            <StayInTouchBox>
                <SingleTouchCol>
                    <SingleTouch className="facebook" href="#!">
                        <TouchSocailIcon className="socail-icon">
                            <i className="icofont-facebook"></i>
                        </TouchSocailIcon>
                        <TouchTitle>5,685K</TouchTitle>
                    </SingleTouch>
                </SingleTouchCol>
                <SingleTouchCol>
                    <SingleTouch className="twitter" href="#!">
                        <TouchSocailIcon className="socail-icon">
                            <i className="icofont-twitter"></i>
                        </TouchSocailIcon>
                        <TouchTitle>5,685K</TouchTitle>
                    </SingleTouch>
                </SingleTouchCol>
                <SingleTouchCol>
                    <SingleTouch className="behance" href="#!">
                        <TouchSocailIcon className="socail-icon">
                            <i className="icofont-behance"></i>
                        </TouchSocailIcon>
                        <TouchTitle>5,685K</TouchTitle>
                    </SingleTouch>
                </SingleTouchCol>
                <SingleTouchCol>
                    <SingleTouch className="youtube-play" href="#!">
                        <TouchSocailIcon className="socail-icon">
                            <i className="icofont-youtube-play"></i>
                        </TouchSocailIcon>
                        <TouchTitle>5,685K</TouchTitle>
                    </SingleTouch>
                </SingleTouchCol>
                <SingleTouchCol>
                    <SingleTouch className="dribbble" href="#!">
                        <TouchSocailIcon className="socail-icon">
                            <i className="icofont-dribbble"></i>
                        </TouchSocailIcon>
                        <TouchTitle>5,685K</TouchTitle>
                    </SingleTouch>
                </SingleTouchCol>
                <SingleTouchCol>
                    <SingleTouch className="linkedin" href="#!">
                        <TouchSocailIcon className="socail-icon">
                            <i className="icofont-linkedin"></i>
                        </TouchSocailIcon>
                        <TouchTitle>5,685K</TouchTitle>
                    </SingleTouch>
                </SingleTouchCol>
                
            </StayInTouchBox>
        </StayInTouchArea>
    )
}

export default StayInTouchs
