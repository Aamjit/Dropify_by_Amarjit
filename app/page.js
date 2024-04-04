import Header from "./_components/Header";
import Hero1 from "./_components/Hero1";
import Announcement from "./_components/Announcement";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white m-auto h-screen min-h-screen">
      <Announcement />
      <Header />
      <Hero1 />
    </div>
  );
}
