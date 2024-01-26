import Image from "next/image";


interface UserGridBoxProps {
    icon: string;
    title: string;
    stat: string;
    bgColor?: string;
}

const UserGridBox = ({
    icon,
    title,
    stat,
    bgColor
}: UserGridBoxProps) => {

    return (

        <div className="flex flex-col h-[10rem] justify-center pl-5 bg-white gap-2 shadow-md rounded-[5px]">
            <span className="rounded-full w-8 h-8 flex justify-center items-center"
                style={{
                    backgroundColor: bgColor,
                    opacity: "0.1",
                }}
            >
                <Image
                    src={icon}
                    alt="image"
                    width="16"
                    height="16"
                    objectFit="cover z-50"
                />
            </span>

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