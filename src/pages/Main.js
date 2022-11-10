import React from 'react'
import {Outlet, Link} from 'react-router-dom';

function Main(){
    return(
        <>
        <div>RATE MY RESIDENT</div>
        <Link to="/result">Result</Link>
        <Outlet />
        </>
    );
}

export default Main;