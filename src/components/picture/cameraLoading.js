import { PiApertureFill } from "react-icons/pi";
import { PiDiamond } from "react-icons/pi";


export default function CameraLoading() {
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