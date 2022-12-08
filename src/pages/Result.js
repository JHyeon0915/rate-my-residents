import {Outlet, Link } from 'react-router-dom';
import ResidentRatingTabs from '../components/ResidentRatingTabs';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

function Result(props){
    const location = useLocation();
    return(
        <> 
            <Header />
            <div>here is result page</div>
            <Link to="/rating" props={location}>
                <button>Rate Name</button>
            </Link>
            <Outlet />
            <div>here is commet section</div>
            <ResidentRatingTabs props={location} />
        </>
    );
}

export default Result;