"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { usePasswordToggle } from "@/hooks/use-password-toggle";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useRef } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { RegisterSchema } from "@/schemas";

type FormValues = z.infer<typeof RegisterSchema>;

export const RegisterPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  usePasswordToggle(formRef);

  const form = useForm<FormValues>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormValues) => {};
  const loading = false;

  return (
    <div className="space-y-8">
      <div className="space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">{`Create a new account`}</h2>
        <h6>
          <span className="opacity-75">{`Already have an account?`}</span>
          <Button asChild variant="link" className="px-1.5 text-white">
            <Link href="/auth/login">
              {`Sign in now`} <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
        </h6>
      </div>
      <div>
        <Form {...form}>
          <form
            ref={formRef}
            className="flex flex-col gap-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{`Name`}</FormLabel>
                  <FormControl>
                    <Input
                      className=" border-[#9F896A] placeholder:text-white/75"
                      placeholder={"John Doe"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{`Email`}</FormLabel>
                  <FormControl>
                    <Input
                      className=" border-[#9F896A] placeholder:text-white/75"
                      placeholder={"john.doe@example.com"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{`Password`}</FormLabel>
                  <FormControl>
                    <Input
                      className=" border-[#9F896A] placeholder:text-white/75"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-white/75">
                    Hold <code className="text-xs font-bold">Ctrl</code> to
                    display your password temporarily.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={loading} className="mt-4 bg-[#FF6804] w-full">
              {`Sign up`}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
