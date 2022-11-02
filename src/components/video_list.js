import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        console.log(props.onVideoSelect);
        return <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video} />
    });
    return (
        <ul className="col-md-4 list-group">
            <li>{videoItems}</li>
        </ul>
    );
};

export default VideoList;