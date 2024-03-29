"use client";

import ImageSection from "@/components/auth/ImageSection";
import RegisterSection from "@/components/auth/RegisterSection";



const Page = () => {

    return (
        <main className="grid place-items-center h-screen">
            <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-[60vh]">

                <ImageSection />

                <RegisterSection />
            </div>
        </main>
    );
};

export default Page;