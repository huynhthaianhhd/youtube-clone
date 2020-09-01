import React, { Component } from "react";
import "./VideoRow.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import moment from 'moment';
export default class VideoRow extends Component {
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
    const {
      views,
      subs,
      description,
      timestamp,
      channel,
      title,
      image,
    } = this.props;
    return (
      <div className="videoRow">
        <img src={image} alt=""></img>
        <div className="videoRow-text">
          <h3>{this.formatTitle(title)}</h3>
          <p className="videoRow-headline">
            {channel} • {parseInt(views).toLocaleString("da-DK")} views •{" "}
            {this.formatTime(timestamp)}
          </p>
          <p className="videoRow-description">{description}</p>
        </div>
      </div>
    );
  }
}
