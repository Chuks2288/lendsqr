import Image from "next/image";

interface AvatarProps {
    src?: string | undefined | null;
    width?: number;
    height?: number;
}

const Avatar = ({
    src,
    width,
    height,
}: AvatarProps) => {
    return (
        <Image
            src={"/images/placeholder.png" || src}
            alt="profile"
            // width={25 || width}
            // height={25 || height}
            width={width}
            height={height}
            className="object-cover rounded-full"
        />
    )
}

export default Avatar