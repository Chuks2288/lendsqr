import UserAppSystem from "@/app/dashboard/(pages)/users/userGeneral/UserAppSystem";
import UserBankDetails from "@/app/dashboard/(pages)/users/userGeneral/UserBankDetails";
import UserDocuments from "@/app/dashboard/(pages)/users/userGeneral/UserDocuments";
import UserGeneralDetails from "@/app/dashboard/(pages)/users/userGeneral/UserGeneralDetails";
import UserLoans from "@/app/dashboard/(pages)/users/userGeneral/UserLoans";
import UserSavings from "@/app/dashboard/(pages)/users/userGeneral/UserSavings";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation"


type Path =
    | "General Details"
    | "Documents"
    | "Bank Details"
    | "Loans"
    | "Savings"
    | "App System";

const SETUP_DATA = [
    {
        name: "General Details",
    },
    {
        name: "Documents",
    },
    {
        name: "Bank Details",
    },
    {
        name: "Loans",
    },
    {
        name: "Savings",
    },
    {
        name: "App and System",
    },
]

const UserNavigation = () => {

    const router = useRouter();
    const params = useSearchParams();
    const currentAction = (params?.get("action") ||
        "General Details") as Path

    const renderScreens = {
        "General Details": <UserGeneralDetails />,
        "Documents": <UserDocuments />,
        "Bank Details": <UserBankDetails />,
        "Loans": <UserLoans />,
        "Savings": <UserSavings />,
        "App System": <UserAppSystem />,
    } satisfies Record<Path, JSX.Element>

    return (
        <div className="w-full">
            <div className="w-full flex items-center justify-between">
                {SETUP_DATA.map((item) => (
                    <Link
                        href={`?action=${item.name}`}
                        className={cn(
                            "text-black text-sm pb-2 font-semibold",
                            currentAction === item.name && "border-b-2 border-[#39CDCC] text-[#39CDCC] transition"
                        )}
                        key={item.name}
                    >
                        <p>{item.name}</p>
                    </Link>
                ))}
            </div>

            <div className="h-max mt-10">
                {renderScreens[currentAction]}
            </div>
        </div>
    )
}

export default UserNavigation