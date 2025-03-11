import { MdPlayArrow } from "react-icons/md";
import "./globals.css";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import ResultsCategories from "@/components/results/resultsCategories";

export default function Home() {
    const axios = require('axios');
    const router = useRouter();

    const [status, setStatus] = useState("cat");

    const renderContent = (status) => {
      switch(status) {
        // case "loading":
        //   return <ResultsLoading />;
        case "cat":
          return <ResultsCategories />;
        // case "demos":
        //   return <ResultsDemos />
      }
    }

    const { base64 } = router.query;
    useEffect(() => {
        
        axios({
            method: 'post',
            url: 'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo',
            data: {
                image: base64
            }
          })
          .then(function(response) {
            console.log(response)
            
          })
    }, [base64, axios])


  return (
    <main className="w-full h-full">
       <ResultsCategories />
    </main> 
  );
}
