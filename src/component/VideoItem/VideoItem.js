import React, { Component } from "react";
import "./VideoItem.css"
import {Grid,Paper,Typography} from "@material-ui/core";
export default class VideoItem extends Component {
  render() {
      const {image,channel,title,views,timestamp,description}=this.props;
    return (
      <div className="videoItem">
        <Grid item xs={12}>
            <Paper style={{display:'flex',alignItems:'center'}}>
                <img style={{width:'168px',height:'94px'}} src={image}/>
                <Typography variant="subtitle1">{title}</Typography>
            </Paper>
        </Grid>
      </div>
    );
  }
}
