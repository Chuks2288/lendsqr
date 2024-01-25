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
        <div className="bg-white h-[12rem] w-full px-5 flex flex-col justify-stretch">
            <div className=" lg:w-[35rem] w-full h-full py-10 justify-between text-blue-70 flex items-center gap-2">
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
                    className="bg-blue-70"
                />

                <div className="text-sm flex flex-col">
                    <h5 className="font-semibold">User's Tier</h5>
                    <Rating value={rating} />
                </div>

                <Separator
                    orientation="vertical"
                    className=" bg-blue-70"
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

            <UserNavigation />
        </div>
    )
}

export default UserDetailsHeaderRow