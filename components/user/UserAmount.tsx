import { useState } from "react";
import { Asterisk, Eye, EyeOff } from "lucide-react";
import { TbCurrencyNaira } from "react-icons/tb";

const UserAmount = ({ amount }: number | any) => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    // Format amount without currency symbol
    const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "NGN",
    }).format(amount).replace(/\D/g, '');

    const asterisks = Array.from({ length: formattedAmount.length }, (_, index) => (
        <Asterisk key={index} size="16" />
    ));



    return (
        <div className="flex items-center gap-3">
            <span className="font-bold flex items-center">
                <TbCurrencyNaira size="20" />
                <span className="flex items-center">
                    {isVisible ? formattedAmount : asterisks}
                </span>
            </span>

            <span
                onClick={toggleVisibility}
                className="flex items-center"
            >
                {isVisible ? <EyeOff size="16" /> : <Eye size="16" />}
            </span>
        </div>
    );
};

export default UserAmount;
