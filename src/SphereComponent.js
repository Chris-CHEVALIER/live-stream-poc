import React, { useEffect } from 'react'
import PhotoSphereViewer from "photo-sphere-viewer";
import Hls from "hls.js";
import "../node_modules/photo-sphere-viewer/dist/photo-sphere-viewer.min.css";

export default function SphereComponent(props) {
    const sphereElementRef = React.createRef();
    const { src } = props;
  
    useEffect(() => {
        var video = document.createElement('video');
        if(Hls.isSupported()) {
          var hls = new Hls();
          hls.loadSource(src);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED,function()
          {
              video.play();
          });
      }
      else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = src;
          video.addEventListener('canplay',function() {
              video.play();
          });
      }
      const shperePlayerInstance = PhotoSphereViewer({
        container: sphereElementRef.current,
        panorama: video,
      });
      return () => {
        shperePlayerInstance.destroy();
      };
    }, [src]);
    return (
      <div style={{ width: "100%", height: "800px"}} ref={sphereElementRef}/>
    );
}