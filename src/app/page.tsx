import Image from "next/image";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex justify-center bg-amber-50 relative ">
      <div className=" w-[1300px] h-[1900px] bg-white">
        <div>
          <div className="navContainer mt-4"></div>
          <div className="headerContainer">
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
}
