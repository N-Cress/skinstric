import { useState, useEffect } from "react";

export default function CameraTaking( {canvasRef, videoRef} ) {
    const [image, setImage] = useState(null);

    useEffect(() => {
        videoRef.current.srcObject = stream;
    })

    const takePicture = () => {
        if (videoRef.current && canvasRef.current) {
          const canvas = canvasRef.current;
          const context = canvas.getContext("2d");
    
          // Set canvas size to match video
          canvas.width = videoRef.current.videoWidth;
          canvas.height = videoRef.current.videoHeight;
    
          // Draw the current frame from the video onto the canvas
          context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    
          // Convert canvas image to Base64
          const imageData = canvas.toDataURL("image/png");
          setImage(imageData);
        }
      };
    return (
        <div>
        <h2>Camera Capture</h2>
        
        {/* Live Video Stream */}
        <video ref={videoRef} autoPlay playsInline style={{ width: "100%", maxWidth: "500px" }} />
  
        {/* Hidden Canvas to Capture Image */}
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
    )
}