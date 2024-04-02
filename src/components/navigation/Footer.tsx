"use client";

import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-[#251600] text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                Dona8
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-14 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase ">COMPANY</h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase ">
                PARTNERSHIP
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline ">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Become Affiliates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase ">
                RESOURCES
              </h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-white/5 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center">
            © 2024{" "}
            <Link href="/" className="hover:underline">
              Dona8™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link href="#" className=" ">
              <FacebookLogo size={20} />
              <span className="sr-only">Facebook page</span>
            </Link>

            <Link href="#" className=" ms-5">
              <TwitterLogo size={20} />
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link href="#" className=" ms-5">
              <InstagramLogo size={20} />
              <span className="sr-only">Instagram page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
