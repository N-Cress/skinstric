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
        <div className="mr-4 ml-4 w-7/12 border-t-2 border-black">
            <div>
                20-29 y.o.
            </div>
            <div>
                <div>
                    96%
                </div>
            </div>
        </div>
        <div className="w-4/12 border-t-2 border-black">
            f
        </div>
    </div>
  )
}