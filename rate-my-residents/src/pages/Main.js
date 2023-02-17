import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Search from '../components/Search';
import styled from 'styled-components';
import main_pic from '../assets/Images/main_picture.jpeg';

function Main(){
    return(
        <Wrapper>
            <Image src={main_pic}/>
            <SearchBox className="search-box">
                <Search />
            </SearchBox>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 700px;
    padding-top: 5.0rem;
`;

const Image = styled.img`
    position: relative;
    width: 100%;
    height: 600px;
    filter: brightness(50%);
`;

const SearchBox = styled.div`
    position: absolute;
    left: 0;
    top: 40%;
    width: auto;
`;

export default Main;