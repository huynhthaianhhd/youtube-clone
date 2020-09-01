import React, { Component } from "react";
import HomeIcon from "@material-ui/icons/Home";
import "./VideoDetail.css"
import { Paper, Typography } from "@material-ui/core";
export default class VideoDetail extends Component {
  componentDidMount(){
    // const { videoDetail } = this.props;
    // console.log('detail',videoDetail);
  }
  render() {
    const { videoDetail } = this.props;
    // console.log('detail',this.props.videoDetail);
    return (
      <div className="videoDetail-video">
        <React.Fragment >
          <Paper elevation={6} style={{  height: "538px" }}>
            <iframe
              frameBorder="0"
              height="100%"
              width="100%"
              title="Video Player"
              src={`https://www.youtube.com/embed/${videoDetail.id}`}
            />
          </Paper>
          <Paper elevation={6} style={{ padding: "15px" }}>
            <Typography variant="subtitle1">{videoDetail.title}</Typography>
            <hr></hr>
            <div className="videoDetail-statistics">
              <Typography variant="subtitle2">
                76.175 lượt xem • 4 thg 8, 2019
              </Typography>
             <div className="videoDetail-icon">
             <Typography className="videoDetail-itemIcon" variant="subtitle2">
                <HomeIcon></HomeIcon>
                2,5N
              </Typography>
              <Typography className="videoDetail-itemIcon" variant="subtitle2">
                <HomeIcon></HomeIcon>
                27
              </Typography>
              <Typography className="videoDetail-itemIcon" variant="subtitle2">
                CHIA SẺ
              </Typography>
              <Typography className="videoDetail-itemIcon" variant="subtitle2">
                LƯU
              </Typography>
              <Typography className="videoDetail-itemIcon" variant="subtitle2">
              <HomeIcon></HomeIcon>
              </Typography>
             </div>
            </div>
          </Paper>
        </React.Fragment>
      </div>
    );
  }
}
