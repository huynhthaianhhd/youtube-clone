import React, { Component } from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
export default class ChannelRow extends Component {
  render() {
    const {
      image,
      channel,
      subs,
      noOfVideos,
      description,
      verified,
    } = this.props;
    return (
      <div className="channelRow">
          <div className="channelRow-image">
          <Avatar className="channelRow-avatar" src={image} alt={channel}></Avatar>
          </div>
        
        <div className="channelRow-text">
          <h4>
            {channel}
            {verified && <CheckCircleIcon className="icon"/>}
          </h4>
          <p>
            {subs} subscribers • {noOfVideos} videos
          </p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
