import { BsDiamond } from "react-icons/bs"

export default function AgeData({age, setAge}) {
    return(
    <>
    <div className="flex mr-4 ml-4 w-7/12 border-t-2 border-black slight-grey-background">
            <div className="pl-4 w-full pt-2 font-medium text-4xl">
                {age} y.o.
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
                age === "0-9" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setAge("0-9")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>0-9</div>
            </div>
            <div className="flex">
                <div>96</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer ${
                age === "10-19" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setAge("10-19")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>10-19</div>
            </div>
            <div className="flex">
                <div>96</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer ${
                age === "20-29" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setAge("20-29")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>20-29</div>
            </div>
            <div className="flex">
                <div>96</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer ${
                age === "30-39" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setAge("30-39")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>30-39</div>
            </div>
            <div className="flex">
                <div>96</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer ${
                age === "40-49" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setAge("40-49")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>40-49</div>
            </div>
            <div className="flex">
                <div>96</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer ${
                age === "50-59" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setAge("50-59")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>50-59</div>
            </div>
            <div className="flex">
                <div>96</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer ${
                age === "60-69" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setAge("60-69")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>60-69</div>
            </div>
            <div className="flex">
                <div>96</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer ${
                age === "70+" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setAge("70+")}
            >
            <div className="flex items-center">
                <BsDiamond className={`pr-1 `}/>
                <div>70+</div>
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