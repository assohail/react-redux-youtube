import _ from 'lodash';
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
        
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('ethereum');
    }

    videoSearch(term) {
        YTSearch({key: API_Key,  term: term}, (videos) => { 
            console.log('YTS');
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            console.log('selectedVideo:');
            console.log(selectedVideo);
        });
    }

    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        
        return ( 
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
            </div>
        )
    }
    
}

ReactDOM.render(<App />, document.querySelector('.container'));