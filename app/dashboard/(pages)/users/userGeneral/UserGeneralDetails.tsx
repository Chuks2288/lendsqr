import { Separator } from "@/components/ui/separator";
import UserEducation from "@/components/user/UserEducation";
import UserGuarantor from "@/components/user/UserGuarantor";
import UserPersonalInfo from "@/components/user/UserPersonalInfo";
import UserSocials from "@/components/user/UserSocials";
import { data } from "@/components/user/data";
import { useParams } from "next/navigation";

const UserGeneralDetails = () => {

    const params = useParams();

    const dataInfo = data.find((user) => user.id === params?.id);
    return (

        <div className="flex flex-col w-full gap-4">
            <UserPersonalInfo
                id={dataInfo?.id}
                fullName={dataInfo?.fullName}
                contact={dataInfo?.contact}
                email={dataInfo?.email}
                bvn={dataInfo?.bvn}
                gender={dataInfo?.gender}
                maritalStatus={dataInfo?.maritalStatus}
                children={dataInfo?.children}
                residenceType={dataInfo?.ResidenceType}
            />

            <Separator className="bg-blue-70 bg-opacity-10" orientation="horizontal" />

            <UserEducation
                id={dataInfo?.id}
                eductionLevel={dataInfo?.educationLevel}
                employmentStatus={dataInfo?.employmentStatus}
                employmentSector={dataInfo?.employmentSector}
                employmentDuration={dataInfo?.employmentDuration}
                officeEmail={dataInfo?.officeEmail}
                monthlyIncome={dataInfo?.monthlyIncome}
                loanRepayment={dataInfo?.loanRepayment}
            />

            <Separator className="bg-blue-70 bg-opacity-10" orientation="horizontal" />

            <UserSocials
                id={dataInfo?.id}
                twitter={dataInfo?.twitter}
                facebook={dataInfo?.facebook}
                instagram={dataInfo?.instagram}
            />

            <Separator className="bg-blue-70 bg-opacity-10" orientation="horizontal" />

            <UserGuarantor
                id={dataInfo?.id}
                guarantorFullName={dataInfo?.guarantorFullName}
                guarantorContact={dataInfo?.guarantorContact}
                guarantorEmail={dataInfo?.guarantorEmail}
                relationship={dataInfo?.relationship}
            />
        </div>
    )
}

export default UserGeneralDetails