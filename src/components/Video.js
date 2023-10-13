import React from "react";
import { FaMusic } from 'react-icons/fa';

const VideoInfo = () => {
    return (
        <div>
            <img src="" alt="avatar" />
            <div>
                <div>
                    <a href="#">TikTok Account</a>
                    <a href="#">Description</a>
                </div>
                <div>
                    Subscribe to see more contents!
                </div>
                <div>
                    <FaMusic />
                </div>
            </div>
            <div>
                {" "}
                <button>Follow</button>
            </div>
        </div>
    );
};
const VideoContent = () => {
    return (
        <div></div>
    );
};

function Video() {
    return (
        <div>
            <VideoInfo />
            <VideoContent />
        </div>
    );
};

export default Video;