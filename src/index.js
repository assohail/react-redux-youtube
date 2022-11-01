import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_Key = 'AIzaSyAbFrX5yPRq0ZM9L-QPwgB64etoTNP4fyo';



class App extends Component {
    constructor(props){
        super(props);
        
        this.state = { videos: []};

        YTSearch({key: API_Key,  term: 'surfboards'}, (videos) => { 
            console.log(videos);
            this.setState({videos: videos});
        });
        
    }

    render(){
        return ( 
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[1]}/>
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
    
}

ReactDOM.render(<App />, document.querySelector('.container'));