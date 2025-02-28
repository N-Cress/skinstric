import { useState, useEffect, useRef } from "react";
import PictureHomeComponent from "@/components/picture/picturehome";
import CameraLoadingComponent from "@/components/picture/cameraLoading";
import "./globals.css";

export default function Home() {
  const [status, setStatus] = useState("main"); // Possible values: "main", "loading", "camera"

  const renderContent = (status) => {
    switch (status) {
      case "main":
        return <PictureHomeComponent status={status} setStatus={setStatus} />;
      case "loading":
        return <CameraLoadingComponent status={status} setStatus={setStatus}  />;
      case "camera":
        return (
          <div>
            <h2>Camera Capture</h2>
            
            {/* Live Video Stream */}
            <video ref={videoRef} autoPlay playsInline style={{ width: "100%", maxWidth: "500px" }} />
            
            {/* Hidden Canvas for Capturing Image */}
            <canvas ref={canvasRef} style={{ display: "none" }} />
            
            <button onClick={takePicture}>Take Picture</button>

            {/* Show Captured Image */}
            {image && (
              <div>
                <h3>Captured Image</h3>
                <img src={image} alt="Captured" style={{ width: "100%", maxWidth: "500px" }} />
              </div>
            )}
          </div>
        );
      default:
        return <p>Unknown status</p>;
    }
  };

  return (
    <main className="w-full h-full">
      {renderContent(status)}
    </main>
  );
}
