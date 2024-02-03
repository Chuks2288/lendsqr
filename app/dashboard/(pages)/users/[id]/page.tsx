"use client";

import BreadCrumb from "@/components/BreadCrumb"
import UserDetailsContent from "@/components/user/UserDetailsContent"
import UserDetailsHeader from "@/components/user/UserDetailsHeader"
import UserNavigation from "@/components/user/UserNavigation";
import { data } from "@/components/user/data"
import { MoveLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const Page = () => {

    const params = useParams();

    const dataInfo = data.find((user) => user.id === params?.id);

    return (
        <main className="mb-4 p-6">
            <BreadCrumb
                icon={<MoveLeft />}
                title="Back to Users"
                href="/dashboard/users"
            />

            <UserDetailsHeader
                id={dataInfo?.id}
                userImage={dataInfo?.customerImage}
                fullName={dataInfo?.fullName}
                rating={dataInfo?.UserTier}
                amount={dataInfo?.amount}
                accountNo={dataInfo?.accountNo}
                bankName={dataInfo?.bankName}
            />

        </main>
    )
}

export default Page