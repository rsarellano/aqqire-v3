import Image from "next/image";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <div className="navContainer mt-4"></div>
      <div className="headerContainer">
        <div></div>
        <Header />
      </div>
    </div>
  );
}
