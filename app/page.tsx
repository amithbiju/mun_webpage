import About from "@/components/About";
import Hero from "@/components/Hero";
import Event from "@/components/Event";
import { Timer } from "@/components/Timer";
import Venue from "@/components/Venue";

import Tracks from "../components/Tracks";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Timer />
      <Tracks />
      <Event />
      {/* <Faqs /> */}
      <Venue />
    </div>
  );
}
