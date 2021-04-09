import React from "react";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown
} from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img className="footer_albumLogo" src="data:image/jpeg;base64,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"/>
        <div className="footer_songInfo">
            <h4>Yeah!</h4>
            <p>Usher</p>
        </div>
      </div>
      <div className="footer_center">
        <Shuffle className="footer_green" />
        <SkipPrevious className="footer_icon" />
        <PlayCircleOutline fontSize="large" className="footer_icon" />
        <SkipNext className="footer_icon" />
        <Repeat className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay/>
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
