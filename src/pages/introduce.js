import { MdPlayArrow } from "react-icons/md";
import "./globals.css";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
    const [name, setName] = useState("")

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
        <div className="dashBorder flex items-center pl-4 flex-col text-center justify-center">
            <div className="grey textlabel text-sm unrotate pb-4 pr-16"> CLICK TO TYPE </div>
            <input className="textfield decoration-[1px] text-center underline underline-offset-8 text-6xl font-light unrotate" type="text" id="name" placeholder="Introduce Yourself" /> 
        </div>
      <div className="flex pb-4 w-full items-center">
          <Link href="/"> 
          <div className="border"> 
            <MdPlayArrow className="rotate-[135deg]" size={20}/>
          </div>
          </Link>
            <div className="text-lg pl-4">  Back </div>
        </div>
    </main>
  );
}
