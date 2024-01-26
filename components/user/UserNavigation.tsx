import UserAppSystem from "@/app/dashboard/(pages)/users/userGeneral/UserAppSystem";
import UserBankDetails from "@/app/dashboard/(pages)/users/userGeneral/UserBankDetails";
import UserDocuments from "@/app/dashboard/(pages)/users/userGeneral/UserDocuments";
import UserGeneralDetails from "@/app/dashboard/(pages)/users/userGeneral/UserGeneralDetails";
import UserLoans from "@/app/dashboard/(pages)/users/userGeneral/UserLoans";
import UserSavings from "@/app/dashboard/(pages)/users/userGeneral/UserSavings";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation"
import UserScreenRender from "./UserScreenRender";


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
        <div className="">
            <div className="w-full bg-white px-5">
                {/* Mobile Navigation */}
                <div className="block lg:hidden">
                    <select
                        onChange={(e) => {
                            const selectedAction = e.target.value;
                            router.push(`?action=${selectedAction}`);
                        }}
                        value={currentAction}
                        className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md"
                    >
                        {SETUP_DATA.map((item) => (
                            <option key={item.name} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center justify-between gap-10 overflow-x-auto">
                    {SETUP_DATA.map((item) => (
                        <Link
                            href={`?action=${item.name}`}
                            className={cn(
                                "text-black text-sm pb-2 font-semibold ",
                                currentAction === item.name && "border-b-2 border-[#39CDCC] text-[#39CDCC] transition"
                            )}
                            key={item.name}
                        >
                            <p>{item.name}</p>
                        </Link>
                    ))}
                </div>

                {/* Content */}

            </div>
            <UserScreenRender currentScreen={renderScreens[currentAction]} />
        </div>

    )
}

export default UserNavigation