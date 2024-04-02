import Image from "next/image";
import { FC } from "react";

interface HowtoProps {}

const Howto: FC<HowtoProps> = ({}) => {
  return (
    <div className=" py-20 text-[#251600] bg-[#FAFAF3]">
      <div className="container !px-5 flex flex-col gap-12 ">
        <div className=" flex flex-col items-center lg:items-start space-y-4">
          <h1 className=" font-bold text-4xl sm:text-5xl">
            It Takes just few Minutes!
          </h1>
          <p className=" text-lg max-w-xl ">
            {`  Our platform is easy to use, whether you're an individual, a group,
            or an organization. Here's a quick guide on how to get started.`}
          </p>
        </div>
        <ul className="grid gap-4 grid-cols-1 md:gridcols-2 lg:grid-cols-3 w-full  text-center">
          <li className="flex flex-col items-center space-y-4 relative">
            <Image
              src="/a1.png"
              width="250"
              height="250"
              alt="create a form"
              className="bg-white p-4 shadow-sm border rounded-md"
            />
            <Image
              src="/arrow.png"
              width="125"
              height="125"
              alt="arrow"
              className="absolute hidden lg:block top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
            />
            <p>1. Create Account</p>
          </li>
          <li className="flex flex-col items-center space-y-4 relative">
            <Image
              src="/a2.png"
              width="250"
              height="250"
              alt="update the form"
              className="bg-white p-4 shadow-sm border rounded-md"
            />
            <Image
              src="/arrow.png"
              width="125"
              height="125"
              alt="arrow"
              className="absolute hidden lg:block top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 scale-x-[-1] rotate-180"
            />
            <p>2. Tell your story.</p>
          </li>
          <li className="flex flex-col items-center space-y-4 relative">
            <Image
              src="/a3.png"
              width="250"
              height="250"
              alt="check the analytics"
              className="bg-white p-4 shadow-sm border rounded-md"
            />
            <p>3. Share with family and friends.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Howto;
