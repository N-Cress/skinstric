import { MdPlayArrow } from "react-icons/md";
import "./globals.css";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import ResultsCategories from "@/components/results/resultsCategories";

export default function Home() {
    // const axios = require('axios');
    // const router = useRouter();

    const [status, setStatus] = useState("cat");

    const renderContent = (status) => {
      switch(status) {
        case "loading":
          return < > </>;
        case "cat":
          return <ResultsCategories />;
        case "demos":
          return < > </>
      }
    }
    const renderSubMessage = (status) => {
      switch(status) {
        case "loading":
          return < > </>;
        case "cat":
          return < > 
            <div className="font-normal"> A.I HAS ESTIMATED THE FOLLOWING.</div>
            <div className="font-normal" > FIX ESTIMATED INFORMATION IF NEEDED. </div>
          </>;
        case "demos":
          return < > </>
      }
    }

    // const { base64 } = router.query;
    // useEffect(() => {
        
    //     axios({
    //         method: 'post',
    //         url: 'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo',
    //         data: {
    //             image: base64
    //         }
    //       })
    //       .then(function(response) {
    //         console.log(response)
            
    //       })
    // }, [base64, axios])


  return (
    <main className="w-full h-full flex flex-col items-center ">
      <div className="pl-4 flex justify-start w-full flex-col font-semibold">
        <div className="flex justify-between items-center w-full h-16">
            <div className=""> 
            SKINSTRIC <span className="grey"> &#91; ANALYSIS &#93; </span>
            </div>
        </div>
        <div className="pb-2">
            A.I ANALYSIS
        </div>
        {renderSubMessage(status)}
      </div>
       {renderContent(status)}
       <div className="pl-4 flex pb-4 w-full items-center">
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
