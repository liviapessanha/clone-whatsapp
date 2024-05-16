import { ContentArea } from "@/components/ContentArea";
import { SideBar } from "@/components/SideBar";

const Page = () => {
  return (
    <div className="flex w-full h-screen">
        <SideBar />

        <ContentArea />
    </div>
  );
}

export default Page;