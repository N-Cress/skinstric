import { MdPlayArrow } from "react-icons/md";
import "./globals.css";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import ResultsCategories from "@/components/results/resultsCategories";
import ResultsData from "@/components/results/resultsData";

export default function Home() {
    const axios = require('axios');
    const router = useRouter();

    const [race, setRace] = useState("EAST ASIAN");
    const [oRace, setORace] = useState("EAST ASIAN");

    const [age, setAge] = useState("20-29");
    const [oAge, setOAge] = useState("20-29");

    const [sex, setSex] = useState("FEMALE");
    const [oSex, setOsex] = useState("FEMALE");

    const [raceData, setRaceData] = useState(null);
    const [ageData, setAgeData] = useState(null);
    const [sexData, setSexData] = useState(null);

    function resetValues() {
      setRace(oRace);
      setAge(oAge);
      setSex(oSex);
    }

    function submitValues() {
      alert("This is a demo. These values are not submitted anywhere at this");
    }

    const [status, setStatus] = useState("cat");

    const renderContent = (status) => {
      switch(status) {
        case "loading":
          return < > </>;
        case "cat":
          return <ResultsCategories status={status} setStatus={setStatus}/>;
        case "demos":
          return <ResultsData status={status} setStatus={setStatus} race={race} setRace={setRace} age={age} setAge={setAge} sex={sex} setSex={setSex}/>;
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
          return < > 
            <div className="font-bold text-5xl pb-2"> DEMOGRAPHICS </div>
            <div className="font-normal text-xs mb-32"> PREDICTED RACE & AGE </div>
          </>
      }
    }
    const renderBackButton = (status) => {
      switch(status) {
        case "loading":
          return < > </>;
        case "cat":
          return <div className="flex items-center ">
            <Link href="/picture"> 
            <div className="border"> 
              <MdPlayArrow className="rotate-[135deg]" size={20}/>
            </div>
            </Link>
            <div className="text-sm ml-4"> BACK </div>
          </div> 
        case "demos":
          return <div onClick={() => setStatus("cat")} className="flex items-center ">
          <div className="border cursor-pointer"> 
            <MdPlayArrow className="rotate-[135deg]" size={20}/>
          </div>
          <div className="text-sm ml-4"> BACK </div>
        </div> 
      } 
    }


    const { base64 } = router.query;
    useEffect(() => {
        
        axios({
            method: 'post',
            url: 'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo',
            data: {
                image: base64
            }
          })
          .then(function(response) {
            setRaceData(response.data.data.race);
            setAgeData(response.data.data.age);
            setSexData(response.data.data.gender);
            console.log(raceData.black);
          })
    }, [base64, axios])


  return (
    <main className="w-full h-full flex flex-col items-center ">
      <div className="pl-4 flex justify-start w-full flex-col font-semibold">
        <div className="flex justify-between items-center w-full h-16">
            <div className="pb-4"> 
            SKINSTRIC <span className="grey"> &#91; ANALYSIS &#93; </span>
            </div>
        </div>
        <div className="pb-2">
            A.I ANALYSIS
        </div>
        {renderSubMessage(status)}
      </div>
       {renderContent(status)}
       <div className="pl-4 flex pb-6 w-full justify-between items-center">
            {renderBackButton(status)}
            { status === "demos" ? 
            <>
          <div className="grey text-sm ml-40"> If A.I. estimate is wrong, select the correct one.</div>
          <div className="flex items-center mr-12">
            <div onClick={resetValues} className="cursor-pointer border-2 border-black pl-3 pr-3 pt-1 pb-1 "> RESET </div>
            <div onClick={submitValues} className="cursor-pointer ml-4 border-2 bg-black text-white border-black pl-3 pr-3 pt-1 pb-1"> CONFIRM </div>
          </div> 
            </> :
              <></>
            }
        </div>
    </main> 
  );
}
