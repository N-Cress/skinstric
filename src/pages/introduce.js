import { MdPlayArrow } from "react-icons/md";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    const [name, setName] = useState("");

    function changeHandler(event) {
        setName(event.target.value)
    }

    function formSubmit(event) {
        event.preventDefault();
        localStorage.setItem("name", name);
        router.push('/location');
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
            <div className="dashBorder outerBorder-unrotate flex items-center pl-6 flex-col text-center justify-center w-full h-full sm:pl-4">
                <div className="grey textlabel text-center unrotate pb-4 pr-12 text-xs sm:pr-12"> CLICK TO TYPE </div>
                <input onChange={changeHandler} value={name} required id="name" className="textfield placeholder-black decoration-[1px] text-center underline underline-offset-2 text-black unrotate text-xl sm:text-3xl md:text-5xl sm:underline-offset-4 md:underline-offset-8" type="text" placeholder="Introduce Yourself" />
            </div>
          </div>
        </form>
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
