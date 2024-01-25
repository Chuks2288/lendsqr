"use client"

import { dashboard } from "@/components/navigation/data";
import { useRouter } from "next/navigation"
import { useEffect } from "react";


const page = () => {

    const router = useRouter();


    useEffect(() => {
        router.push("/dashboard/users");
    }, []);


    return router.push("")
}

export default page