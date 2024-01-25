


const NavigationTitle = ({
    children,
    title
}: {
    children: React.ReactNode,
    title?: string,
}) => {
    return (
        <div className="pt-4">
            {title && (
                <h4 className="uppercase text-[.75rem] text-[#545F7D] font-bold mb-2 pl-4">
                    {title}
                </h4>
            )}

            <p>
                {children}
            </p>
        </div>
    )
}

export default NavigationTitle