import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import FormCard from '../components/FormCard';
import { Link } from 'react-router-dom';

function Rating(props){
    const location = useLocation();

    const onClick = () => {
        // gather all data and update.
    }

    return(
    <>
        <div>
            Rate: {props.name}
        </div>
        <FormCard></FormCard>
        
        <div id="submittion">
            <div>
                Please be thoughtful not to hurt anyone.
            </div>
            <button onClick={onClick}>
                <Link to="/result">
                    Submit
                </Link>
            </button>
        </div>
    </>
    );
}

export default Rating;