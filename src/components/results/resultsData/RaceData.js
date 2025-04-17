import { BsDiamond } from "react-icons/bs"
import { useState, useEffect } from 'react';

export default function RaceData({race, setRace, pWhite, pBlack, pEAsian, pSEAsian, pMiddleEastern, pSAsian, pLatino}) {
    let [normRace, setNormRace] = useState(race);

    function mainPerc(race) {
        console.log("main" + race)
        switch(race) {
            case "EAST ASIAN":
                return pEAsian.toString().substring(2, 4)
            case "WHITE":
                return pWhite.toString().substring(2, 4)
            case "BLACK":
                return pBlack.toString().substring(2, 4)
            case "SOUTH ASIAN":
                return pSAsian.toString().substring(2, 4)
            case "LATINO HISPANIC":
                return pLatino.toString().substring(2, 4)
            case "SOUTHEAST ASIAN":
                return pSEAsian.toString().substring(2, 4)
            case "MIDDLE EASTERN":
                return pMiddleEastern.toString().substring(2, 4)
        }
    }

    useEffect(() => {
        console.log(race)
        function captializeFirstLetter() {
            let string = race.split('')
            for (let i = 0; i < string.length; i++) {
                if (i !== 0 ) {
                    if (string[i -1] !== " ") {
                        string[i] = string[i].toLowerCase()
                    }
                    }
                setNormRace(string.join(''))
            }
        }
        captializeFirstLetter()
    }, [race])

    return(
    <>
    <div className="flex mr-4 ml-4 w-7/12 border-t-2 border-black slight-grey-background">
        <div className="flex flex-col w-full  text-center md:flex-row">
            <div className="pl-2 w-full pt-2 font-medium text-4xl md:pl-4">
                {normRace}
            </div>
            <div className="flex items-center justify-center relative circle-wrapper ">
                <div className="flex font-medium text-4xl perc-circle" style={{ "--percent": `${mainPerc(race)}%` }}>
                </div>
                <div className="label text-4xl"> {mainPerc(race)} <span className="text-sm"> % </span> </div>
            </div>
        </div>
    </div>
        <div className="w-4/12 border-t-2 border-black pl-2 pr-2 slight-grey-background">
            <div className="flex justify-between pt-2 flex-col text-xs md:text-sm md:flex-row">
                <div> RACE </div>
                <div> A.I. CONFIDENCE </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                race === "EAST ASIAN" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setRace("EAST ASIAN")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>East Asian</div>
            </div>
            <div className="flex">
                <div>{pEAsian.toString().substring(2,4)}</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                race === "WHITE" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setRace("WHITE")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>White</div>
            </div>
            <div className="flex">
                <div>{pWhite.toString().substring(2,4)}</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                race === "BLACK" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setRace("BLACK")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>Black</div>
            </div>
            <div className="flex">
                <div>{pBlack.toString().substring(2,4)}</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                race === "SOUTH ASIAN" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setRace("SOUTH ASIAN")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>South Asian</div>
            </div>
            <div className="flex">
                <div>{pSAsian.toString().substring(2,4)}</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                race === "LATINO HISPANIC" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setRace("LATINO HISPANIC")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>Latino Hispanic</div>
            </div>
            <div className="flex">
                <div>{pLatino.toString().substring(2,4)}</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                race === "SOUTHEAST ASIAN" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setRace("SOUTHEAST ASIAN")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>South East Asian</div>
            </div>
            <div className="flex">
                <div>{pSEAsian.toString().substring(2,4)}</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                race === "MIDDLE EASTERN" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setRace("MIDDLE EASTERN")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>Middle Eastern</div>
            </div>
            <div className="flex">
                <div>{pMiddleEastern.toString().substring(2,4)}</div>
                <div>%</div>
            </div>
            </div>
        </div>
    </>
    )
}