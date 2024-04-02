"use client";

import Navbar2 from "@/components/navigation/Navbar2";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import { FC } from "react";
import {
  Baby,
  BowlFood,
  FirstAidKit,
  GraduationCap,
  HandPalm,
  HouseLine,
  Hurricane,
  IconContext,
  PawPrint,
  Sword,
} from "@phosphor-icons/react";

import { FundraiserCard } from "@/components/cards/FundraiserCard";
import { PaginationComp } from "@/components/navigation/Pagination";
import Footer from "@/components/navigation/Footer";

type Feature = {
  icon: React.ReactNode;
  title: string;
  className?: string;
};

export const featureLabel = cn(
  "flex cursor-default items-center cursor-pointer justify-center gap-x-2 rounded bg-[#251600] px-4 py-3 text-sm font-medium leading-none text-white transition-colors hover:bg-[#251600]/80 "
);
export const features: Feature[] = [
  { icon: "", title: `All` },
  { icon: <Hurricane size={16} />, title: `Disaster` },
  { icon: <Baby size={16} />, title: `Children` },
  { icon: <BowlFood size={16} />, title: `Food crisis` },
  { icon: <FirstAidKit size={16} />, title: `Health` },
  { icon: <GraduationCap size={16} />, title: `Education` },
  { icon: <HouseLine size={16} />, title: `Homeless` },
  { icon: <PawPrint size={16} />, title: `Animal` },
  { icon: <Sword size={16} />, title: `War crisis` },
  { icon: <HandPalm size={16} />, title: `Pandemic` },
];

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className=" bg-white ">
      <Navbar2 />
      <div>
        <section className=" mt-16 w-full bg-[url(/auth.webp)] bg-cover bg-center ">
          <div className=" container relative">
            <section className="mx-auto text-white z-[2] relative flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-20 lg:py-24 ">
              <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
                {`Explore fundraisers`}
              </h1>
              <p className="max-w-[750px] text-center text-lg opacity-80 sm:text-xl">
                {`See who's making a difference in your community by checking out our list of top fundraisers near you. `}
              </p>
            </section>
            <div className=" z-[1] opacity-[0.86] h-[200px] md:h-[280px] lg:h-[320px] mx-auto max-w-[880px] blur-[60px] bg-[#251600]/75 absolute top-0 right-0 left-0 bottom-0    "></div>
          </div>
        </section>
      </div>
      <div className="  container relative">
        <IconContext.Provider value={{ size: 14, weight: "bold" }}>
          <div className="!mt-12 flex overflow-x-scroll items-center gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className={cn(featureLabel, feature.className)}
              >
                {feature.icon}
                <h4 className=" whitespace-nowrap">{feature.title}</h4>
              </motion.div>
            ))}
          </div>
        </IconContext.Provider>
      </div>
      <div className=" w-full mt-10 container ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="">
              <FundraiserCard />
            </div>
          ))}
        </div>
      </div>
      <div className=" py-10 flex flex-col justify-start items-start">
        <PaginationComp />
      </div>
      <Footer />
    </div>
  );
};

export default page;
