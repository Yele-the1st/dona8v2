import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";
import { HeartHandshake, ShieldCheck, Zap } from "lucide-react";

interface MoreInfoProps {}

const MoreInfo: FC<MoreInfoProps> = ({}) => {
  return (
    <div className=" text-[#251600] bg-[#FAFAF3] py-10">
      <div className="">
        <div className="container  !px-5 flex flex-col items-center justify-center">
          <div className=" grid gap-x-20 gap-y-7 items-center grid-cols-4 ">
            <div className=" col-span-full flex flex-col items-center md:items-start md:col-span-2">
              <h1 className=" text-center md:text-start text-4xl sm:text-6xl font-bold">
                We can Save More Lifes with you
              </h1>
              <p className=" text-center md:text-start  mt-4 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo sed eligendi expedita quo reprehenderit, molestiae
              </p>
              <div className=" shadow-xl mt-6 overflow-hidden w-full max-w-[400px] rounded-xl bg-[#251600]  bg-left-top bg-no-repeat bg-[url(/23.png)] bg-[length:40px_140px]">
                <div className=" bg-right-bottom space-x-6 w-full max-w-[420px] flex items-center p-6 z-10 bg-no-repeat bg-[url(/24.png)] bg-[length:80px_20px]">
                  <div className=" h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      className="w-full h-full object-cover"
                      src={`/officer.jpeg`}
                      alt=""
                      height={400}
                      width={400}
                    />
                  </div>
                  <div className=" text-white font-bold">
                    <h1>{`"Make big changes and help the world."`}</h1>
                    <p className=" mt-1 text-xs font-normal ">
                      <span className=" text-[#FF6804] font-bold ">
                        Ayobami Akinnuga
                      </span>{" "}
                      Donations Officer{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-full md:col-span-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className=" p-6 rounded-xl hover:shadow-md borde text-[#251600] max-h-max">
                  {/* <div className=" p-4 bg-[#DCE1C6] w-fit rounded-3xl">
                    <ShieldCheck className=" w-7 h-7 " />
                  </div> */}
                  <div className=" h-28 w-full shrink-0 overflow-hidden rounded-xl">
                    <Image
                      className="w-full h-full object-cover"
                      src={`/13.webp`}
                      alt=""
                      height={400}
                      width={400}
                    />
                  </div>

                  <div>
                    <h1 className=" font-extrabold text-2xl py-4">
                      Verified Campaigns
                    </h1>
                    <p className="">
                      Our platform verifies all campaigns to ensure that they
                      are legitimate and align with our mission of
                    </p>
                  </div>
                </div>
                <div className=" p-6 rounded-xl hover:shadow-md borde text-[#251600] max-h-max">
                  {/* <div className=" p-4 bg-[#DCE1C6] w-fit rounded-3xl">
                    <Zap className=" w-7 h-7 " />
                  </div> */}

                  <div className=" h-28 w-full shrink-0 overflow-hidden rounded-xl">
                    <Image
                      className="w-full h-full object-cover"
                      src={`/11.webp`}
                      alt=""
                      height={400}
                      width={400}
                    />
                  </div>

                  <div>
                    <h1 className=" font-extrabold text-2xl py-4">
                      Quick setup
                    </h1>
                    <p className="">
                      Creating a campaign or personal fundraising page on our
                      platform is simple and straightforward.
                    </p>
                  </div>
                </div>
                <div className=" p-6 rounded-xl hover:shadow-md borde text-[#251600] max-h-max">
                  {/* <div className=" p-4 bg-[#DCE1C6] w-fit rounded-3xl">
                    <HeartHandshake className=" w-7 h-7 " />
                  </div> */}

                  <div className=" h-28 w-full shrink-0 overflow-hidden rounded-xl">
                    <Image
                      className="w-full h-full object-cover"
                      src={`/12.webp`}
                      alt=""
                      height={400}
                      width={400}
                    />
                  </div>

                  <div>
                    <h1 className=" font-extrabold text-2xl py-4">
                      Social reach
                    </h1>
                    <p className="">
                      We understand the power of social media in spreading
                      awareness and raising funds for causes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
