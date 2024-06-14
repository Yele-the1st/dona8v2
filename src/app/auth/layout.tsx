"use client";

import { SocialAuth } from "@/components/auth/_components/social-auth";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-[#251600] bg-left-top bg-no-repeat bg-[url(/23.png)] bg-[length:100px_320px] text-white w-screen">
      <div className="relative my-4 flex w-full flex-col justify-center gap-y-8 px-12 sm:mx-auto sm:basis-[420px] sm:px-0 lg:basis-[480px] lg:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="h-24 w-24">
            <div className=" w-5 h-5 font-bold text-4xl">AfriCharity</div>
          </Link>
        </div>

        {children}

        <>
          <div className={cn("flex items-center gap-x-4")}>
            <hr className="flex-1" />
            <span className="text-xs font-medium">or continue with</span>
            <hr className="flex-1" />
          </div>

          <SocialAuth />
        </>
      </div>

      <div className="relative hidden lg:block lg:flex-1">
        <Image
          width={1920}
          height={1080}
          alt="Open books on a table"
          className="h-screen w-full object-cover object-center"
          src="/auth.webp"
        />

        <div className="absolute bottom-5 right-5 z-10 bg-primary/30 px-4 py-2 text-xs font-medium text-primary-foreground backdrop-blur-sm">
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://unsplash.com/photos/Oaqk7qqNh_c"
          >
            {`Photograph by Danny Mwebaza`}
          </a>
        </div>
      </div>
    </div>
  );
}
