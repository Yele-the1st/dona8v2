"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { LoginSchema } from "@/schemas";
import { usePasswordToggle } from "@/hooks/use-password-toggle";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
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

type FormValues = z.infer<typeof LoginSchema>;

const LoginPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  usePasswordToggle(formRef);

  const form = useForm<FormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: FormValues) => {};

  const loading = false;

  return (
    <div className="space-y-8">
      <div className="space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">{`Sign in to your account`}</h2>
        <h6>
          <span className="opacity-75">{`Don't have an account?`}</span>
          <Button asChild variant="link" className="px-1.5 text-white">
            <Link href="/auth/register">
              Create one now
              <ArrowRight className="ml-1 w-4 h-4" />
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
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{`Email`}</FormLabel>
                  <FormControl>
                    <Input
                      className=" border-[#9F896A] placeholder:text-white/75"
                      placeholder="john.doe@example.com"
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
                      className="border-[#9F896A]"
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

            <div className="mt-4 flex items-center gap-x-4">
              <Button
                type="submit"
                disabled={loading}
                className="flex-1 bg-[#FF6804]"
              >
                {`Sign in`}
              </Button>

              <Button asChild variant="link" className="px-4 text-white">
                <Link href="/auth/forgot-password">{`Forgot Password?`}</Link>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
