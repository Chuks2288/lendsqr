"use client";

import BreadCrumb from "@/components/BreadCrumb"
import UserDetailsContent from "@/components/user/UserDetailsContent"
import UserDetailsHeader from "@/components/user/UserDetailsHeader"
import UserNavigation from "@/components/user/UserNavigation";
import { data } from "@/components/user/data"
import { MoveLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const page = () => {

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


            {/* 
            <UserDetailsContent
                id={dataInfo?.id}
                fullName={dataInfo?.fullName}
                contact={dataInfo?.contact}
                email={dataInfo?.email}
                bvn={dataInfo?.bvn}
                gender={dataInfo?.gender}
                maritalStatus={dataInfo?.maritalStatus}
                children={dataInfo?.children}
                residenceType={dataInfo?.ResidenceType}
                eductionLevel={dataInfo?.educationLevel}
                employmentStatus={dataInfo?.employmentStatus}
                employmentSector={dataInfo?.employmentSector}
                employmentDuration={dataInfo?.employmentDuration}
                officeEmail={dataInfo?.officeEmail}
                monthlyIncome={dataInfo?.monthlyIncome}
                loanRepayment={dataInfo?.loanRepayment}
                twitter={dataInfo?.twitter}
                facebook={dataInfo?.facebook}
                instagram={dataInfo?.instagram}
                guarantorFullName={dataInfo?.guarantorFullName}
                guarantorContact={dataInfo?.guarantorContact}
                guarantorEmail={dataInfo?.guarantorEmail}
                relationship={dataInfo?.relationship}
            /> */}
        </main>
    )
}

export default page