import { MdPlayArrow } from "react-icons/md";
import Link from 'next/link';

export default function ResultsData({setStatus}) {
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
        <div className="w-3/12 border-t-2 border-black">
            f
        </div>
    </div>
  )
}