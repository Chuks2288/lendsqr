"use client"

import { dashboard } from "@/components/navigation/data";
import { useRouter } from "next/navigation"
import { useEffect } from "react";


const Page = () => {

    const router = useRouter();


    useEffect(() => {
        router.push("/dashboard/users");
    }, []);


    return null
}

export default Page;