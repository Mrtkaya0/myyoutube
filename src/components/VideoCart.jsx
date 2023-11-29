import React, { useState } from "react";
import millify from "millify";
import { useNavigate } from "react-router-dom";

React

const VideoCard = ({ video,type }) => {


    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate ()

    return (
        <div
        onClick={() => navigate(`/watch/${video.videoId}`)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={`cursor-pointer ${type && "row" }`}

        >
            {/* video resim kısmı  */}
            <div>
                <img
                    className={`rounded-lg w-full h-full`}

                    // mouse üzerine geldiğinde
                    src={
                        isHover && video.richThumbnail
                        // hover olunca oynar video varsa bu basılır
                        ? video.richThumbnail[0].url
                        // hover olunca oynar video yoksa bu basılır
                        : video.thumbnail[video.thumbnail.length - 1].url
                    }
                    alt={video?.title || "Video Resmi"}

                />
            </div>
            {/* resim alt kısım detay alanı */}
            <div className="flex gap- mt-5">
                <img
                    className={`w-14 h-14 rounded-full 
                    ${type && "hidden" }`}
                    src={video.channelThumbnail[0]?.url} />
                <div>
                    <h4 className={`font-bold
                    ${type && "truncate" }`}>{video?.title} </h4>
                    <p>{video.channelTitle}</p>
                    <div className="flex gap-2">
                        <p>{millify(video.viewCount)}görüntülenme</p>
                        <p>{video.publishedTimeText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default VideoCard
