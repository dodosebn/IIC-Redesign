import Footer from "./components/footer";
import Header from "./components/header";
import HorAnimation from "./components/horAnimation";
import Journey from "./components/Journey";
import SideSocial from "./components/sideSocial";

export default function Home() {
  return (
    <div className="relative">  
      <Header />
       <SideSocial />
      <HorAnimation />
      <Journey />
      {/* <Explan /> */}
      <Footer />
    </div>
  );
}
