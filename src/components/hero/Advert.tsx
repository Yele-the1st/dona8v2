import Image from "next/image";
import { FC } from "react";
import Button2 from "../navigation/CustomButton2";

interface AdvertProps {}

const Advert: FC<AdvertProps> = ({}) => {
  return (
    <div className="container bg-white  !px-5 flex flex-col items-center justify-center">
      <div className=" bg-[#251600] p-10 rounded-2xl text-white grid gap-x-20 gap-y-7 items-center grid-cols-1 md:grid-cols-5 ">
        <div className=" col-span-full  md:col-span-2">
          <div className=" shadow-md w-full flex items-center justify-center rounded-xl">
            <Image
              src={`/auth.webp`}
              alt=""
              className="max-w-full rounded-xl h-auto"
              height={400}
              width={400}
            />
          </div>
        </div>

        <div className=" col-span-full  space-y-4 md:col-span-3">
          <h1 className=" text-3xl text-center md:text-start sm:text-6xl font-bold">
            Ready to get started? Join thousands of others today.
          </h1>
          <p className=" mt-4  md:text-lg text-center md:text-start">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not.
          </p>
          <div className=" flex justify-center md:justify-start">
            <Button2 className=" whitespace-nowrap">Donate Now</Button2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advert;
