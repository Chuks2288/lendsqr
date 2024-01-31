"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react"

import { useMobileSidebar } from "@/hooks/useMobileSidebar";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavigationSidebar from "./navigation/NavigationSidebar";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const MobileToggle = () => {

    const pathname = usePathname();

    const [isMounted, setIsMounted] = useState(false);

    const onOpen = useMobileSidebar((state) => state.onOpen);
    const onClose = useMobileSidebar((state) => state.onClose);
    const isOpen = useMobileSidebar((state) => state.isOpen);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    useEffect(() => {
        onClose();
    }, [pathname, onClose])

    if (!isMounted) {
        return null;
    }

    return (
        <>

            <Button
                onClick={onOpen}
                variant="ghost"
                size="icon"
                className="md:hidden block"
                Icon={<Menu />}
            />

            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent
                    side="left"
                    className="border-none bg-white p-0 overflow-y-scroll no-scrollbar">
                    <NavigationSidebar />
                </SheetContent>
            </Sheet>
        </ >
    )
}

export default MobileToggle