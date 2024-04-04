import Header from "./_components/Header";
import Hero1 from "./_components/Hero1";
import Hero2 from "./_components/Hero2";
import Hero3 from "./_components/Hero3";
import Announcement from "./_components/Announcement";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white m-auto h-full min-h-screen">
      <Announcement />
      <Header />
      <Hero1 />
      <hr className="bg-gray-600 w-[80%] mx-auto" />
      <Hero2 />
      <hr className="bg-gray-600 w-[80%] mx-auto" />
      <Hero3 />
      <hr className="bg-gray-600 w-[80%] mx-auto" />
      <Footer />
    </div>
  );
}
