"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../navigation/CustomButton";

import Link from "next/link";
import { BiSolidDonateHeart } from "react-icons/bi";
import Button2 from "../navigation/CustomButton2";

export const Showcase = () => (
  <section
    id="sample-resumes"
    className="relative pt-40 sm:pt-32 pb-12 bg-[#DCE1C7] text-[#251600]"
  >
    <div className="container !px-5 flex flex-col gap-12 lg:min-h-[600px] lg:flex-row lg:items-start">
      <div className="space-y-4 lg:mt-16 lg:basis-[500px]">
        <h2 className=" text-4xl sm:text-6xl font-bold">{`Go beyond donations, lend your skills to charity.`}</h2>

        <p className="leading-relaxed">
          {`Our platform is designed for individuals, groups, and organizations to come together and support charitable projects in their communities and around the world.`}
        </p>
        <div className=" sm:flex items-center sm:space-x-2">
          <Link href={`/auth/login`}>
            <Button2 className=" w-fit ">{`Get Started`}</Button2>
          </Link>
        </div>
      </div>

      <div className="w-full overflow-hidden lg:absolute lg:right-0 lg:max-w-[55%]">
        <motion.div
          animate={{
            x: [0, templatesList.length * 200 * -1],
            transition: {
              x: {
                duration: 30,
                repeat: Infinity,
                repeatType: "mirror",
              },
            },
          }}
          className="flex items-center gap-x-6"
        >
          {templatesList.map((template, index) => (
            <motion.div
              key={index}
              className="max-w-none flex-none"
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Image
                alt={template}
                width={400}
                height={400}
                loading="lazy"
                src={template}
                className=" aspect-[1/1.4142] h-[400px] rounded object-cover lg:h-[600px]"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 bg-gradient-to-r from-[#DCE1C7] to-transparent lg:block" />
      </div>
    </div>
  </section>
);

export const templatesList = ["/3.webp", "/4.webp", "/1.webp"] as const;
