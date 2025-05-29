    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

import Explan from "./components/explan";
import Header from "./components/header";
import HorAnimation from "./components/horAnimation";
import Journey from "./components/Journey";

export default function Home() {
  return (
    <div>
<Header />
<HorAnimation />
<Journey />
<Explan />
    </div>
  );
}
