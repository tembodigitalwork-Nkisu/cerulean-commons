import Navbar from "./components/Navbar";
import Residence from "./components/Residence";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import WhyChoose from "./components/WhyChoose";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Reserve from "./components/Reserve";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Residence />
      <Rooms />
      <Amenities />
      <WhyChoose />
      <Gallery />
      <Location />
      <Reserve />
      <Faq />
      <Footer />
    </main>
  );
}
