"use client";

import React, { useEffect, useState } from "react";
import { HeartIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import {
  ArchiveBoxIcon,
  StarIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";

import Image from "next/image";
import Link from "next/link";
import Navbar2 from "../navigation/Navbar2";
import { FaArrowLeft } from "react-icons/fa";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import {
  Baby,
  BowlFood,
  FirstAidKit,
  GraduationCap,
  HouseLine,
  Hurricane,
  IconContext,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export const data = {
  images: [
    {
      id: 1,
      url: "/auth.webp",
    },
    {
      id: 2,
      url: "/2.webp",
    },
    {
      id: 3,
      url: "/1.webp",
    },
    // Add more image objects as needed
  ],
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  className?: string;
};

const featureLabel = cn(
  "flex cursor-default items-center cursor-pointer justify-center gap-x-2 rounded bg-[#251600] px-4 py-3 text-sm font-medium leading-none text-white transition-colors hover:bg-[#251600]/80 "
);

const features: Feature[] = [
  { icon: <Hurricane size={16} />, title: `Disaster` },
  { icon: <Baby size={16} />, title: `Children` },
  { icon: <BowlFood size={16} />, title: `Food crisis` },
  { icon: <FirstAidKit size={16} />, title: `Health` },
  { icon: <GraduationCap size={16} />, title: `Education` },
  { icon: <HouseLine size={16} />, title: `Homeless` },
];

const FundraiserDetails = () => {
  const [select, setSelect] = useState(0);
  const router = useRouter();

  return (
    <>
      <Navbar2 />
      <div className="bg-white mt-10">
        {data ? (
          <div className={` max-w-screen-2xl mx-auto px-4 lg:px-12`}>
            <div className="py-8 sm:py-10">
              <div className=" lg:float-left lg:w-[67%] mb-9">
                <div className=" lg:mr-8 ">
                  <div className="mb-4">
                    <button
                      onClick={router.back}
                      className={` py-3 px-4 lg:py-3 lg:px-4 flex items-center gap-2 rounded-md whitespace-nowrap cursor-pointer shadow bg-[#251600] text-white text-sm font-medium hover:gap-5 hover:bg-[#251600]/90 hover:text-white  transition-all duration-300 ease-linear delay-0`}
                    >
                      <FaArrowLeft className="w-4 h-4 " />
                      <div>Back</div>
                    </button>
                  </div>
                  <div className=" pb-6">
                    <h1 className=" font-bold text-4xl">
                      Flood Crisis in Ajah Lagos{" "}
                    </h1>
                  </div>
                  <div className=" w-full lg:max-w-[794px]">
                    <div className="  bg-[#EDF1DC] p-4 rounded-xl relative order-2 flex-grow-[6] flex-shrink-[1] flex-[0%]">
                      <div className="pt-[60%] h-0 relative">
                        <div className=" duration-700 rounded-xl ease-in absolute left-0 overflow-hidden top-0 h-full w-full">
                          <Image
                            width={400}
                            height={400}
                            src={`${data.images && data.images[select]?.url}`}
                            alt=""
                            className=" h-full w-full object-cover"
                          />
                        </div>
                        <div className=" absolute top-2 left-4">
                          <button
                            className={` py-3 px-4 lg:py-3 lg:px-4 flex items-center gap-2 rounded-md whitespace-nowrap cursor-pointer shadow bg-[#FF6804] text-white text-sm font-medium hover:gap-5 hover:bg-[#FF6804]/80 hover:text-white  transition-all duration-300 ease-linear delay-0`}
                          >
                            <div>Medical</div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-10 py-4 px-2 bg-[#EDF1DC] rounded-xl">
                      <div className="flex justify-between mb-2 font-light items-center gap-2.5 ">
                        <span className="text-xs">Donations</span>
                        <span className="text-xs ">30%</span>
                      </div>

                      <Progress value={33} className=" w-full " />

                      <div className="flex justify-between flex-wrap my-2 font-light items-center gap-2.5 ">
                        <span className="text-xs mr-3">Raised: $2400</span>
                        <span className="text-xs text-green-700 font-semibold">
                          Goal: $4000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-2 lg:float-right lg:w-[33%] flex flex-col ">
                <div className=" bg-[#EDF1DC] relative flex flex-col rounded-lg p-6">
                  <div className=" flex items-center space-x-4">
                    <Image
                      src={`/officer.jpeg`}
                      alt="testimonials"
                      width="50"
                      height="50"
                      loading="lazy"
                      className=" h-11 w-11 flex-none rounded-full object-cover"
                    />
                    <div className="flex-auto">
                      <div className=" text-sm font-medium text-slate-900">
                        Ayobami Akinnuga
                      </div>
                      <div className=" text-sm text-slate-500"> Organizer</div>
                    </div>
                  </div>
                  <div className=" mt-4">
                    <button
                      className={` justify-center w-full py-3 px-4 lg:py-3 lg:px-4 flex items-center gap-2 rounded-md whitespace-nowrap cursor-pointer shadow bg-[#FF6804] text-white text-sm font-medium hover:gap-5 hover:bg-[#FF6804]/90 hover:text-white  transition-all duration-300 ease-linear delay-0`}
                    >
                      Donate now
                    </button>
                    <p className=" mt-1 text-xs">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
              </div>

              <div className=" lg:float-right space-y-2 lg:w-[33%]">
                <div className=" bg-[#EDF1DC] relative  rounded-lg p-6">
                  <div className=" mb-6 text-2xl font-bold">Recent Post</div>
                  <div className=" space-y-4">
                    <div className=" flex space-x-4">
                      <div className=" w-28 h-28 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          className="w-full h-full object-cover"
                          src={`/1.webp`}
                          alt=""
                          height={400}
                          width={400}
                        />
                      </div>

                      <div>
                        <h1 className=" font-semibold text-xl">
                          Charity expectations Vs Reality
                        </h1>
                        <Badge className=" bg-[#251600]">Homeless</Badge>
                      </div>
                    </div>
                    <div className=" flex space-x-4">
                      <div className=" w-28 h-28 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          className="w-full h-full object-cover"
                          src={`/2.webp`}
                          alt=""
                          height={400}
                          width={400}
                        />
                      </div>

                      <div>
                        <h1 className=" font-semibold text-xl">
                          Whos going to feed Tinubbu
                        </h1>
                        <Badge className=" bg-[#251600]">Food</Badge>
                      </div>
                    </div>
                    <div className=" flex space-x-4">
                      <div className=" w-28 h-28 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          className="w-full h-full object-cover"
                          src={`/3.webp`}
                          alt=""
                          height={400}
                          width={400}
                        />
                      </div>

                      <div>
                        <h1 className=" font-semibold text-xl">
                          Why You Should Focus on Charity
                        </h1>
                        <Badge className=" bg-[#251600]">Medical</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" bg-[#EDF1DC] relative  rounded-lg p-6 mb-6">
                  <div className=" mb-6 text-2xl font-bold">Popular tags</div>
                  <IconContext.Provider value={{ size: 14, weight: "bold" }}>
                    <div className=" flex flex-wrap items-center gap-4">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className={cn(featureLabel, feature.className)}
                        >
                          {feature.icon}
                          <h4 className=" whitespace-nowrap">
                            {feature.title}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </IconContext.Provider>
                </div>
              </div>

              <div className=" lg:clear-left lg:w-[60%]">
                <div className=" space-y-4">
                  <h1 className=" text-2xl font-semibold">
                    Donate for poor peoples treatment and medicine.
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Vitae est vitae
                    nulla blandit. Tortor augue vitae tincidunt consequat.
                    Fermentum tempus diam pellentesque vel volutpat lacinia
                    turpis laoreet molestie. Eleifend arcu fames magna turpis
                    velit at. In dapibus commodo vivamus ultrices dapibus aenean
                    ullamcorper. Adipiscing in at diam ipsum nisi. Viverra
                    mauris elementum sed in accumsan convallis. Laoreet eget sem
                    tincidunt nullam pharetra adipiscing. Hendrerit tristique
                    bibendum mauris vulputate porta. Eget nunc integer quis in
                    massa integer molestie viverra. Elementum morbi felis nisl
                    sit. Turpis sit non sed vestibulum sed. Urna elit blandit
                    augue amet id aenean. Nunc dictum habitant amet volutpat
                    arcu. Ac fringilla et nullam etiam. Feugiat pellentesque
                    turpis eu sem aliquam purus arcu mi in. Arcu malesuada
                    phasellus sit phasellus
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default FundraiserDetails;
