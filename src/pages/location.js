import { MdPlayArrow } from "react-icons/md";
import "./globals.css";
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
        console.log(localStorage.getItem("name"), location)
        axios({
          method: 'post',
          url: 'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne',
          data: {
              name: localStorage.getItem("name"), 
              location: location
          }
        })
        .then(function(response) {
          console.log(response)
        });

        localStorage.setItem("name", name);
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
            <div className="dashBorder flex items-center flex-col pl-4 text-center justify-center">
                <div className="grey textlabel text-sm unrotate pb-4 pr-16"> CLICK TO TYPE </div>
                <input onChange={changeHandler} value={location} required id="location" className="textfield decoration-[1px] text-center underline underline-offset-8 text-5xl font-light unrotate" type="text" placeholder="Where are you from?" />
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
