import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import SearchPage from "./containers/SearchPage/SearchPage"
import VideoPage from "./containers/VideoPage/VideoPage"
import "./App.css";
import RecommendedVideos from "./component/RecommendVideos/RecommendedVideos";

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      visibleSideBar: false,
      temp:"",
    };
  }
  handleClickMenu =()=>{
    console.log('aaaaaaaaaa');
    this.setState({
      visibleSideBar: !this.state.visibleSideBar,
    });
  }
  handleSearch =()=>{
    console.log('aaaaaaaaaa');
    this.setState({
      temp: "",
    });
  }
  render() {
    const {visibleSideBar}=this.state;
    return (
      <div className="app">
        <Router>
          <Header handleSearch={this.handleSearch}></Header>
          <Switch>
            <Route exact path="/search">
            <div className="app-page">
               <Sidebar></Sidebar>
                <SearchPage></SearchPage>
              </div>
            </Route>
            <Route path="/video/">
              {/* <div className="app-page"> */}
                {/* <Sidebar></Sidebar> */}
                <VideoPage></VideoPage>
              {/* </div> */}
            </Route>
            <Route path="/">
              <div className="app-page">
                <Sidebar></Sidebar>
                <RecommendedVideos></RecommendedVideos>
              </div>
            </Route>
            
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
