
interface HeaderProps {
    title?: string;
    subTitle?: string;
}

const Header = ({
    title,
    subTitle
}: HeaderProps) => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold text-blue-70">
                {title}
            </h1>
            <p>
                {subTitle}
            </p>
        </div>
    )
}

export default Header