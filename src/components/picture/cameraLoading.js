import { PiApertureFill } from "react-icons/pi";
import { PiDiamond } from "react-icons/pi";
import { useEffect } from "react";

export default function CameraLoading() {
    useEffect(() => {
      
        async function startCamera() {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              video: { facingMode: "user" },
            });
    
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
            }
          } catch (error) {
            console.error("Error accessing camera:", error);
          }
        }
    
        startCamera();
    
        return () => {
      
          if (videoRef.current && videoRef.current.srcObject) {
            videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
          }
        };
      }, []);


    return (
    <div className="flex flex-col items-center justify-center h-full w-full pl-8 pr-8">
            <div className="mb-8 dashBorder-sm-moving flex items-center flex-col text-center justify-center">
                <div className="flex flex-col items-center unrotate-anim">
                    <PiApertureFill type="file" className="font-bold border-circle unrotate" size={140} />
                    <div className="pt-4 "> SETTING UP CAMERA...</div>
                </div>
            </div>
            <div className="mt-8 text-xs"> TO GET BETTER RESULTS MAKE SURE TO HAVE</div>
            <div className="flex text-xs mt-2">
                <div className="flex items-center justify-center">
                    <PiDiamond className="mr-2"/> 
                    <div> NEUTRAL EXPRESSION </div>
                </div>
                <div className="pl-4 flex items-center justify-center">
                    <PiDiamond className="mr-2"/>
                    <div> FRONTAL POSE</div>
                </div>
                <div className="pl-4 flex items-center justify-center"> 
                    <PiDiamond className="mr-2"/>
                    <div> ADEQUATE LIGHTING</div>
                </div>
            </div>
    </div>

    )
}