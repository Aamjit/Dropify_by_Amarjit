import Image from "next/image";
import Header from "./_components/Header";
import { UserButton } from "@clerk/nextjs";
import Hero1 from "./_components/Hero1";

export default function Home() {
  return (
    
    <div>
      <Header />
      {/* <UserButton /> */}
      <Hero1 />
    </div>
  );
}
