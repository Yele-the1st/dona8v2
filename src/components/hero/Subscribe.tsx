import { Input } from "../ui/input";

export default function Subscribe() {
  return (
    <div className="container bg-white py-10  !px-5 flex flex-col items-center justify-center">
      <div className=" bg-[#DCE1C6] p-10 rounded-2xl grid gap-x-20 gap-y-7 items-center grid-cols-1 md:grid-cols-5 ">
        <div className=" col-span-full  md:col-span-3">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            Subscribe to our newsletter.
          </h2>
          <p className="mt-4 text-lg leading-8 ">
            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
            velit quis. Duis tempor incididunt dolore.
          </p>
        </div>
        <div className=" col-span-full flex gap-x-4 md:col-span-2">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <Input
            className=" bg-black/10 h-full py-4 border-none  placeholder:text-black/80"
            placeholder="Email address..."
          />
          <button
            className={` py-3 px-4 lg:py-3 lg:px-4 flex items-center gap-3 rounded-md whitespace-nowrap cursor-pointer shadow bg-[#FF6804] text-white text-sm font-medium hover:gap-5 hover:bg-[#251600] hover:text-white  transition-all duration-300 ease-linear delay-0`}
          >
            <div>Subscribe</div>
          </button>
        </div>
      </div>
    </div>
  );
}
