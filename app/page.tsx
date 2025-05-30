import Footer from "./components/footer";
import Header from "./components/header";
import HorAnimation from "./components/horAnimation";
import Journey from "./components/Journey";

export default function Home() {
  return (
    <div className="relative">  
      <Header />
      <HorAnimation />
      <Journey />
      {/* <Explan /> */}
      <Footer />
    </div>
  );
}
