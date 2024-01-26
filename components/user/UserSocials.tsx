import Header from "../Header"

interface UserSocialsProps {
    id: string | undefined,
    twitter: string | undefined,
    facebook: string | undefined,
    instagram: string | undefined,
}

const UserSocials = ({
    id,
    twitter,
    facebook,
    instagram,
}: UserSocialsProps) => {
    const UserInfo = [
        {
            title: "Twitter",
            text: `${twitter}`,
        },
        {
            title: "Facebook",
            text: `${facebook}`,
        },
        {
            title: "Instagram",
            text: `${instagram}`,
        },
    ]

    return (
        <div className="flex flex-col gap-5">
            <Header
                subTitle="Socials"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {UserInfo.map(({ title, text }) => (
                    <div
                        className="flex flex-col gap-2 mb-4 text-blue-70"
                        key={title}
                    >
                        <h4 className="text-[12px] uppercase">
                            {title}
                        </h4>

                        <p className="text-sm font-bold">
                            {text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserSocials