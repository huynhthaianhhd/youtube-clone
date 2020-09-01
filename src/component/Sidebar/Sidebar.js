import React, { Component } from "react";
import "./Sidebar.css";
import SidebarRow from "../SidebarRow/SidebarRow";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
    };
  }
  handleChangeSelected = (title) => {
    this.setState({
      selected: title,
    });
  };
  render() {
    const listRow = [
      { title: "Home", icon: HomeIcon },
      { title: "Trending", icon: WhatshotIcon },
      { title: "Library", icon: VideoLibraryIcon },
      { title: "History", icon: HistoryIcon },
      { title: "Your videos", icon: OndemandVideoIcon },
      { title: "Watch later", icon: WatchLaterIcon },
      { title: "Liked videos", icon: ThumbUpAltOutlinedIcon },
      { title: "Show more", icon: ExpandMoreOutlinedIcon },
    ];

    return (
      <div className="sidebar">
        {listRow.map((e,index) => {
          if (this.state.selected === e.title) {
            return (
              <SidebarRow key={index}
                lightLight={true}
                handleChangeSelected={this.handleChangeSelected}
                Icon={e.icon}
                title={e.title}
              ></SidebarRow>
            );
          }
          return (
            <SidebarRow key={index}
              handleChangeSelected={this.handleChangeSelected}
              Icon={e.icon}
              title={e.title}
            ></SidebarRow>
          );
        })}
        <hr></hr>
      </div>
    );
  }
}
