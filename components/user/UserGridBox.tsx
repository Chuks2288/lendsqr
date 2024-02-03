// "use client"

import { IconType } from "react-icons";


interface UserGridBoxProps {
    icon: IconType;
    title: string;
    stat: string;
    textColor: string;
    bgColor?: string;
}

const UserGridBox = ({
    icon: Icon,
    title,
    stat,
    textColor,
    bgColor
}: UserGridBoxProps) => {

    return (

        <div className="flex flex-col h-[10rem] justify-center pl-5 bg-white gap-2 shadow-md rounded-[5px]">
            <div className="rounded-full w-8 h-8 flex justify-center items-center"
                style={{
                    backgroundColor: bgColor,
                    opacity: "0.7",
                }}
            >
                <Icon />
            </div>

            <h4 className="text-blue-70 font-bold text-sm">
                {title}
            </h4>

            <h4 className="text-blue-70 font-bold text-xl">
                {stat}
            </h4>
        </div>
    )
}

export default UserGridBox