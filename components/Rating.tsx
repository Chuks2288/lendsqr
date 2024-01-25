
const Rating = ({
    value
}: number | any) => {

    const filledStars = Array.from({ length: value }, (_, index) => (
        <span key={index}>&#9733;</span>
    ));

    const emptyStars = Array.from({ length: 5 - value }, (_, index) => (
        <span key={index + value}>&#9734;</span>
    ));

    return (
        <div className="rating text-orange-70">
            {filledStars}
            {emptyStars}
        </div>
    );
};

export default Rating;