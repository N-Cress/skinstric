import { MdPlayArrow } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import ResultsCategories from "@/components/results/resultsCategories";
import ResultsData from "@/components/results/resultsData";

export default function Home() {
    const axios = require('axios');
    const router = useRouter();

    const [race, setRace] = useState(null);
    const [oRace, setORace] = useState(null);

    const [age, setAge] = useState(null);
    const [oAge, setOAge] = useState(null);

    const [sex, setSex] = useState(null);
    const [oSex, setOSex] = useState(null);

    const [raceData, setRaceData] = useState(null);
    const [ageData, setAgeData] = useState(null);
    const [sexData, setSexData] = useState(null);

    const [percWhite, setPercWhite] = useState(null);
    const [percBlack, setPercBlack] = useState(null);
    const [percEAsian, setPercEAsian] = useState(null);
    const [percSEAsian, setPercSEAsian] = useState(null);
    const [percMiddleEastern, setPercMiddleEastern] = useState(null);
    const [percSAsian, setPercSAsian] = useState(null);
    const [percLatino, setPercLatino] = useState(null);
  
    const [percOnes, setPercOnes] = useState(null);
    const [percTeens, setPercTeens] = useState(null);
    const [percTwenties, setPercTwenties] = useState(null);
    const [percThirties, setPercThirties] = useState(null);
    const [percForties, setPercForties] = useState(null);
    const [percFifties, setPercFifties] = useState(null);
    const [percSixties, setPercSixties] = useState(null);
    const [percSeventies, setPercSeventies] = useState(null);

    const [percMale, setPercMale] = useState(null);
    const [percFemale, setPercFemale] = useState(null);

    function resetValues() {
      setRace(oRace);
      setAge(oAge);
      setSex(oSex);
    }

    function submitValues() {
      alert("This is a demo. These values are not submitted anywhere at this time.");
    }

    const [status, setStatus] = useState("loading");

    const renderContent = (status) => {
      switch(status) {
        case "loading":
          return <div className="flex items-center justify-center w-full h-full">
            <div className="dashBorder-sm-moving flex items-center justify-center">
              <div className="unrotate-anim"> PREPARING YOUR ANALYSIS... </div>
            </div>
          </div>;
        case "cat":
          return <ResultsCategories status={status} setStatus={setStatus}/>;
        case "demos":
          return <ResultsData status={status} setStatus={setStatus} race={race} setRace={setRace} age={age} setAge={setAge} sex={sex} setSex={setSex}
          pWhite={percWhite} pBlack={percBlack} pEAsian={percEAsian} pSEAsian={percSEAsian} pMiddleEastern={percMiddleEastern} pSAsian={percSAsian} pLatino={percLatino}
          pOnes={percOnes} pTeens={percTeens} pTwenties={percTwenties} pThirties={percThirties} pForties={percForties} pFifties={percFifties} pSixties={percSixties} pSeventies={percSeventies}
          pMale={percMale} pFemale={percFemale}
          />;
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

    function highestDemos(data, demo) {
      let highest = 0;
      let highestKey = null;
      for (const [key, value] of Object.entries(data)) {
        if (value > highest) {
          highest = value;
          highestKey = key;
        }
      }
      if (highestKey == "0-2" || highestKey == "3-9") {
        highestKey = "0-9";
      }
      if (demo === "race") {
        setORace(highestKey.toUpperCase());
        setRace(highestKey.toUpperCase());
      }
      if (demo === "age") {
        console.log(highestKey);
        setOAge(highestKey.toUpperCase());
        setAge(highestKey.toUpperCase());
      }
      if (demo === "sex") {
        setOSex(highestKey.toUpperCase());
        setSex(highestKey.toUpperCase()); 
      }
    }

    function percentageMaps(data, target, demo) {
      if (demo === "race") {
        if (target === "white") {
          setPercWhite(data["white"]);
        }
        if (target === "black") {
          setPercBlack(data["black"]);
        }
        if (target === "eAsian") {
          setPercEAsian(data["east asian"]);
        } 
        if (target === "seAsian") {
          setPercSEAsian(data["southeast asian"]);
        }
        if (target === "middleEastern") {
          setPercMiddleEastern(data["middle eastern"]);
        }
        if (target === "sAsian") {
          setPercSAsian(data["south asian"]);
        }
        if (target === "latino") {
          setPercLatino(data["latino hispanic"]);
        }
      } 
      if (demo === "age") {
        if (target === "ones") {
          setPercOnes(data["0-2"] + data["3-9"]);
        }
        if (target === "teens") {
          setPercTeens(data["10-19"]);
        }
        if (target === "twenties") {
          setPercTwenties(data["20-29"]);
        }
        if (target === "thirties") {
          setPercThirties(data["30-39"]);
        }
        if (target === "forties") {
          setPercForties(data["40-49"]);
        } 
        if (target === "fifties") {
          setPercFifties(data["50-59"]);
        }
        if (target === "sixties") {
          setPercSixties(data["60-69"]);
        }
        if (target === "seventies") {
          setPercSeventies(data["70+"]);
        }
      }
      if (demo === "sex") {
        if (target === "male") {
          setPercMale(data["male"])
        }
        if (target === "female") {
          setPercFemale(data["female"])
        }
      }
    }

    const { base64 } = router.query;
    useEffect(() => {
        
        axios({
            method: 'post',
            url: 'https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo',
            data: {
                image: base64
            }
          })
          .then(function(response) {
            const race = response.data.data.race;
            const age = response.data.data.age;
            const sex = response.data.data.gender;
            
            setStatus("cat");
            console.log(response)
            setRaceData(race);
            setAgeData(age);
            setSexData(sex);

            highestDemos(race, "race");
            highestDemos(age, "age");
            highestDemos(sex, "sex");

            percentageMaps(race, "white", "race");
            percentageMaps(race, "black", "race");
            percentageMaps(race, "eAsian", "race");
            percentageMaps(race, "seAsian", "race");
            percentageMaps(race, "middleEastern", "race");
            percentageMaps(race, "sAsian", "race");
            percentageMaps(race, "latino", "race");

            percentageMaps(age, "ones", "age");
            percentageMaps(age, "teens", "age");
            percentageMaps(age, "twenties", "age");
            percentageMaps(age, "thirties", "age");
            percentageMaps(age, "forties", "age");
            percentageMaps(age, "fifties", "age");
            percentageMaps(age, "sixties", "age");
            percentageMaps(age, "seventies", "age");

            percentageMaps(sex, "male", "sex");
            percentageMaps(sex, "female", "sex");
          })
          .catch(function(error) {
            console.log(error);
          })  
    }, [base64, axios])


  return (
    <main className="w-full h-full flex flex-col items-center ">
      { status === "loading" ? <> </> :
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
      }
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
