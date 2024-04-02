"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArticleCard } from "../cards/ArticleCard";
import Button from "../navigation/CustomButton";

export const Article = () => {
  return (
    <section className="relative py-16 sm:py-24 ">
      <div className="container !px-5  w-full">
        <div className="space-y-6 leading-loose">
          <div className=" flex justify-between">
            <h2 className=" text-4xl sm:text-5xl font-bold">{`Our Latest Articles & Resources`}</h2>
          </div>
          <div className=" w-full mt-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="">
                  <ArticleCard />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Button className=" w-fit " asChild>
              <Link href={`/login`}>{`View all article`}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
