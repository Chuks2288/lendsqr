import Header from "../Header"
import UserGridBox from "./UserGridBox"
import { userHeaderContent } from "./data"


const UserHeader = () => {
    return (
        <div className="mb-8">
            <Header
                title="Users"
            />

            <div className="grid lg:grid-cols-4 md:grid-col-3 sm:grid-cols-2 xsm:grid-cols-1 gap-2">
                {userHeaderContent.map((item) => (
                    <UserGridBox
                        icon={item.icon}
                        title={item.title}
                        stat={item.stat}
                        bgColor={item.bgColor}
                    />
                ))}
            </div>
        </div>
    )
}

export default UserHeader