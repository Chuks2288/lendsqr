import { IconNode } from "lucide-react";
import Link from "next/link";


interface breadcrumbProps {
    icon: any;
    href: string;
    title: string;
}

const BreadCrumb = ({
    icon,
    href,
    title,
}: breadcrumbProps) => {
    return (
        <Link
            href={href}
            className="gap-2 flex items-center"
        >
            {icon}

            <p className="text-sm font-semibold">
                {title}
            </p>
        </Link>
    )
}

export default BreadCrumb