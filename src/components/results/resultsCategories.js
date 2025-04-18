import { MdPlayArrow } from "react-icons/md";
import Link from 'next/link';

export default function ResultsCategories({setStatus}) {
  function statusToDemos() {
    setStatus("demos")
  }

  return (
    <div className="flex flex-col justify-center h-full">
        <div className="outerBorder flex ">
            <div className="fourdiamond text-center">
                <div onClick={statusToDemos} className="part top "> 
                  <div className="unrotate">
                    DEMOGRAPHICS
                  </div>
                </div>
                <div className="part right"> 
                  <div className="unrotate">
                    COSMETIC CONCERNS
                  </div>
                </div>
                <div className="part left"> 
                  <div className="unrotate">
                    SKIN TYPE DETAILS
                  </div>
                </div>
                <div className="part bottom "> 
                  <div className="unrotate">
                    WEATHER
                  </div>
                </div>
            </div> 
        </div>
    </div>
  )
}