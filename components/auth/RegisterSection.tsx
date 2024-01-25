"use client";

import axios from "axios";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { Button } from "../ui/button";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



const formSchema = z.object({
    name: z.string().min(1, {
        message: "Server name is required"
    }),
    email: z.string().email({
        message: "Please enter a validvalid email"
    }),
    password: z.string().min(1, {
        message: "Please enter your password"
    }),
});

const RegisterSection = () => {

    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // console.log(values);

        try {
            await axios.post("/api/register", values);
            form.reset();
            router.refresh();
            toast.success("Registration successful");
            router.push("/signin");
        } catch (error: any) {
            console.log(error);
            toast.error("Registration Error");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center p-8 md:p-0">
            <div className="py-8">
                <h1 className="font-extrabold text-blue-70 text-3xl">Welcome!</h1>
                <p className="text-md text-blue-50">Registration</p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="">
                    <div className="space-y-4">
                        {/* FormField for email */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem >
                                    <FormControl>
                                        <Input
                                            disabled={isLoading}
                                            placeholder="Full Name"
                                            {...field}
                                            className="w-full lg:w-[23rem] text-xsm border-2 border-[#FF] py-6 text-[#545F7D] rounded-[7px]"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                                            className="w-full lg:w-[23rem] text-xsm border-2 border-[#FF] py-6 text-[#545F7D] rounded-[7px]"
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
                                            className="w-full lg:w-[23rem] text-xsm border-2 
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

                        <h4 className="font-semibold">
                            Already have an account?
                            <span
                                className="text-green-70 pl-2 cursor-pointer"
                                onClick={() => router.push("/signin")}
                            >
                                Sign In
                            </span>
                        </h4>

                        <Button
                            disabled={isLoading}
                            title={
                                isLoading ? (
                                    <Loader2
                                        className="animate-spin w-5 h-5"
                                    />
                                ) : "Sign Up"
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

export default RegisterSection;