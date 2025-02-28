import { PiApertureFill } from "react-icons/pi";
import { PiDiamond } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";

export default function CameraLoading() {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    startCamera();
    async function startCamera() {
      try {
        console.log("Starting camera...");
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          console.log("Camera started successfully!");
          setLoading(false); // ✅ Camera is ready
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const takePicture = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      setImage(canvas.toDataURL("image/png"));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full pl-8 pr-8">
      {/* Live Video Stream (Visible when ready) */}
      <video 
        ref={videoRef} 
        autoPlay 
        playsInline 
        style={{ display: loading ? "none" : "block", width: "100%", maxWidth: "500px" }} 
      />

      {/* Hidden Canvas for Capturing Image */}
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {loading ? (
        <>
          <div className="mb-8 dashBorder-sm-moving flex items-center flex-col text-center justify-center">
            <div className="flex flex-col items-center unrotate-anim">
              <PiApertureFill className="font-bold border-circle unrotate" size={140} />
              <div className="pt-4">SETTING UP CAMERA...</div>
            </div>
          </div>
          <div className="mt-8 text-xs">TO GET BETTER RESULTS MAKE SURE TO HAVE</div>
          <div className="flex text-xs mt-2">
            <div className="flex items-center justify-center">
              <PiDiamond className="mr-2" />
              <div>NEUTRAL EXPRESSION</div>
            </div>
            <div className="pl-4 flex items-center justify-center">
              <PiDiamond className="mr-2" />
              <div>FRONTAL POSE</div>
            </div>
            <div className="pl-4 flex items-center justify-center">
              <PiDiamond className="mr-2" />
              <div>ADEQUATE LIGHTING</div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <button onClick={takePicture}>Take Picture</button>

          {/* Show Captured Image */}
          {image && (
            <div>
              <h3>Captured Image</h3>
              <img src={image} alt="Captured" style={{ width: "100%", maxWidth: "500px" }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
