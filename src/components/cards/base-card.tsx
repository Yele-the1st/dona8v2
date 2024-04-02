"use client";

import { FC } from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

interface BaseCardProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const BaseCard: FC<BaseCardProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "relative flex border-none rounded-2xl overflow-hidden scale-100 cursor-pointer items-center justify-center bg-[#EDF1DC]  p-0 transition-transform active:scale-95",
        className
      )}
    >
      {children}
    </Card>
  );
};
