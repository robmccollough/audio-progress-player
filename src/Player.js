import React from "react";
import { useAudioPlayer, useAudioPosition } from "react-use-audio-player";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import IconButton from "@material-ui/core/IconButton";
import "./styles.css";

const Player = (props) => {
  const { src, length } = props;
  let radius = 40;

  const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
    src:
      "https://p.scdn.co/mp3-preview/4839b070015ab7d6de9fec1756e1f3096d908fba?cid=774b29d4f13844c495f206cafdad9c86",
    format: "mp3",
    autoplay: false,
    onend: () => console.log("sound has ended!")
  });

  const { percentComplete, duration, seek } = useAudioPosition({
    highRefreshRate: true
  });
  let circ = 2 * Math.PI * radius;
  let dashOffset = circ * (1 - percentComplete / 100);
  return (
    <div className="player">
      <svg height="100" width="100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="black"
          strokeDasharray={2 * Math.PI * radius}
          strokeDashoffset={dashOffset}
          strokeWidth="10"
          fill="none"
        />
      </svg>
      <IconButton onClick={togglePlayPause}>
        {playing ? (
          <PauseCircleFilledIcon fontSize="large" />
        ) : (
          <PlayCircleFilledIcon fontSize="large" />
        )}
      </IconButton>
    </div>
  );
};

export default Player;
