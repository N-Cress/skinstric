import { BsDiamond } from "react-icons/bs"
import { useState, useEffect } from 'react';

export default function RaceData({race, setRace}) {
    let [normRace, setNormRace] = useState(race);

    useEffect(() => {
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
            <div className="pl-4 w-full pt-2 font-medium text-4xl">
                {normRace}
            </div>
            <div className="flex justify-end pr-10 items-center ">
                <div className="flex font-medium text-4xl perc-circle">
                    96 <span className="text-sm"> % </span>
                </div>
            </div>
        </div>
        <div className="w-3/12 border-t-2 border-black pl-4 pr-4 slight-grey-background">
            <div className="flex justify-between pt-2 ">
                <div> RACE </div>
                <div> A.I. CONFIDENCE </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer ${
                race === "EAST ASIAN" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setRace("EAST ASIAN")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>East Asian</div>
            </div>
            <div className="flex">
                <div>96</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer ${
                race === "WHITE" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setRace("WHITE")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>White</div>
            </div>
            <div className="flex">
                <div>96</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer ${
                race === "BLACK" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setRace("BLACK")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>Black</div>
            </div>
            <div className="flex">
                <div>96</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer ${
                race === "SOUTH ASIAN" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setRace("SOUTH ASIAN")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>South Asian</div>
            </div>
            <div className="flex">
                <div>96</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer ${
                race === "LATINO HISPANIC" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setRace("LATINO HISPANIC")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>Latino Hispanic</div>
            </div>
            <div className="flex">
                <div>96</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer ${
                race === "SOUTH EAST ASIAN" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setRace("SOUTH EAST ASIAN")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>South East Asian</div>
            </div>
            <div className="flex">
                <div>96</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer ${
                race === "MIDDLE EASTERN" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setRace("MIDDLE EASTERN")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>Middle Eastern</div>
            </div>
            <div className="flex">
                <div>96</div>
                <div>%</div>
            </div>
            </div>
        </div>
    </>
    )
}