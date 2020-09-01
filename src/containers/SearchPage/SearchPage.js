import React, { Component } from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "../../component/ChannelRow/ChannelRow";
import VideoRow from "../../component/VideoRow/VideoRow";
import { BrowserRouter as Router, Switch, Route, Link,withRouter } from "react-router-dom";
import youtube from "../../api/youtube";
const API_KEY = process.env.API_KEY || "123444";
export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listVideosSearch: [],
    };
  }
  componentDidMount() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get("searchTerm");
    console.log("1234",search);
    this.getResults(foo);
  }
  getResults = async (searchTerm) => {
    const responseVideo = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        type:'video',
        key: "AIzaSyC6RA_V3i52oGJMZFKn1kj9xamzt0FGxRg",
        q: searchTerm,
      },
    });
    let listVideosSearch = [],
      listVideoResults = responseVideo.data.items,
      listIdVideo = [];
    for (let e of listVideoResults) {
      listIdVideo.push(e.id.videoId);
    }
    const response = await youtube.get("videos", {
      params: {
        part: 'statistics',
        key: 'AIzaSyC6RA_V3i52oGJMZFKn1kj9xamzt0FGxRg',
        id: listIdVideo.join(','),
      },
    });
    let listViewResults = response.data.items;
    console.log(response);
    for (let e of listVideoResults) {
      listVideosSearch.push(e);
    }
    for (let i=0;i<listVideoResults.length;i++){
      listVideosSearch[i].viewCount=listViewResults[i].statistics.viewCount;
    }
    this.setState({
      listVideosSearch: listVideosSearch,
    });
   
  };
  render() {
    const { listVideosSearch, listChannelSearch } = this.state;
    return (
      <div className="searchPage">
        <div className="searchPage-filter">
          <TuneOutlinedIcon></TuneOutlinedIcon>
          <h2>FILTERS</h2>
        </div>
        <hr></hr>
        {/* <ChannelRow
          image="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/100679414_2204239683055221_4874761625824919552_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=dnk5RZjqx9UAX9dp9Ul&_nc_ht=scontent-xsp1-1.xx&oh=7ac713bac281078c926625eb9b4fb8dd&oe=5F66573C"
          channel="Huỳnh Thái Anh"
          verified
          subs="380k"
          noOfVideos={382}
          description="THÔNG TIN LIÊN HỆ
          © Nếu video có vấn đề về bản quyền , xin vui lòng liên hệ để tôi gỡ bỏ. Xin cảm ơn!
          Email: huynhthaianhhd@gmail.com
          Facebook: https://www.facebook.com/thaianh.hd/
          Google+: https://goo.gl/xTmscV"
        ></ChannelRow> */}

        
        <hr></hr>
        {listVideosSearch.map((e,index) => {
          return (
            <Link className="link" to={`/video/?v=${e.id.videoId}`}><VideoRow key={index}
            image={e.snippet.thumbnails.high.url}
            channel={e.snippet.channelTitle}
            title={e.snippet.title}
            views={e.viewCount}
            timestamp={e.snippet.publishedAt}
            description={e.snippet.description}
          ></VideoRow></Link>
            
          );
        })}
      </div>
    );
  }
}
