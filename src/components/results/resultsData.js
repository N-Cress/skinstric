import { MdPlayArrow } from "react-icons/md";
import { BsDiamond } from "react-icons/bs"
import Link from 'next/link';
import { useState } from 'react';

export default function ResultsData({setStatus}) {
    const [category, setCategory] = useState("age");
    const [race, setRace] = useState("eastAsian");
    const [age, setAge] = useState("20-29");
    const [sex, setSex] = useState("female");

  function statusToDemos() {
    setStatus("demos")
  }

  return (
    <div className="flex justify-start w-full h-full pl-8 pr-8">
        <div className="w-2/12 border-t-2 border-grey font-semibold">
            <div className="grey-hover pl-1 pb-2">
                <div className="pt-2 pb-12"> EAST ASIAN</div>
                <div> RACE </div>
            </div>    
            <div className="grey-hover pt-2 pb-2 pl-1 border-t-2 border-black">
                <div className="pb-12"> 20-29 </div>
                <div> AGE </div>
            </div>
            <div className="pl-1 grey-hover">
                <div className="pt-2 pb-12 border-t-2 border-black"> FEMALE</div>
                <div> SEX </div>
            </div>
        </div> 
        <div className="flex mr-4 ml-4 w-7/12 border-t-2 border-black">
            <div className="pl-4 w-full pt-2 font-medium text-4xl">
                20-29 y.o.
            </div>
            <div className="flex justify-end pr-10 items-center ">
                <div className="flex font-medium text-4xl perc-circle">
                    96 <span className="text-sm"> % </span>
                </div>
            </div>
        </div>
        <div className="w-3/12 border-t-2 border-black pl-4 pr-4">
            <div className="flex justify-between pt-2 ">
                <div> RACE </div>
                <div> A.I. CONFIDENCE </div>
            </div>
            <div className="flex justify-between grey-hover mt-2 pt-2 pb-2 pl-2 pr-2">
                <div className="flex items-center"> 
                   <BsDiamond className=" pr-1"/>
                   <div> 0-9</div>
                </div>
                <div className="flex">
                    <div> 96</div>
                    <div> % </div>
                </div>
            </div>
            <div className="flex justify-between grey-hover p-2">
                <div className="flex items-center"> 
                   <BsDiamond className=" pr-1"/>
                   <div> 10-19</div>
                </div>
                <div className="flex">
                    <div> 96</div>
                    <div> % </div>
                </div>
            </div>
            <div className="flex justify-between grey-hover p-2">
                <div className="flex items-center"> 
                   <BsDiamond className=" pr-1"/>
                   <div> 20-29</div>
                </div>
                <div className="flex">
                    <div> 96</div>
                    <div> % </div>
                </div>
            </div>
            <div className="flex justify-between grey-hover p-2">
                <div className="flex items-center"> 
                   <BsDiamond className=" pr-1"/>
                   <div> 30-39</div>
                </div>
                <div className="flex">
                    <div> 96</div>
                    <div> % </div>
                </div>
            </div>
            <div className="flex justify-between grey-hover p-2">
                <div className="flex items-center"> 
                   <BsDiamond className=" pr-1"/>
                   <div> 40-49</div>
                </div>
                <div className="flex">
                    <div> 96</div>
                    <div> % </div>
                </div>
            </div>
            <div className="flex justify-between grey-hover p-2">
                <div className="flex items-center"> 
                   <BsDiamond className=" pr-1"/>
                   <div> 50-59</div>
                </div>
                <div className="flex">
                    <div> 96</div>
                    <div> % </div>
                </div>
            </div>
            <div className="flex justify-between grey-hover p-2">
                <div className="flex items-center"> 
                   <BsDiamond className=" pr-1"/>
                   <div> 60-69</div>
                </div>
                <div className="flex">
                    <div> 96</div>
                    <div> % </div>
                </div>
            </div>
            <div className="flex justify-between grey-hover p-2">
                <div className="flex items-center"> 
                   <BsDiamond className=" pr-1"/>
                   <div> 70+</div>
                </div>
                <div className="flex">
                    <div> 96</div>
                    <div> % </div>
                </div>
            </div>
        </div>
    </div>
  )
}