import AboutFounder from "@/components/modules/Home/AboutFounder";
import Booking from "@/components/modules/Home/Booking";
import Counters from "@/components/modules/Home/Counters";
import Hero from "@/components/modules/Home/Hero";
import Partners from "@/components/modules/Home/Partners";
import Services from "@/components/modules/Home/Services";
import WhiteLabel from "@/components/modules/Home/WhiteLabel";
import YoutubeGrid from "@/components/modules/Home/YoutubeGrid";


export default function HomePage() {
  return (
    <div>
      <Hero />
      <div className="mt-[-100px]">
      <Counters/>
      </div>
      <Services/>
      <Partners/>
      <AboutFounder/>
      <Booking/>
      <YoutubeGrid/>
      <WhiteLabel/>
    </div>
  );
}
