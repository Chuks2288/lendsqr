"use client";

import Image from "next/image";

const ImageSection = () => {
    return (
        <div className="hidden md:block relative">
            <div className="">
                <Image
                    src="/images/authImage.svg"
                    alt="auth image"
                    fill
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    )
}

export default ImageSection