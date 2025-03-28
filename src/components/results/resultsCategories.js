import { MdPlayArrow } from "react-icons/md";
import Link from 'next/link';

export default function ResultsCategories() {
  return (
    <div className="flex flex-col justify-center h-full">
            <div className="fourdiamond text-center">
                <div className="part top "> 
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
  )
}