import React from "react";
import { FaHeart, FaMusic } from 'react-icons/fa';

const VideoInfo = () => {
    return (
        <div className="flex flex-row">
            <img 
                className="w-[50px] h-[50px] rounded-full" 
                src="" 
                alt="avatar" 
            />
            <div className="ml-3 min-w-[80%]">
                <div>
                    <a href="#" className="text-xl font-bold hover:underline" >TikTok Account</a>
                    <a href="#" className="text-xl" >Description</a>
                </div>
                <div>
                    Subscribe to see more contents!
                </div>
                <div className="flex flex-row items-center">
                    <FaMusic />
                    <span className="ml-3">playing music...</span>
                </div>
            </div>
            <div>
                {" "}
                <button className="p-1 pl-3 pr-3 border-2 border-red-400 text-red-400 rounded-md">Follow</button>
            </div>
        </div>
    );
};
const VideoContent = () => {
    return (
        <div className="flex flex-row">
            <video 
                className="w-[80%] max-h-[600px] ml-[50px] rounded-md mt-4"
                src="https://v16-webapp.tiktok.com/97a37d38528bd21aaac86712664bd710/6215539c/video/tos/useast2a/tos-useast2a-pve-0037-aiso/580c2cab9448404d9402a8d81487d842/?a=1988&br=5154&bt=2577&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7TheXKUDXq&l=2022022215201501024514420014EA1D00&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzlwbGY6ZjtrOzMzZjgzM0ApZjNoOjlnOjxnNzpnZDZpaWdyZnNqcjRfYy9gLS1kL2Nzc18vXmMzMjAzLV5eMS0uYTI6Yw%3D%3D&vl=&vr="
                loop
            />
            <div>
                <div>
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200">
                        <FaHeart />
                    </div>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

function Video() {
    return (
        <div className="max-w-[500px]">
            <VideoInfo />
            <VideoContent />
        </div>
    );
};

export default Video;