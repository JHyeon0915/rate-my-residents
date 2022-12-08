import { Link } from "react-router-dom";

function Submittion () {
    return(
        <>
            <div>
                Please be thoughtful not to hurt anyone.
            </div>
            <button>
                <Link to="/result">
                    Submit
                </Link>
            </button>
        </>
    );
}

export default Submittion;