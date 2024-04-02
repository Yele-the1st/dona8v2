import { FundraiserCard } from "@/components/cards/FundraiserCard";
import FundraiserDetails from "@/components/fundraiser/FundraiserDetails";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className=" bg-white">
      <FundraiserDetails />

      <div className=" w-full py-10 container ">
        <div className=" mb-6 text-2xl md:text-4xl font-bold">
          Similar Campaign
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="">
              <FundraiserCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
