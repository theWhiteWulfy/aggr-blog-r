import React from 'react'
import { useState } from "react";
import Video from "@components/shared/video";
import {GatsbyImage, getImage } from "gatsby-plugin-image";
import { Col, Container, Row } from 'react-bootstrap'
import { useStaticQuery, graphql} from "gatsby";
import {
    AboutVideoArea,

    SinglePopupWrap,
    HtPopupVideo,
    VideoButtonTwo,
    VideoPlayIcon
    
} from './style'

const AboutUsVideoArea = () => {

    const aboutUsVideoQuery = useStaticQuery(graphql`
        query AboutUsVideoQuery {
            aboutUsJson(id: {eq: "about-us-pages"}) {
                id
                about_us_video {
                    video_link
                    about_video_bg {
                        childrenImageSharp {
                            gatsbyImageData(quality: 100)
                        }
                    }
                }
            }
        }
    `)

    const {
        about_us_video: { video_link, about_video_bg },
    } = aboutUsVideoQuery.aboutUsJson;
    
    const image = getImage(about_video_bg.childrenImageSharp[0]);

    
    // Video Modal Popup
    
    let video_arr, video_id, video_channel;
    if(video_link){
        video_arr = video_link.split('=', -1);
        video_id = video_arr[1];
        video_channel = video_link.split(".")[1];
    }
    const [isOpen, setOpen] = useState(false);

    return (
        <AboutVideoArea>
            <Container>
                <Row>
                    <Col>
                        <div className="video-link mt-30">
                            <SinglePopupWrap>
                                <GatsbyImage image={image} alt=""/>
                                <HtPopupVideo>
                                    <VideoButtonTwo>
                                        <div className="video-play"
                                            onClick={() => setOpen(true)}
                                            role="button"
                                            tabIndex="0"
                                        >
                                            <VideoPlayIcon></VideoPlayIcon>
                                        </div>
                                    </VideoButtonTwo>
                                </HtPopupVideo>
                            </SinglePopupWrap>
                        </div>
                        <Video
                            channel={video_channel}
                            videoId={video_id}
                            isOpen={isOpen}
                            setOpen={setOpen}
                        />
                    </Col>
                </Row>
            </Container>
        </AboutVideoArea>
    )
}

export default AboutUsVideoArea
