import type { Metadata } from "next";
import Navbar from "@/components/header/navbar";
import NavMobile from "@/components/header/navmobile";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Aqqire | Formerly The Hotel Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
        <NavMobile />
      </header>
      <div className="flex justify-center relative">
        <div className="w-full min-h-screen">
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
