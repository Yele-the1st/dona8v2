import Image from "next/image";
import { FC } from "react";

interface TestimonialsProps {}

const Testimonials: FC<TestimonialsProps> = ({}) => {
  return (
    <div className=" py-20 text-[#251600] bg-white  relative mb-40 mt-0 scroll-mt-24 focus:outline-none md:max-h-[66rem] overflow-hidden lg:max-h-[48rem]">
      <div className="container !px-5 flex flex-col gap-12 ">
        <div className=" flex flex-col items-center space-y-4">
          <h1 className=" font-bold text-4xl max-w-xl sm:text-5xl">
            What hundreds of happy communities are saying
          </h1>
          <p className=" text-lg max-w-xl ">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare`}
          </p>
        </div>
        <div className=" relative mt-14 grid grid-cols-1 gap-6 overflow-hidden px-0.5 pt-2 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className=" text-sm leading-6">
              <figure className=" hover:shadow-xl relative flex flex-col-reverse rounded-lg border bg-white p-6 transition-all hover:-translate-y-0.5">
                <blockquote className=" mt-4 text-slate-700">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias provident mollitia architecto quibusdam quisquam
                    eos quaerat.
                  </p>
                </blockquote>
                <figcaption className=" flex items-center space-x-4">
                  <Image
                    src={`/officer.jpeg`}
                    alt="testimonials"
                    width="50"
                    height="50"
                    loading="lazy"
                    className=" h-11 w-11 flex-none rounded-full object-cover"
                  />
                  <div className="flex-auto">
                    <div className=" text-sm font-medium text-slate-900">
                      Ayobami Akinnuga
                    </div>
                    <div className=" text-sm text-slate-500">
                      {" "}
                      COO @ Tramango
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
          <a
            href="#testimonails"
            className=" pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pb-8 pt-12"
          >
            <button
              className={` inline-flex w-fit cursor-pointer items-center justify-center rounded-md sm:text-sm font-medium disabled:pointer-events-none disabled:opacity-60 transition-all ease-in-out focus-visible:outline-2 focus-visible:outline-yellow-900 focus-visible:outline-offset-2 relative group bg-gradient-to-b hover:opacity-90 active:scale-[99%] duration-200 shadow-sm pointer-events-auto from-[#251600]/90 to-[#251600] px-3.5 py-2.5 text-white hover:from-[#251600]/85 hover:to-[#251600]`}
            >
              Show more
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
