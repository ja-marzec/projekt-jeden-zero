"use client";

import ReactAudioPlayer from "react-audio-player";

export const AudioPlayer = ({ src }: { src: string }) => {
  return <ReactAudioPlayer src={src} autoPlay controls />;
};
