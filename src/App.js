import React from "react";
import { AudioPlayerProvider } from "react-use-audio-player";
import Player from "./Player.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <AudioPlayerProvider>
        <Player
          src="https://p.scdn.co/mp3-preview/3eb16018c2a700240e9dfb8817b6f2d041f15eb1?cid=774b29d4f13844c495f206cafdad9c86"
          length={3000}
        />
      </AudioPlayerProvider>
    </div>
  );
}
