import { Skeleton } from "../ui/skeleton"
import { userHeaderContent } from "../user/data"

const GridSkeleton = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-col-3 sm:grid-cols-2 xsm:grid-cols-1 gap-2">
                {userHeaderContent.map((item) => (
                    <Skeleton className="lg:max-w-[15.1rem] max-w-full h-[10rem]" />
                ))}
            </div>
        </div>
    )
}

export default GridSkeleton