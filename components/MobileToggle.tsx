
import { Menu } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import NavigationSidebar from "./navigation/NavigationSidebar";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const MobileToggle = () => {
    return (
        <div className="">
            <Sheet>
                <SheetTrigger>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        Icon={<Menu />}
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white p-0 overflow-y-scroll no-scrollbar">
                    <ScrollArea>
                        <div className="">
                            <NavigationSidebar />
                        </div>
                        <ScrollBar orientation="vertical" />
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </div >
    )
}

export default MobileToggle