import { useState, useEffect, useRef } from "react";
import PictureHomeComponent from "@/components/picture/picturehome";
import CameraLoadingComponent from "@/components/picture/cameraLoading";
import "./globals.css";

export default function Home() {
  const [status, setStatus] = useState("main"); 

  async function encodeImageFileAsURL(event) {
    event.preventDefault();
    
    const file = event.target.files[0];
    if (!file) return;
  
    try {
      const base64String = await getBase64(file);
  
      router.push({
        pathname: "/results",
        query: { base64: encodeURIComponent(base64String) },
      });
    } catch (error) {
      console.error("Error reading file:", error);
    }
  }

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const renderContent = (status) => {
    switch (status) {
      case "main":
        return <PictureHomeComponent status={status} setStatus={setStatus} />;
      case "loading":
        return <CameraLoadingComponent status={status} setStatus={setStatus}  />;
      default:
        return <p>Unknown status</p>;
    }
  };

  return (
    <main className="w-full h-full">
      {renderContent(status)}
    </main>
  );
}
