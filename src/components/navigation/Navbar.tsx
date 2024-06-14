"use client";

import Button from "./CustomButton";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { motion } from "framer-motion";
import { BiSolidDonateHeart } from "react-icons/bi";
import AnnouncementBar from "./AnnouncementBar";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={` w-full z-20 flex flex-col justify-end items-center px-6 fixed top-0`}
    >
      <div className=" fixed top-0 inset-x-0 h-fit z-[10] w-full  ">
        <AnnouncementBar />
        <div className=" h-16 w-full justify-between  backdrop-blur-md bg-[#DCE1C7] pl-6 pr-6 flex items-center relative">
          <Link href={`/`} className=" font-bold text-[#251600] text-3xl">
            AfriCharity
          </Link>

          <div className=" hidden md:flex items-center text-base space-x-2">
            <Link
              href={`/explore`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "hover:bg-[#EDF1DC] text-base"
              )}
            >
              Explore
            </Link>
            <Link
              href={`/create`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "hover:bg-[#EDF1DC] text-base"
              )}
            >
              Start Campaign
            </Link>{" "}
            <Link
              href={`#`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "hover:bg-[#EDF1DC] text-base"
              )}
            >
              About us
            </Link>
            <Link
              href={`#`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "hover:bg-[#EDF1DC] text-base"
              )}
            >
              Blog
            </Link>
          </div>

          <div className="   items-center flex">
            <div className=" flex items-center space-x-2">
              <Link href={`/explore`}>
                <Button className=" " icon={BiSolidDonateHeart}>
                  {`Donate now`}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
