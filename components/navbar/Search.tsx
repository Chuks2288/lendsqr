"use client"

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command";
import { useParams, useRouter } from "next/navigation";


interface SearchBarProps {
    data: {
        label: string;
        type: any;
        data: {
            // icon: React.ReactNode;
            name: string;
            id: string;
        }[] | undefined
    }[]
}

const SearchBar = ({
    data,
}: SearchBarProps) => {

    const [open, setOpen] = useState(false);
    const router = useRouter();
    const params = useParams();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        }

        document.addEventListener("keydown", down);

        return () => document.removeEventListener("keydown", down);
    }, [])


    return (
        <>
            <div
                onClick={() => setOpen(true)}
                className="hidden md:flex items-center relative w-[20rem]">
                <input
                    type="text"
                    placeholder="Search for anything"
                    className="text-[13px] p-2 border w-full outline-none rounded-[10px]"
                />
                <div className="absolute right-0 bg-green-70 h-full px-2 flex justify-center 
                items-center rounded-e-[10px] cursor-pointer">
                    <Search className="text-white" size="15" />
                </div>
            </div>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search for anything" />
                <CommandList>
                    <CommandEmpty>
                        No Results found
                    </CommandEmpty>
                    {data.map(({ label, data, type }) => {

                        if (!data?.length) return null;

                        return (
                            <CommandGroup key={label} heading={label} className="bg-white">
                                {data?.map(({ id, name }: any) => {

                                    return (
                                        <CommandItem key={id} onSelect={() => onClick({ id, type })}>

                                            <span>{name}</span>
                                        </CommandItem>
                                    )
                                })}
                            </CommandGroup>
                        )
                    })}
                </CommandList>
            </CommandDialog>
        </>
    )
}

export default SearchBar;