
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
                <ScrollArea>
                    <SheetContent side="left" className="border-none bg-white p-0">
                        <div className="">
                            <NavigationSidebar />
                        </div>
                    </SheetContent>
                    <ScrollBar orientation="vertical" />
                </ScrollArea>
            </Sheet>
        </div >
    )
}

export default MobileToggle