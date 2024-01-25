import Navbar from "@/components/navbar/Navbar"
import NavigationSidebar from "@/components/navigation/NavigationSidebar"
import getCurrentUser from "../actions/getCurrentUser"

const layout = async ({
    children,
}: {
    children: React.ReactNode
}) => {

    const currentUser = await getCurrentUser();

    return (
        <div className="h-full">
            <div className="z-20 w-full h-[10vh]">
                <Navbar currentUser={currentUser} />
            </div>
            <div className="hidden md:flex h-full w-60 z-20 flex-col inset-y-0 fixed pt-[4rem]">
                <NavigationSidebar />
            </div>

            <main className="h-max md:pl-60 bg-grey-50 w-full">
                {children}
            </main>

        </div>
    )
}

export default layout