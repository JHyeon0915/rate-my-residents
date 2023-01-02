import {Outlet, Link } from 'react-router-dom';
import ResidentRatingTabs from '../components/ResidentRatingTabs';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

function Result(props){
    const location = useLocation();
    console.log(location.state);

    return(
        <> 
            <Header />
            <div>here is result page</div>
            <Link to="/result/rating" props={location.state}>
                <button>
                    Rate {location.state.name}
                </button>
            </Link>
            <Outlet />
            <div>here is commet section</div>
            <ResidentRatingTabs props={location.state} />
        </>
    );
}

export default Result;