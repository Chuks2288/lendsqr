
interface UserDetailsContentProps {
    id: string | undefined,
    fullName: string | undefined,
    contact: string | undefined,
    email: string | undefined,
    bvn: string | undefined,
    gender: string | undefined,
    maritalStatus: string | undefined,
    children: string | undefined,
    residenceType: string | undefined,
    eductionLevel: string | undefined,
    employmentStatus: string | undefined,
    employmentSector: string | undefined,
    employmentDuration: string | undefined,
    officeEmail: string | undefined,
    monthlyIncome: string | undefined,
    loanRepayment: string | undefined,
    twitter: string | undefined,
    facebook: string | undefined,
    instagram: string | undefined,
    guarantorFullName: string | undefined,
    guarantorContact: string | undefined,
    guarantorEmail: string | undefined,
    relationship: string | undefined,
}

const UserDetailsContent = ({
    id,
    fullName,
    contact,
    email,
    bvn,
    gender,
    maritalStatus,
    children,
    residenceType,
    eductionLevel,
    employmentStatus,
    employmentSector,
    employmentDuration,
    officeEmail,
    monthlyIncome,
    loanRepayment,
    twitter,
    facebook,
    instagram,
    guarantorFullName,
    guarantorContact,
    guarantorEmail,
    relationship,
}: UserDetailsContentProps) => {
    return (
        <div>UserDetailsContent</div>
    )
}

export default UserDetailsContent