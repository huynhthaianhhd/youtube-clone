import React, { Component } from "react";
import "./RecommendedVideos.css";
import VideoCard from "../VideoCard/VideoCard";
import youtube from "../../api/youtube";
export default class RecommendedVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listVideos: [],
    };
  }
  componentDidMount() {
    this.getResults();
  }
  getResults = async () => {
    const responseVideo = await youtube.get("videos", {
      params: {
        part: "snippet",
        maxResults: 8,
        key: "AIzaSyC6RA_V3i52oGJMZFKn1kj9xamzt0FGxRg",
        regionCode: 'VN',
        chart:'mostPopular'
      },
    });
    
    let listVideos = [],
      listVideoResults = responseVideo.data.items,
      listIdVideo = [];
    for (let e of listVideoResults) {
      listIdVideo.push(e.id);
    }
    const response = await youtube.get("videos", {
      params: {
        part: 'statistics',
        key: 'AIzaSyC6RA_V3i52oGJMZFKn1kj9xamzt0FGxRg',
        id: listIdVideo.join(','),
      },
    });
    console.log(response.data);
    let listViewResults = response.data.items;

    for (let e of listVideoResults) {
      listVideos.push(e);
    }
    for (let i=0;i<listVideoResults.length;i++){
      listVideos[i].viewCount=listViewResults[i].statistics.viewCount;
    }
    this.setState({
      listVideos: listVideos,
    });
   
  };

  render() {
    const {listVideos}=this.state;
    return (
      <div className="recommendedVideos">
        <h2>Recommended</h2>
        <div className="recommendedVideos-videos">
          {listVideos.map((e) => {
            return (
              <VideoCard key={e.id}
                image={e.snippet.thumbnails.high.url}
                channelImage="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/100679414_2204239683055221_4874761625824919552_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=dnk5RZjqx9UAX9dp9Ul&_nc_ht=scontent-xsp1-1.xx&oh=7ac713bac281078c926625eb9b4fb8dd&oe=5F66573C"
                channelName={e.snippet.channelTitle}
                title={e.snippet.title}
                views={e.viewCount}
                timestamp={e.snippet.publishedAt}
              ></VideoCard>
            );
          })}
        </div>
      </div>
    );
  }
}
