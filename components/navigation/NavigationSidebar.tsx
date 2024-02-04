"use client";

import { Suspense, useEffect, useState } from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import NavigationAction from "./NavigationAction";
import { NavigationItem } from "./NavigationItem";
import { dashboard } from "./data";
import NavigationTitle from "./NavigationTitle";
import NavigationSignOut from "./NavigationSignOut";


const NavigationSidebar = () => {

    return (
        <ScrollArea className="bg-white h-full shadow-sm border-r-[1px] space-y-4">
            <NavigationAction />



            <div className="my-4">
                {dashboard.map((items) => (
                    <NavigationTitle title={items.title} key={items.title}>
                        {items.content.map((item) => (
                            <NavigationItem
                                key={item.id}
                                id={item.id}
                                icon={item.icon}
                                subTitle={item.subTitle}
                                path={item.path}
                            />
                        ))}


                    </NavigationTitle>
                ))}

            </div>

            <NavigationSignOut />

            <ScrollBar orientation="vertical" />
        </ScrollArea>
    )
}

export default NavigationSidebar;