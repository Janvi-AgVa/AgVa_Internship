import React, { useState, useEffect, useRef } from "react";
import video from "/home/agva/Desktop/JanviGupta/scroll/video/src/video.mp4";
import sample from "/home/agva/Desktop/JanviGupta/scroll/video/src/sample.mp4";
import small from "/home/agva/Desktop/JanviGupta/scroll/video/src/small.mp4";
import LOGO from "/home/agva/Desktop/JanviGupta/scroll/video/src/agva-healthcare-removebg-preview.png";
function Page() {
  const videoRef = useRef(null);
  const Ref = useRef(null);
  const videoRef3 = useRef(null);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    //auto play on scroll
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    };

    let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };
    let handlePlay2 = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Ref.current.play();
        } else {
          Ref.current.pause();
        }
      });
    };
    let handlePlay3 = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef3.current.play();
        } else {
          videoRef3.current.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);
    let observer2 = new IntersectionObserver(handlePlay2, options);
    let observer3 = new IntersectionObserver(handlePlay3, options);

    observer.observe(videoRef.current);
    observer2.observe(Ref.current);
    observer3.observe(videoRef3.current);

    //dynamic resizing.
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

  //auto play on scroll
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <video
        ref={Ref}
        src={sample}
        height={windowSize.height}
        width={windowSize.width}
        
        loop
      />
      <video
        ref={videoRef}
        src={video}
        height={windowSize.height}
        width={windowSize.width}
        loop
      />
      <video
        ref={videoRef3}
        src={small}
        height={windowSize.height}
        width={windowSize.width}
        loop
      />
      <image src={LOGO} className="logo"/>
    </>
  );
}
export default Page;
