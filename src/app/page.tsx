"use client"
import { ContentArea } from "@/components/ContentArea";
import { SideBar } from "@/components/SideBar";
import { useEffect, useState } from "react";

const Page = () => {
    const [hiddenContentArea, setHiddenContentArea] = useState(true);

    const handleHiddenContent = () => {
        
        setHiddenContentArea(!hiddenContentArea);
    }
  return (
    <div className="md:flex w-full h-screen">
        <SideBar hiddenSideBar={hiddenContentArea} handleComponents={handleHiddenContent} />

        <ContentArea hiddenContentArea={hiddenContentArea} />
    </div>
  );
}

export default Page;