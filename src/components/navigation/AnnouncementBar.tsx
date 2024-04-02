import { url } from "inspector";
import { FC } from "react";

interface AnnouncementBarProps {}

const AnnouncementBar: FC<AnnouncementBarProps> = ({}) => {
  return (
    <div className=" bg-[#251600] bg-[url(/22.png)] bg-repeat-x bg-contain ">
      <div className="bg-gradient-to-r text-sm h-full py-2.5 px-6 from-[#251600] via-[#251600] text-white to-transparent">
        Reach out to{" "}
        <a
          className=" underline text-[#9F896A]"
          href="mailto:partnerships@dona8.com"
        >
          partnerships@dona8.com
        </a>{" "}
        to explore partnership opportunities and more.
      </div>
    </div>
  );
};

export default AnnouncementBar;

// bg-gradient-to-r from-[#251600] via-transparent to-transparent
