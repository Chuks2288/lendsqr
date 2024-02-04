import UserHeader from "@/components/user/UserHeader"
import UserTable from "@/components/user/UserTable"

const UserPage = () => {

    return (
        <div className="mb-4 p-6">

            <UserHeader />

            <UserTable />
        </div>
    )
}

export default UserPage