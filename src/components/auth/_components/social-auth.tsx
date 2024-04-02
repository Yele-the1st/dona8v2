import { BiLogoGoogle } from "react-icons/bi";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export const SocialAuth = () => {
  return (
    <div className="grid grid-cols-1">
      <Button
        asChild
        size="lg"
        className="w-full !bg-[#4285F4] !text-white hover:!bg-[#4285F4]/80"
      >
        <a href="/api/auth/google">
          <BiLogoGoogle className="mr-3 h-4 w-4" />
          {`Google`}
        </a>
      </Button>
    </div>
  );
};
