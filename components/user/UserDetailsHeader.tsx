import Header from "../Header"
import UserAction from "./UserAction"
import UserDetailsHeaderRow from "./UserDetailsHeaderRow"

interface UserDetailsHeaderProps {
    id: string | undefined,
    userImage: string | undefined,
    fullName: string | undefined,
    rating: number | undefined,
    amount: number | any,
    accountNo: string | undefined,
    bankName: string | undefined,
}

const UserDetailsHeader = ({
    id,
    userImage,
    fullName,
    rating,
    amount,
    accountNo,
    bankName,
}: UserDetailsHeaderProps) => {
    return (
        <div className="py-4 flex flex-col w-full">
            <div className=" flex items-center justify-between py-4">
                <Header
                    title="User Details"
                />

                <UserAction />
            </div>

            <UserDetailsHeaderRow
                id={id}
                userImage={userImage}
                fullName={fullName}
                rating={rating}
                amount={amount}
                accountNo={accountNo}
                bankName={bankName}

            />
        </div>
    )
}

export default UserDetailsHeader