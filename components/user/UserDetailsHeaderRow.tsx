import Avatar from "../Avatar"
import { data } from "./data"
import { Separator } from "../ui/separator"
import Rating from "../Rating"
import UserAmount from "./UserAmount"
import UserNavigation from "./UserNavigation"


interface UserDetailsHeaderRowProps {
    id: string | undefined,
    userImage: string | undefined,
    fullName: string | undefined,
    rating: number | undefined,
    amount: number | any,
    accountNo: string | undefined,
    bankName: string | undefined,
}

const UserDetailsHeaderRow = ({
    id,
    userImage,
    fullName,
    rating,
    amount,
    accountNo,
    bankName,
}: UserDetailsHeaderRowProps) => {

    return (
        <div className="">
            <div className="bg-white w-full px-5 flex flex-col h-max">
                <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-4 py-10">
                    <div className="flex items-center gap-3">
                        <Avatar
                            src={userImage}
                            width={70}
                            height={70}
                        />
                        <div className="flex flex-col justify-start">
                            <h4 className="font-semibold">{fullName}</h4>
                            <span className="text-sm">{id}</span>
                        </div>
                    </div>

                    <Separator orientation="vertical"
                        className="bg-blue-70 bg-opacity-10 lg:flex hidden "
                    />

                    <div className="text-sm flex flex-col">
                        <h5 className="font-semibold">Users Tier</h5>
                        <Rating value={rating} />
                    </div>

                    <Separator
                        orientation="vertical"
                        className="bg-blue-70 bg-opacity-10 lg:flex hidden"
                    />

                    <div className="cursor-pointer">
                        <UserAmount
                            amount={amount}
                        />
                        <div className="text-[11px] font-semibold flex flex-wrap">
                            {accountNo}/{bankName}
                        </div>
                    </div>
                </div>

            </div>
            <UserNavigation />
        </div>
    )
}

export default UserDetailsHeaderRow