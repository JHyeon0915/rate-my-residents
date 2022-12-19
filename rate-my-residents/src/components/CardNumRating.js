import { useLocation } from "react-router-dom";

function CardNumRating ({title, rate}) {
    const location = useLocation();

    return(
        <>
            <div>
                {title}: {rate}
            </div>
        </>
    );
}

export default CardNumRating;