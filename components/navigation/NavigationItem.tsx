import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { Skeleton } from "../ui/skeleton";

interface NavigationItemProps {
    id: string;
    icon: string;
    subTitle: string;
    path: string;
}

export const NavigationItem = ({
    id,
    icon,
    subTitle,
    path
}: NavigationItemProps) => {

    const router = useRouter();
    const pathname = usePathname();


    return (
        <div
            onClick={() => router.push(path)}
            className={cn(
                "flex text-blue-70 py-2 relative cursor-pointer mb-4 hover:bg-cyan-50 transition",
                pathname === path && "bg-cyan-50"
            )}
        >
            <div className={
                cn("absolute left-0 top-0 bg-green-70",
                    pathname === path && "w-1 h-10"
                )}
            />
            <div className="flex items-center gap-2 pl-4">
                <Image
                    src={icon}
                    alt={subTitle}
                    width={14}
                    height={14}
                    className="object-cover"
                />
                <h4>
                    {subTitle}
                </h4>
            </div>
        </div>
    )
}

