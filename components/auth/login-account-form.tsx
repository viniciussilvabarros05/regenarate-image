"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { browserClient } from "@/utils/supabase/browser";
import { useRouter } from "next/navigation";

export function LoginAccountForm() {
  const router = useRouter();
  const formSchema = z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Must be a valid email." }),
    password: z
      .string({ required_error: "Password is required" })
      .min(7, { message: "Password must have at latest 7 characters" })
      .max(12, { message: "Password must have a  maximum of 12 characters" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const supabase = browserClient();
      const { email, password } = values;

      const {
        error,
        data: { session },
      } = await supabase.auth.signInWithPassword({ email, password });
      form.reset();
      router.push("/");
    } catch (error) {
      console.log("LoginAccountForm:onsubmit", error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-2"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input type="email" placeholder="E-mail" {...field}></Input>
              </FormControl>
              <FormDescription>This is your E-mail</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field}></Input>
              </FormControl>
              <FormDescription>This is your Password</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
}
