"use client";

import { SafeUser } from "@/type";
import { Bell, ChevronDown } from "lucide-react";
import { useState } from "react";
import Avatar from "../Avatar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { signOut, useSession } from "next-auth/react";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu = ({
    currentUser
}: UserMenuProps) => {

    const router = useRouter();

    const [dropDown, setDropdown] = useState(false);

    const onClick = async () => {
        await signOut({ callbackUrl: '/signin' });
    };

    return (
        <div className="gap-5 flex items-center relative">
            <Link href="#" className="underline text-blue-70 cursor-pointer text-sm max-lg:hidden">
                Docs
            </Link>
            <div className="max-lg:hidden">
                <Bell size="15" />
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger
                    // onClick={() => setDropdown(!dropDown)}
                    className="flex items-center gap-2 cursor-pointer outline-none"

                >
                    <Avatar
                        src={currentUser?.image}
                        width={25}
                        height={25}
                    />

                    <h4 className="text-sm">
                        {currentUser?.name}
                    </h4>

                    <ChevronDown size="15" />

                </DropdownMenuTrigger>

                {/* <DropdownMenuContent>
                    <DropdownMenuItem
                        onClick={onClick}
                        className="z-50 cursor-pointer bg-white z-100"
                    >
                        Sign Out
                    </DropdownMenuItem> */}
                {/* </DropdownMenuContent> */}
            </DropdownMenu>
        </div >
    )
}

export default UserMenu