import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Search from '../components/Search';

function Main(){
    return(
        <>
        <div>RATE MY RESIDENT</div>
        <Search></Search>
        <Outlet />
        </>
    );
}

export default Main;