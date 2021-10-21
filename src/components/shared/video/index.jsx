import React from "react";
import PropTypes from "prop-types";
import ModalVideo from "react-modal-video";

const Video = ({channel, isOpen, videoId, setOpen }) => {
    return (
        <ModalVideo
            channel={channel}
            autoplay
            isOpen={isOpen}
            videoId={videoId}
            onClose={() => setOpen(false)}
        />
    );
};

Video.propTypes = {
    isOpen: PropTypes.bool,
    videoId: PropTypes.string,
    setOpen: PropTypes.func,
};

export default Video;
