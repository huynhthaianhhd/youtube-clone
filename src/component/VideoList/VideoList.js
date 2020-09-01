import React, { Component } from "react";
import VideoItem from "../VideoItem/VideoItem";
import youtube from "../../api/youtube";
export default class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listVideosSearch: [1],
    };
  }
  componentDidMount() {
    // this.getResults(this.props.tag);
    // console.log('13333333333333',this.props.videoDetail);
  }
  getResults = async (searchTerm) => {
    const responseVideo = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: "AIzaSyC6RA_V3i52oGJMZFKn1kj9xamzt0FGxRg",
        q: searchTerm,
      },
    });
    console.log('22222222',responseVideo.data.items);
    let listVideosSearch = [],
      listVideoResults = responseVideo.data.items,
      listIdVideo = [];
    for (let e of listVideoResults) {
      listIdVideo.push(e.id.videoId);
    }
    const response = await youtube.get("videos", {
      params: {
        part: "statistics",
        key: "AIzaSyC6RA_V3i52oGJMZFKn1kj9xamzt0FGxRg",
        id: listIdVideo.join(","),
      },
    });
    let listViewResults = response.data.items;
    console.log(response);
    for (let e of listVideoResults) {
      listVideosSearch.push(e);
    }
    for (let i = 0; i < listVideoResults.length; i++) {
      listVideosSearch[i].viewCount = listViewResults[i].statistics.viewCount;
    }
    this.setState({
      listVideosSearch: listVideosSearch,
    });
  };
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
