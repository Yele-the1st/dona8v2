"use client";

import { FundraiserCard } from "../cards/FundraiserCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Button2 from "../navigation/CustomButton2";
import Link from "next/link";

export const Fundraiser = () => {
  return (
    <section className="relative bg-[#251600] bg-left-top bg-no-repeat bg-[url(/23.png)] bg-[length:100px_320px] text-white py-16 ">
      <div className="container !px-5  w-full">
        <div className="space-y-6 leading-loose">
          <h2 className=" text-4xl sm:text-5xl font-bold">{`Top Fundraisers Near You`}</h2>
          <div className=" w-full px-10">
            <Carousel
              opts={{
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-1">
                {Array.from({ length: 6 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 px-2 lg:basis-1/3"
                  >
                    <FundraiserCard />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className=" bg-[#FF6804] border-none" />
              <CarouselNext className=" bg-[#FF6804] border-none" />
            </Carousel>
          </div>

          <div className="flex items-center justify-center">
            <Button2 className=" w-fit " asChild>
              <Link href={`/login`}>{`Explore More`}</Link>
            </Button2>
          </div>
        </div>
      </div>
    </section>
  );
};
