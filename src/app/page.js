import { MdPlayArrow } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between h-full w-full pl-8 pr-8">
      <div className="flex justify-between items-center w-full h-16">
        <div className=""> 
          SKINSTRIC <span> INTRO </span>
        </div>
        <div className="bg-black button text-[10px] font-medium">
          ENTER CODE
        </div>
      </div>
      <div className="flex flex-row justify-between w-full items-center">
        <div className="flex items-center">
          <div className="border"> 
            <MdPlayArrow className="rotate-[135deg]" size={30}/>
          </div>
          <div className="text-sm pl-6">  DISCOVER A.I. </div>
        </div>
        <div className="h-60 w-[680px] text-9xl font-light text-center">
          Sophisticated skincare
        </div>
        <div className="flex items-center">
          <div className="text-sm pr-6"> TAKE TEST </div>
          <div className="border"> 
            <MdPlayArrow className="-rotate-45" size={30}/>
          </div>
        </div>
      </div>
      <div className="justify-start w-full">
        <div className="pb-6 w-[316px] text-sm font-normal">
          SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY PERSONALISE ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.
        </div>
      </div>
    </main>
  );
}
