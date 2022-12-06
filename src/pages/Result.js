import {Outlet, Link } from 'react-router-dom';

function Result(props){
    return(
        <>
            <div>here is result page</div>
            <Link to="/rating">
                <button>Rate Name</button>
            </Link>
            <Outlet />
        </>
    );
}

export default Result;