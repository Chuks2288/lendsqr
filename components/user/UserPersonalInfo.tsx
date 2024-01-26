import Header from "../Header"

interface UserPersonalInfoProps {
    id: string | undefined,
    fullName: string | undefined,
    contact: string | undefined,
    email: string | undefined,
    bvn: string | undefined,
    gender: string | undefined,
    maritalStatus: string | undefined,
    children: string | undefined,
    residenceType: string | undefined,
}




const UserPersonalInfo = ({
    id,
    fullName,
    contact,
    email,
    bvn,
    gender,
    maritalStatus,
    children,
    residenceType,
}: UserPersonalInfoProps) => {

    const UserInfo = [
        {
            title: "Full Name",
            text: `${fullName}`,
        },
        {
            title: "Employment Status",
            text: `${contact}`,
        },
        {
            title: "Email Address",
            text: `${email}`,
        },
        {
            title: "Bvn",
            text: `${bvn}`,
        },
        {
            title: "Gender",
            text: `${gender}`,
        },
        {
            title: "Marital Status",
            text: `${maritalStatus}`,
        },
        {
            title: "Children",
            text: `${children}`,
        },
        {
            title: "Type of Residence",
            text: `${residenceType}`,
        },
    ]



    return (
        <div className="flex flex-col gap-5">
            <Header
                subTitle="Personal Information"
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

export default UserPersonalInfo