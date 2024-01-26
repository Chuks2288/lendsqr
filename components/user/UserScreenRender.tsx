interface UserScreenRenderProps {
    currentScreen: JSX.Element;
}
const UserScreenRender = ({
    currentScreen
}: UserScreenRenderProps) => {
    return (
        <div className="bg-white mt-6 p-6">
            {currentScreen}
        </div>
    )
}

export default UserScreenRender