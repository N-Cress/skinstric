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
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setLoading(false);
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
      console.log("attempting to take!")
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      setImage(canvas.toDataURL("image/png"));
    }
  };

  return (
    <div className={`relative flex flex-col items-center justify-center w-full h-full`}>
      {!image && (
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          className={`absolute top-0 left-0 w-full h-full object-cover ${loading ? "hidden" : "block"}`} 
        />
      )
      }
  
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
          <button className="fixed bg-sky-50 bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg" onClick={takePicture}>
            Take Picture
          </button>
          {image && (
            <div>
              <h3>Captured Image</h3>
              <img src={image} alt="Captured" className="w-full max-w-md mx-auto" />
            </div>
          )}
        </div>
      )}
    </div>
  );
  
}
