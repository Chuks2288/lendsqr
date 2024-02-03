"use client";

import ImageSection from "@/components/auth/ImageSection";
import LoginSection from "@/components/auth/LoginSection";



const Page = () => {

    return (
        <main className="grid place-items-center h-screen">
            <div className="grid lg:grid-cols-2 grid-cols-1 w-full">

                <ImageSection />

                <LoginSection />
            </div>
        </main>
    );
};

export default Page;