import { Skeleton } from "../ui/skeleton"
import { data } from "../user/UserTable"

const TableSkeleton = () => {
    return (
        <div>
            <div className="flex items-center justify-between gap-3 overflow-x-auto">
                {data.map((item) => (
                    <Skeleton />
                ))}
            </div>
        </div>
    )
}

export default TableSkeleton