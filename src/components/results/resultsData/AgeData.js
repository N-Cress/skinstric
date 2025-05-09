import { BsDiamond } from "react-icons/bs"

export default function AgeData({age, setAge, pOnes, pTeens, pTwenties, pThirties, pForties, pFifties, pSixties, pSeventies}) {
    function mainPerc(age) {
        switch(age) {
            case "0-9":
                return pOnes.toString().substring(2, 4)
            case "10-19":
                return pTeens.toString().substring(2, 4)
            case "20-29":
                return pTwenties.toString().substring(2, 4)
            case "30-39":
                return pThirties.toString().substring(2, 4)
            case "40-49":
                return pForties.toString().substring(2, 4)
            case "50-59":
                return pFifties.toString().substring(2, 4)
            case "60-69":
                return pSixties.toString().substring(2, 4)
            case "70+":
                return pSeventies.toString().substring(2, 4)
        }
    }
    return(
    <>
    <div className="flex mr-4 ml-4 border-t-2 border-black slight-grey-background sm:w-7/12">
        <div className="flex flex-col w-full text-center md:flex-row">
            <div className="pl-2 w-full pt-2 font-medium text-4xl">
                {age} y.o.
            </div>
            <div className="flex justify-center relative items-center circle-wrapper">
                <div className="flex font-medium text-4xl perc-circle" style={{ "--percent": `${mainPerc(age)}%` }}>
                </div>
                <div className="label text-4xl"> {mainPerc(age)} <span className="text-sm"> % </span> </div>
            </div>
        </div>
    </div>
        <div className="border-t-2  border-black pl-2 pr-2 slight-grey-background sm:w-4/12">
            <div className="flex justify-between pt-2 flex-col text-xs md:text-sm md:flex-row">
                <div> RACE </div>
                <div> A.I. CONFIDENCE </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                age === "0-9" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setAge("0-9")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>0-9</div>
            </div>
            <div className="flex">
                <div>{pOnes.toString().substring(2,4)}</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                age === "10-19" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setAge("10-19")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>10-19</div>
            </div>
            <div className="flex">
                <div>{pTeens.toString().substring(2,4)}</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                age === "20-29" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setAge("20-29")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>20-29</div>
            </div>
            <div className="flex">
                <div>{pTwenties.toString().substring(2,4)}</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                age === "30-39" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setAge("30-39")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>30-39</div>
            </div>
            <div className="flex">
                <div>{pThirties.toString().substring(2,4)}</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                age === "40-49" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setAge("40-49")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>40-49</div>
            </div>
            <div className="flex">
                <div>{pForties.toString().substring(2,4)}</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                age === "50-59" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setAge("50-59")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>50-59</div>
            </div>
            <div className="flex">
                <div>{pFifties.toString().substring(2,4)}</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                age === "60-69" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setAge("60-69")}
            >
            <div className="flex items-center">
                <BsDiamond className="pr-1"/>
                <div>60-69</div>
            </div>
            <div className="flex">
                <div>{pSixties.toString().substring(2,4)}</div>
                <div>%</div>
            </div>
            </div>
            <div 
            className={`flex justify-between p-2 items-center cursor-pointer text-xs lg:text-base ${
                age === "70+" ? "bg-black text-white" : "grey-hover"
            }`} 
            onClick={() => setAge("70+")}
            >
            <div className="flex items-center">
                <BsDiamond className={`pr-1 `}/>
                <div>70+</div>
            </div>
            <div className="flex ">
                <div>{pSeventies.toString().substring(2,4)}</div>
                <div>%</div>
            </div>
            </div>
        </div>
    </>
    )
}