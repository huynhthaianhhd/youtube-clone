import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import youtube from "../../api/youtube";
import VideoDetail from "../../component/VideoDetail/VideoDetail";
import VideoList from "../../component/VideoList/VideoList";
import VideoItem from "../../component/VideoItem/VideoItem";
export default class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoDetail: {},
      listVideosSearch: [],
    };
  }
  componentDidMount = () => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get("v");
    this.getVideoDetail(foo);
  };
  getVideoDetail = async (videoId) => {
    const response = await youtube.get("videos", {
      params: {
        part: "snippet",
        key: "AIzaSyC6RA_V3i52oGJMZFKn1kj9xamzt0FGxRg",
        id: videoId,
      },
    });
    let resultVideo = response.data.items[0];
    console.log('aa',resultVideo.snippet.tag);
    if (!resultVideo.snippet.tags[0]){
      this.getResults(resultVideo.snippet.title);
    } 
    else this.getResults(resultVideo.snippet.tags[0]);
    this.setState({
      videoDetail: {
        id: resultVideo.id,
        title: resultVideo.snippet.title,
        description: resultVideo.snippet.description,
        image: resultVideo.snippet.thumbnails.high.url,
        tag: resultVideo.snippet.title,
        timestamp: resultVideo.snippet.publishedAt,
      },
    });
  };
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
    console.log("22222222", responseVideo.data.items);
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
    const { listVideosSearch } = this.state;
    return (
      <div>
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={0}>
              <Grid item xs={8}>
                <VideoDetail videoDetail={this.state.videoDetail}></VideoDetail>
              </Grid>
              <Grid item xs={4}>
                <div style={{padding:"24px 24px 0px 0px"}}>
                {listVideosSearch.map((e, index) => {
                  return (
                      <VideoItem
                        key={index}
                        image={e.snippet.thumbnails.high.url}
                        channel={e.snippet.channelTitle}
                        title={e.snippet.title}
                        views={e.viewCount}
                        timestamp={e.snippet.publishedAt}
                        description={e.snippet.description}
                      ></VideoItem>
                  );
                })}
                </div>
                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
