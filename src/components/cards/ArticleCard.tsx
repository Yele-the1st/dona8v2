"use client";

import { FC } from "react";
import { BaseCard } from "./base-card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Progress } from "../ui/progress";
import { FaArrowRight } from "react-icons/fa";

interface ArticleCardProps {}

export const ArticleCard: FC<ArticleCardProps> = ({}) => {
  return (
    <BaseCard className=" bg-transparent shadow-none">
      <Link href={`/article/123`}>
        <div className="relative rounded-xl overflow-hidden w-full h-[220px]">
          <Image
            className="w-full h-full object-cover"
            src={`/2.webp`}
            alt=""
            height={400}
            width={400}
          />
        </div>

        <div className="p-5 text-gray-900 flex flex-col flex-grow">
          <div className="flex justify-between mb-2 font-light items-center gap-2.5 ">
            <span className="text-xs">June 27, 2021</span>

            <button
              className={` py-3 px-4 lg:py-3 lg:px-4 flex items-center gap-3 rounded-md whitespace-nowrap cursor-pointer shadow bg-[#FF6804] text-white text-sm font-medium hover:gap-5 hover:bg-[#251600] hover:text-white  transition-all duration-300 ease-linear delay-0`}
            >
              <div>Read More</div>
              <FaArrowRight className=" w-4 h-4 shrink-0" />
            </button>
          </div>
          <div className="flex mb-2 font-semibold items-center gap-2.5 ">
            <span className="text-sm">{`End Sars Protest`}</span>
          </div>

          <p className="line-clamp-3 mb-2 font-light text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            sint, sapiente iusto perferendis eum earum amet laboriosam dicta
            vitae quisquam saepe! Similique obcaecati ad repellendus ipsa
            ducimus, corporis cupiditate nulla.
          </p>
        </div>
      </Link>
    </BaseCard>
  );
};
