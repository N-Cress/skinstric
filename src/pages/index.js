import { MdPlayArrow } from "react-icons/md";
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <main className="flex flex-col items-center justify-between h-full w-full pl-8 pr-8">
      <div className="flex justify-between items-center w-full h-16">
        <div className=""> 
          SKINSTRIC <span className="grey"> &#91; INTRO &#93; </span>
        </div>
        <div className="bg-black button text-[10px] font-medium">
          ENTER CODE
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between w-full items-center">
        <div className={`flex items-center pb-24 pr-24 sm:p-0 transition-all duration-500 ease-in ${hovered ? `hidden`: ``}`}>
        <div className="dashBorder-left"> </div>
          <Link href="/"> 
            <div className="border"> 
              <MdPlayArrow className="arrowIcon rotate-[135deg]" />
            </div>
          </Link>
            <div className={`text-xs sm:text-sm pl-3 md:pl-6`}>  DISCOVER A.I. </div>
        </div>
        <div className={`w-[680px] mr-2 text-9xl font-light flex items-center justify-center text-center title ${hovered ? `pl-24` : ``}`}>
          Sophisticated skincare
        </div>
        <div className="flex pt-24 pl-24 sm:p-0 items-center">
          <div className="dashBorder-right"> </div>
          <div className="text-xs sm:text-sm pl-2 pr-2 sm:pr-3 md:pr-6"> TAKE TEST </div>
          <Link href="/introduce"> 
            <div onMouseEnter={() => setHovered(true)} onMouseLeave={()=> setHovered(false)} className="border"> 
              <div className={`outerBorder-arrow  ${hovered ? `border-2 border-gray-200 border-dashed ` : ``}`}>
                <MdPlayArrow  className={`-rotate-12 arrowIcon transition-all duration-500 ease-in ${hovered ? `p-1` : ``}`} />
              </div>
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
  );
}
