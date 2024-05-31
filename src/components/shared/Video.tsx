"use client"
import { useEffect, useRef } from "react";

const Video = ({src, speed, autoPlay} : {src : string, speed: number, autoPlay: boolean}) => {
  const videoRef = useRef<HTMLVideoElement>(null); // Type the ref

  useEffect(() => {
    if (videoRef.current) {
      // Attempt to set playback rate using native methods (preferred)
      if (typeof videoRef.current.playbackRate !== "undefined") {
        videoRef.current.playbackRate = speed;
      } else {
        console.warn(
          "Native playbackRate not supported. Polyfill not needed in Next.js 14."
        );
      }
    }
  }, [speed, videoRef]); // Update effect when playbackRate or videoRef changes

  return (
    <section className="relative w-full h-full">
      <video
        ref={videoRef}
        autoPlay={autoPlay}
        muted
        loop
        id="video"
        className="object-cover w-full h-full"
      >
        <source src={src} type="video/mp4" id="video" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Video;
