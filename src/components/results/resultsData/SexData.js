import { BsDiamond } from "react-icons/bs"
import { useState, useEffect } from 'react';

export default function SexData({sex, setSex, pMale, pFemale}) {
     let [normSex, setNormSex] = useState(sex);
    
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
            <div className="pl-4 w-full pt-2 font-medium text-4xl">
                {normSex}
            </div>
            <div className="flex justify-end pr-10 items-center ">
                <div className="flex font-medium text-4xl perc-circle">
                    {sex === "MALE" ? pMale.toString().substring(2, 4) : pFemale.toString().substring(2, 4)} <span className="text-sm"> % </span>
                </div>
            </div>
        </div>
        <div className="w-3/12 border-t-2 border-black pl-4 pr-4 slight-grey-background">
            <div className="flex justify-between pt-2 ">
                <div> SEX </div>
                <div> A.I. CONFIDENCE </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer ${
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
            className={`flex justify-between p-2 items-center cursor-pointer ${
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