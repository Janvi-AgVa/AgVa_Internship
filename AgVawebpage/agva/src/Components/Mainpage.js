import React, { useState, useEffect, useRef } from "react";
import v1 from "/home/agva/Desktop/JanviGupta/AgVawebpage/agva/src/videos/v1.mp4";
import v2 from "/home/agva/Desktop/JanviGupta/AgVawebpage/agva/src/videos/v2.mov";
import v3 from "/home/agva/Desktop/JanviGupta/AgVawebpage/agva/src/videos/v3.mov";
import v4 from "/home/agva/Desktop/JanviGupta/AgVawebpage/agva/src/videos/v4.mp4";
import v5 from "/home/agva/Desktop/JanviGupta/AgVawebpage/agva/src/videos/v5.mov";
import v6 from "/home/agva/Desktop/JanviGupta/AgVawebpage/agva/src/videos/v6.mp4";
import v7 from "/home/agva/Desktop/JanviGupta/AgVawebpage/agva/src/videos/v7.jpg";
import v8 from "/home/agva/Desktop/JanviGupta/AgVawebpage/agva/src/videos/v8.jpg";
import v9 from "/home/agva/Desktop/JanviGupta/AgVawebpage/agva/src/videos/v9.png";
import sample from "/home/agva/Desktop/JanviGupta/AgVawebpage/agva/src/videos/sample.mp4"
function Mainpage() {
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);

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
          Ref1.current.play();
        } else {
          Ref1.current.pause();
        }
      });
    };

    let handlePlay2 = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Ref2.current.play();
        } else {
          Ref2.current.pause();
        }
      });
    };

    let handlePlay3 = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Ref3.current.play();
        } else {
          Ref3.current.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);
    let observer2 = new IntersectionObserver(handlePlay2, options);
    let observer3 = new IntersectionObserver(handlePlay3, options);

    observer.observe(Ref1.current);
    observer2.observe(Ref2.current);
    observer3.observe(Ref3.current);

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
        ref={Ref1}
        src={sample}
        height={windowSize.height}
        width={windowSize.width}
        loop autoPlay muted
      />

      <video
        ref={Ref2}
        src={v3}
        height={windowSize.height}
        width={windowSize.width}
        loop autoPlay muted
      />

      <video
        ref={Ref3}
        src={v5}
        height={windowSize.height}
        width={windowSize.width}
        loop autoPlay muted
      />

      <img
        src={v7}
        alt=""
        height={windowSize.height}
        width={windowSize.width}
      ></img>
    </>
  );
}

export default Mainpage;
