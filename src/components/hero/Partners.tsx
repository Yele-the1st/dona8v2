import Image from "next/image";
import { FC } from "react";

interface PartnersProps {}

const Partners: FC<PartnersProps> = ({}) => {
  return (
    <div className=" bg-[#251600] bg-left-bottom bg-no-repeat bg-[url(/22.png)] bg-[length:250px_40px] text-white py-20">
      <div className="">
        <div className="container  !px-5 flex flex-col items-center justify-center">
          <div className=" grid gap-x-20 gap-y-7 items-center grid-cols-5 ">
            <div className=" col-span-full md:col-span-2">
              <h1 className=" text-4xl sm:text-6xl font-bold">Our Partners</h1>
              <p className=" mt-4 text-lg">
                We are proud to partner with a wide range of organizations,
                businesses, and individuals who share our mission of supporting
                charitable causes
              </p>
            </div>
            <div className=" col-span-full md:col-span-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-[#EDF6EE] h-24 shadow-md border w-full flex items-center justify-center rounded-xl p-8">
                  <Image
                    src={`/logo2.png`}
                    alt=""
                    className="max-w-full h-auto"
                    height={400}
                    width={400}
                  />
                </div>
                <div className="bg-[#EDF6EE] h-24 shadow-md border w-full flex items-center justify-center rounded-xl p-8">
                  <Image
                    src={`/logo3.png`}
                    alt=""
                    className="max-w-full h-auto"
                    height={400}
                    width={400}
                  />
                </div>
                <div className="bg-[#EDF6EE] h-24 shadow-md border w-full flex items-center justify-center rounded-xl p-8">
                  <Image
                    src={`/logo4.svg`}
                    alt=""
                    className="max-w-full h-auto"
                    height={400}
                    width={400}
                  />
                </div>
                <div className="bg-[#EDF6EE] h-24 shadow-md border w-full flex items-center justify-center rounded-xl p-8">
                  <Image
                    src={`/logo5.png`}
                    alt=""
                    className="max-w-full h-auto"
                    height={400}
                    width={400}
                  />
                </div>
                <div className="bg-[#EDF6EE] h-24 shadow-md border w-full flex items-center justify-center rounded-xl p-8">
                  <Image
                    src={`/logo6.png`}
                    alt=""
                    className="max-w-full h-auto"
                    height={400}
                    width={400}
                  />
                </div>
                <div className="bg-[#EDF6EE] h-24 shadow-md border w-full flex items-center justify-center rounded-xl p-8">
                  <Image
                    src={`/logo9.png`}
                    alt=""
                    className="max-w-full h-auto"
                    height={400}
                    width={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
