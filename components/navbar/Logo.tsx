"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {

    const router = useRouter();


    return (
        <Link href="/dashboard" className="cursor-pointer">
            <Image
                onClick={() => router.push("/dashboard")}
                src="/images/logo.png"
                alt="logo"
                width="100"
                height="100"
                priority
            />
        </Link>
    )
}

export default Logo