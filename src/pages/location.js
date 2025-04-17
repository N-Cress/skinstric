import { MdPlayArrow } from "react-icons/md";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    const [location, setLocation] = useState("");
    const axios = require('axios');


    function changeHandler(event) {
        setLocation(event.target.value)
    }

    async function formSubmit(event) {
        event.preventDefault();
        
        axios({
          method: 'post',
          url: 'https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne',
          data: {
              name: localStorage.getItem("name"), 
              location: location
          }
        })
        .then(function(response) {
          console.log(response)
        });
        router.push('/picture');
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
        <form onSubmit={formSubmit}>
          <div className="outerBorder "> 
            <div className="outerBorder-unrotate dashBorder flex items-center flex-col text-center justify-center pl-6 sm:pl-4">
                <div className="grey textlabel text-sm unrotate pb-4 pr-12"> CLICK TO TYPE </div>
                <input onChange={changeHandler} value={location} required id="location" className="textfield placeholder-black decoration-[1px] text-center underline underline-offset-2 text-black unrotate text-xl sm:text-3xl md:text-5xl sm:underline-offset-4 md:underline-offset-8" type="text" placeholder="Where are you from?" />
            </div>
          </div>
        </form>
      <div className="flex pb-4 w-full items-center">
          <Link href="/introduce"> 
          <div className="border"> 
            <MdPlayArrow className="rotate-[135deg]" size={20}/>
          </div>
          </Link>
            <div className="text-lg pl-4">  Back </div>
        </div>
    </main>
  );
}
