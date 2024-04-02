"use client";

import { FC } from "react";
import { BaseCard } from "./base-card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BiSolidDonateHeart } from "react-icons/bi";
import { Progress } from "../ui/progress";

interface FundraiserCardProps {}

export const FundraiserCard: FC<FundraiserCardProps> = ({}) => {
  return (
    <BaseCard>
      <Link href={`/fundraiser/123`}>
        <div className="relative overflow-hidden w-full h-[220px]">
          <Image
            className="w-screen h-full object-cover"
            src={`/UN0724693.jpg`}
            alt=""
            height={400}
            width={400}
          />
        </div>

        <div className="p-5 text-gray-900 flex flex-col flex-grow">
          <div className="flex justify-between mb-2 font-light items-center gap-2.5 ">
            <span className="text-xs">June 27, 2021</span>
            <span className="text-xs text-red-500">300 Donations</span>
          </div>
          <div className="flex mb-2 font-semibold items-center gap-2.5 ">
            <span className="text-sm">{`Flood in Ajah Lagos`}</span>
          </div>

          <p className="line-clamp-3 mb-2 font-light text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            sint, sapiente iusto perferendis eum earum amet laboriosam dicta
            vitae quisquam saepe! Similique obcaecati ad repellendus ipsa
            ducimus, corporis cupiditate nulla.
          </p>

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

          <div className=" mt-3 w-full flex items-center">
            <button
              className={` py-3 px-4 lg:py-3 lg:px-4 flex items-center gap-3 rounded-md whitespace-nowrap cursor-pointer shadow bg-[#FF6804] text-white text-sm font-medium max-w-max hover:gap-5 hover:bg-[#251600] hover:text-white  transition-all duration-300 ease-linear delay-0`}
            >
              <div>Donate Now</div>
              <BiSolidDonateHeart className=" w-5 h-5 shrink-0" />
            </button>
          </div>
        </div>
      </Link>
    </BaseCard>
  );
};
