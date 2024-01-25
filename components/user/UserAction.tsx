
const userAction = [
    {
        action: "Blacklist user",
        textColor: "#E4033B",
        borderColor: "#E4033B",
    },
    {
        action: "Activate User",
        textColor: "#39CDCC",
        borderColor: "#39CDCC",
    }
]

const UserAction = () => {
    return (
        <div className="flex items-center gap-3">
            {userAction.map((action) => (
                <div
                    className="p-1 px-3 rounded-[4px] border text-[11px] uppercase font-semibold cursor-pointer"
                    key={action.action}

                    style={{
                        color: action.textColor,
                        borderColor: action.borderColor,
                    }}
                >
                    {action.action}
                </div>
            ))}
        </div>
    )
}

export default UserAction