"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { signIn } from 'next-auth/react';

import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { Button } from "../ui/button";

import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";



const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(1, { message: "Please enter your password" }),
});

const LoginSection = () => {

    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const callback = await signIn("credentials", {
                ...values,
                redirect: false,
            });

            if (callback?.ok) {
                toast.success("Logged in Successfully");
                router.refresh();
                router.push("/dashboard");
            }

            if (callback?.error) {
                toast.error("Unable to login");
            }
        } catch (error) {
            console.error("Error during login:", error);
            toast.error("An unexpected error occurred during login");
        }
    };


    return (
        <div className="flex flex-col justify-center items-center p-8 md:p-0 w-full">

            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-[60%] px-8">
                    <div className="py-8">
                        <h1 className="font-extrabold text-blue-70 text-3xl">Welcome!</h1>
                        <p className="text-md text-blue-50">Enter details to login</p>
                    </div>
                    <div className="space-y-4 w-full">
                        {/* FormField for email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem >
                                    <FormControl>
                                        <Input
                                            disabled={isLoading}
                                            placeholder="Email"
                                            {...field}
                                            className="w-full text-xsm border-2 border-[#FF] py-6 text-[#545F7D] rounded-[7px]"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* FormField for password */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            disabled={isLoading}
                                            placeholder="Password"
                                            {...field}
                                            className="w-full text-xsm border-2 
                                            border-[#FF] py-6 text-[#545F7D] rounded-[7px]"
                                        />
                                        {/* <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="text-blue-500 hover:underline focus:outline-none"
                                                >
                                                    {showPassword ? "Hide" : "Show"}
                                                </button> */}
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <h4 className="text-green-70 font-semibold">
                            Forgot Password ?
                        </h4>
                        <Button
                            disabled={isLoading}
                            title={
                                isLoading ? (
                                    <Loader2
                                        className="animate-spin w-5 h-5"
                                    />
                                ) : "Log In"
                            }
                            className="bg-green-70 text-white w-full rounded-[7px] uppercase hover:bg-green-70"
                            size="lg"
                        />
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default LoginSection