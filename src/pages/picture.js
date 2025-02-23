import { MdPlayArrow } from "react-icons/md";
import { PiApertureFill } from "react-icons/pi";
import { TbPhotoCircle } from "react-icons/tb";
import "./globals.css";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    

    function changeHandler(event) {
        setName(event.target.value)
    }

    const getBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(",")[1]);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };
    
    async function encodeImageFileAsURL(event) {
      event.preventDefault();
      
    
      const file = event.target.files[0];
      if (!file) return;
    
      try {
        const base64String = await getBase64(file);
    
        router.push({
          pathname: "/results",
          query: { base64: encodeURIComponent(base64String) },
        });
      } catch (error) {
        console.error("Error reading file:", error);
      }
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
            <label htmlFor="file-upload" className="cursor-pointer">
              <PiApertureFill type="file" className="border-circle unrotate" size={140} />
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={encodeImageFileAsURL}
              />
            </label>
            </div>
            <div className="dashBorder-sm flex items-center flex-col ml-96 text-center justify-center">
              <label htmlFor="file-upload" className="cursor-pointer">
                <TbPhotoCircle className="border-circle unrotate" size={140}/>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={encodeImageFileAsURL}
                />
              </label>
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
