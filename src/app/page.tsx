import Advert from "@/components/hero/Advert";
import { Article } from "@/components/hero/Article";
import { Fundraiser } from "@/components/hero/Fundraiser";
import Howto from "@/components/hero/Howto";
import MoreInfo from "@/components/hero/MoreInfo";

import Partners from "@/components/hero/Partners";
import { Showcase } from "@/components/hero/Showcase";
import Subscribe from "@/components/hero/Subscribe";
import Testimonials from "@/components/hero/Testimonials";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Partners />
      <Howto />
      <Fundraiser />
      <MoreInfo />
      <div className="bg-white">
        <Testimonials />
        <Advert />
        <Article />
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
}
