import React from "react";


const VideoListItem = ({video, onVideoSelect}) => {
    // const video  = props.video; same as above argument 'video'

    const imageUrl = video.snippet.thumbnails.default.url;
    return (<ul>
            <li className="list-group-item" onClick={() => onVideoSelect(video) }>
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imageUrl}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </li>
            </ul>
    )
}

export default VideoListItem;