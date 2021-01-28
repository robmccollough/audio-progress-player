import React from "react";
import { useAudioPlayer, useAudioPosition } from "react-use-audio-player";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import IconButton from "@material-ui/core/IconButton";
import "./styles.css";

const Player = (props) => {
  const { src, length } = props;
  let radius = 25,
    stroke = 10,
    strokec = "rgba(0,0,0,0.54)";

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
      <svg height={2 * radius + 2 * stroke} width={2 * radius + 2 * stroke}>
        <circle
          cx={radius + stroke}
          cy={radius + stroke}
          r={radius}
          stroke={strokec}
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
