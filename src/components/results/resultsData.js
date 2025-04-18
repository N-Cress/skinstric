import { MdPlayArrow } from "react-icons/md";
import { BsDiamond } from "react-icons/bs"
import Link from 'next/link';
import AgeData from "./resultsData/AgeData";
import RaceData from "./resultsData/RaceData";
import SexData from "./resultsData/SexData";
import { useState } from 'react';

export default function ResultsData({setStatus, age, sex, race, setAge, setSex, setRace, 
    pWhite, pBlack, pEAsian, pSEAsian, pMiddleEastern, pSAsian, pLatino, 
    pOnes, pTeens, pTwenties, pThirties, pForties, pFifties, pSixties, pSeventies, 
    pMale, pFemale}) {

    const [category, setCategory] = useState("age");
  

  function statusToDemos() {
    setStatus("demos")
  }

  const catDisplayed = (category) => {
    switch(category) {
        case "age" :
            return <AgeData age={age} setAge={setAge} 
            pOnes={pOnes} pTeens={pTeens} pTwenties={pTwenties} pThirties={pThirties} pForties={pForties} pFifties={pFifties} pSixties={pSixties} pSeventies={pSeventies}/>;
        case "race":
            return <RaceData race={race} setRace={setRace} 
            pWhite={pWhite} pBlack={pBlack} pEAsian={pEAsian} pSEAsian={pSEAsian} pMiddleEastern={pMiddleEastern} pSAsian={pSAsian} pLatino={pLatino}/>;
        case "sex":
            return  <SexData sex={sex} setSex={setSex} 
            pMale={pMale} pFemale={pFemale}/>;
    }
  }

  return (
    <div className="flex flex-col justify-start w-full h-full pl-2 pr-2 pb-4 md:pr-8 md:pl-8 sm:flex-row">
        <div className="w-full border-t-2 border-grey font-semibold slight-grey-background sm:w-2/12">
            <div className={` pl-2 pr-2 pb-4 
                ${category === "race" ? "bg-black text-white" : "grey-hover"}
            `}
            onClick={() => setCategory("race")}
            >
                <div className="pt-2 pb-12"> {race} </div>
                <div> RACE </div>
            </div>    
            <div className={`pt-2 pl-2 pb-4 border-t-2 border-black
                ${category === "age" ? "bg-black text-white" : "grey-hover"}
            `}
            onClick={() => setCategory("age")}
            >
                <div className="pb-12"> {age} </div>
                <div> AGE </div>
            </div>
            <div className={`pl-2 pt-2 pb-4 border-t-2 border-black 
                ${category === "sex" ? "bg-black text-white" : "grey-hover"}`}
                onClick={() => setCategory("sex")}
                >
                <div className="pb-12"> {sex}</div>
                <div> SEX </div>
            </div>
        </div> 
        {catDisplayed(category)}
    </div>
  )
}