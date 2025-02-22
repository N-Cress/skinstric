import { MdPlayArrow } from "react-icons/md";
import { PiApertureFill } from "react-icons/pi";
import { TbPhotoCircle } from "react-icons/tb";
import "./globals.css";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    const [name, setName] = useState("");

    function changeHandler(event) {
        setName(event.target.value)
    }

    function encodeImageFileAsURL(event) {
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.onloadend = function() {
        console.log('RESULT', reader.result)
      }
      reader.readAsDataURL(file);
    }
    

  return (
    <main className="flex flex-col items-center justify-between h-full w-full pl-8 pr-8">
      <div className="flex justify-start w-full flex-col font-semibold">
        <div className="flex justify-between items-center w-full h-16">
            <div className=""> 
            SKINSTRIC <span className="grey"> &#91; INTRO &#93; </span>
            </div>
        </div>
        <div>
            TO START ANALYSIS
        </div>
      </div>
        <form className="flex w-full justify-center" >
            <div className="dashBorder-sm flex items-center flex-col text-center justify-center">
                  <input className="unrotate" type="file" onClick={encodeImageFileAsURL} /> 
                    <PiApertureFill type="file" className="border-circle unrotate" size={140}/>
    
            </div>
            <div className="dashBorder-sm flex items-center flex-col ml-96 text-center justify-center">
                <TbPhotoCircle className="border-circle unrotate" size={140}/>
            </div>
        </form>
      <div className="flex pb-4 w-full items-center">
          <Link href="/location"> 
          <div className="border"> 
            <MdPlayArrow className="rotate-[135deg]" size={20}/>
          </div>
          </Link>
            <div className="text-lg pl-4">  Back </div>
        </div>
    </main>
  );
}
