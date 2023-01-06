import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Search from '../components/Search';
import styled from 'styled-components';
import main_pic from '../assets/Images/main_picture.jpeg';

const Wrapper = styled.div`
    width: 100%;
    height: 700px;
    padding-top: 5.0rem;
`;

const Image = styled.img`
    position: relative;
    width: 100%;
    height: 0.5 rem
`;

function Main(){
    return(
        <Wrapper>
            <Image src={main_pic}/>
            <Search></Search>
            <Outlet />
        </Wrapper>
    );
}

export default Main;