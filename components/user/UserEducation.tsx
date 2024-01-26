import Header from "../Header"

interface UserEducationProps {
    id: string | undefined,
    eductionLevel: string | undefined,
    employmentStatus: string | undefined,
    employmentSector: string | undefined,
    employmentDuration: string | undefined,
    officeEmail: string | undefined,
    monthlyIncome: string | undefined,
    loanRepayment: string | undefined,
}

const UserEducation = ({
    id,
    eductionLevel,
    employmentStatus,
    employmentSector,
    employmentDuration,
    officeEmail,
    monthlyIncome,
    loanRepayment,
}: UserEducationProps) => {

    const UserInfo = [
        {
            title: "Education Level",
            text: `${eductionLevel}`,
        },
        {
            title: "Employment Status",
            text: `${employmentStatus}`,
        },
        {
            title: "Employment Sector",
            text: `${employmentSector}`,
        },
        {
            title: "Employment Duration",
            text: `${employmentDuration}`,
        },
        {
            title: "Office Email",
            text: `${officeEmail}`,
        },
        {
            title: "Monthly Income",
            text: `${monthlyIncome}`,
        },
        {
            title: "Loan Repayment",
            text: `${loanRepayment}`,
        },
    ]
    return (
        <div className="flex flex-col gap-5">
            <Header
                subTitle="Education and Employment"
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

export default UserEducation