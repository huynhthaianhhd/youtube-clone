import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css"
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import moment from 'moment';
export default class VideoCard extends Component {
  formatTime = (timePublish) => {
    let strShow = "";
    let a = moment(timePublish);
    let b = moment();
    if (b.diff(a, "years") > 0) {
      strShow = b.diff(a, "years") + " years ago";
    } else {
      if (b.diff(a, "months") > 0)
        strShow = b.diff(a, "months") + " months ago";
      else {
        if (b.diff(a, "weeks") > 0) strShow = b.diff(a, "weeks") + " weeks ago";
        else {
          if (b.diff(a, "days") > 0) strShow = b.diff(a, "days") + " days ago";
          else {
            if (b.diff(a, "hours") > 0)
              strShow = b.diff(a, "hours") + " hours ago";
            else {
              if (b.diff(a, "minutes") > 0)
                strShow = b.diff(a, "minutes") + " minutes ago";
            }
          }
        }
      }
    }
    return strShow;
  };
  formatTitle=(title)=>{
    return title.split("&quot;").join(`"`);
  }
  render() {
      const {image,channelImage,channelName,title,views,timestamp} = this.props;
    return (
      <div className="videoCard">
        <img className="videoCard-thumbnail" src={image} alt=""></img>
        <div className="videoCard-infor">
          <Avatar
            src={channelImage}
            alt={channelName}
            className="videoCard-avatar"
          ></Avatar>
          <div className="videoCard-text">
            <h4>{this.formatTitle(title)}</h4>
            <p>{channelName}<CheckCircleIcon className="icon"/></p>
            <p>
            {parseInt(views).toLocaleString("da-DK")} views • {this.formatTime(timestamp)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
