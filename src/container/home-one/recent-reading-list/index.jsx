import React from 'react'
import Swiper, { SwiperSlide } from "@components/swiper";
import SingleRecentReading from '../../../components/single-recent-reading'

const RecentReadingList = () => {
    return (
        <div className="recent-reading-list-area section-space--pb_80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="recent-reading-header">
                            <div className="section-title">
                                <h3>Recent Reading List</h3>
                            </div>
                            <div className="recent-reading-slider-navigation mt-2 mb-2">
                                <div className="recent-reading-button-prev navigation-button"><i className="icofont-long-arrow-left"></i></div>
                                <div className="recent-reading-button-next navigation-button"><i className="icofont-long-arrow-right"></i></div>
                            </div>
                            <div className="recent-article-date">
                                <span>View by Date</span> <a className="date-button" href="#"><i className="icofont-ui-calendar"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                        
                <Swiper
                    layout={{
                        nav: "trending-topic-slider-navigation",
                        dots: "trending-topic-dots-style",
                    }}
                    navigation={{
                        nextEl: ".trending-topic-button-next",
                        prevEl: ".trending-topic-button-prev"
                    }}
                    slidesPerView={3}
                    spaceBetween={35}
                >
                    <SwiperSlide >
                        <SingleRecentReading/>
                    </SwiperSlide>
                                
                </Swiper>
            </div>
        </div>
    )
}

export default RecentReadingList
