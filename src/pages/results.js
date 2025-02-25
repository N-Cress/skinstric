import { MdPlayArrow } from "react-icons/md";
import "./globals.css";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

export default function Home() {
    const axios = require('axios');
    const router = useRouter();

    const [loading, setLoading] = useState(true)

    const { base64 } = router.query;
    useEffect(() => {
        setLoading(true);
        axios({
            method: 'post',
            url: 'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo',
            data: {
                image: base64
            }
          })
          .then(function(response) {
            console.log(response)
            
          })
    }, [base64, axios])


  return (
    <main className="flex flex-col items-center justify-between h-full w-full pl-8 pr-8">
       {
      loading ? 
      <main className="flex flex-col items-center justify-center h-full w-full pl-8 pr-8">
        <div>
            <div className="dashBorder-sm-moving flex items-center flex-col pl-4 text-center justify-center font-semibold">  
              <div className="unrotate-anim "> 
              PREPARING YOUR ANALYSIS...
              </div>
            </div>
        </div>
    </main> :
    <main className="flex flex-col items-center justify-between h-full w-full pl-8 pr-8">
    <div className="flex justify-between items-center w-full h-16">
      <div className=""> 
        SKINSTRIC <span className="grey"> &#91; INTRO &#93; </span>
      </div>
      <div className="bg-black button text-[10px] font-medium">
        ENTER CODE
      </div>
    </div>
    <div className="flex flex-row justify-between w-full items-center">
      <div className="flex items-center">
      <div className="dashBorder-left"> </div>
        <Link href="/"> 
          <div className="border"> 
            <MdPlayArrow className="rotate-[135deg]" size={30}/>
          </div>
        </Link>
          <div className="text-sm pl-6">  DISCOVER A.I. </div>
      </div>
      <div className=" w-[680px] text-9xl font-light text-center">
        Sophisticated skincare
      </div>
      <div className="flex items-center">
        <div className="dashBorder-right"> </div>
        <div className="text-sm pr-6"> TAKE TEST </div>
        <Link href="/introduce"> 
          <div className="border"> 
            <MdPlayArrow className="-rotate-45" size={30}/>
          </div>
        </Link>
      </div>
    </div>
    <div className="justify-start w-full">
      <div className="pb-6 w-[316px] text-sm font-normal">
        SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY PERSONALISE ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.
      </div>
    </div>
  </main>
      }
      </main> 
  );
}
