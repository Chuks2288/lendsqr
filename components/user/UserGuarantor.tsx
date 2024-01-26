import Header from "../Header"

interface UserGuarantorProps {
    id: string | undefined,
    guarantorFullName: string | undefined,
    guarantorContact: string | undefined,
    guarantorEmail: string | undefined,
    relationship: string | undefined,
}

const UserGuarantor = ({
    id,
    guarantorFullName,
    guarantorContact,
    guarantorEmail,
    relationship,
}: UserGuarantorProps) => {

    const UserInfo = [
        {
            title: "Guarantor",
            text: `${guarantorFullName}`,
        },
        {
            title: "Phone Number",
            text: `${guarantorContact}`,
        },
        {
            title: "Email Address",
            text: `${guarantorEmail}`,
        },
        {
            title: "Relationship",
            text: `${relationship}`,
        },
    ]
    return (
        <div className="flex flex-col gap-5">
            <Header
                subTitle="Guarantor"
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

export default UserGuarantor