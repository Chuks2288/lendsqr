import { LogOut } from "lucide-react"
import { Separator } from "../ui/separator"
import { signOut } from "next-auth/react";

const NavigationSignOut = () => {

    const onClick = async () => {
        await signOut({ callbackUrl: '/signin' });
    };

    return (
        <div className="mt-[4rem] pb-[4rem]">
            <Separator className="bg-blue-70 w-full" />
            <div
                onClick={onClick}
                className="flex items-center gap-2 mt-5 pl-4 cursor-pointer"
            >
                <LogOut size="14" />

                <h4 className="text-blue-70">
                    Logout
                </h4>
            </div>
        </div>
    )
}

export default NavigationSignOut;