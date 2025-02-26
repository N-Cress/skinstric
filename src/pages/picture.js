import { MdPlayArrow } from "react-icons/md";
import { PiApertureFill } from "react-icons/pi";
import { TbPhotoCircle } from "react-icons/tb";
import "./globals.css";
import Link from 'next/link';
import { useState, useEffect } from 'react';

import PictureHomeComponent from "@/components/picture/picturehome";
import CameraLoadingComponent from "@/components/picture/cameraLoading";
import CameraTakingComponent from "@/components/picture/cameraTaking";

export default function Home() {
    const [status, setStatus] = useState("main");

    const renderContent = (status) => {
      switch(status) {
        case "main":
          return <PictureHomeComponent status={status} setStatus={setStatus}/>;
        case "loading":
          return <CameraLoadingComponent status={status}/>;
        case "camera":
          return <CameraTakingComponent status={status}/>;
      }
    }


    function cameraStart() {
      navigator.MediaDevices
        .getUserMedia({ video: true, audio: false}) 
    }

   

    

  return (
    <main className="w-full h-full">
      {renderContent(status)}
      {status}
    </main>
  );
}
