import { BsDiamond } from "react-icons/bs"
import { useState, useEffect } from 'react';

export default function SexData({sex, setSex, pMale, pFemale}) {
     let [normSex, setNormSex] = useState(sex);
    
     function mainPerc(sex) {
        switch(sex) {
            case "MALE":
                return pMale.toString().substring(2, 4)
            case "FEMALE":
                return pFemale.toString().substring(2, 4)
        }
    }

        useEffect(() => {
            function captializeFirstLetter() {
                let string = sex.split('')
                for (let i = 0; i < string.length; i++) {
                    if (i !== 0 ) {
                        string[i] = string[i].toLowerCase()
                        }
                    setNormSex(string.join(''))
                }
            }
            captializeFirstLetter()
        }, [sex])
    return(
    <>
    <div className="flex mr-4 ml-4 w-7/12 border-t-2 border-black slight-grey-background">
        <div className="flex flex-col w-full  text-center md:flex-row">
            <div className="pl-2 w-full pt-2 font-medium text-4xl">
                {normSex}
            </div>
            <div className="flex justify-center relative items-center circle-wrapper">
                <div className="flex font-medium text-4xl perc-circle" style={{ "--percent": `${mainPerc(sex)}%` }}>
                </div>
                <div className="label text-4xl"> {mainPerc(sex)} <span className="text-sm"> % </span> </div>
            </div>
        </div>
    </div>
        <div className="w-4/12 border-t-2 border-black pl-2 pr-2 slight-grey-background">
            <div className="flex justify-between pt-2 flex-col text-xs md:text-sm md:flex-row">
                <div> SEX </div>
                <div> A.I. CONFIDENCE </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                sex === "MALE" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setSex("MALE")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>Male</div>
            </div>
            <div className="flex">
                <div>{pMale.toString().substring(2, 4)}</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                sex === "FEMALE" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setSex("FEMALE")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>Female</div>
            </div>
            <div className="flex">
                <div>{pFemale.toString().substring(2, 4)}</div>
                <div>%</div>
            </div>
            </div>
        
        </div>
    </>
    )
}