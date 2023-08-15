import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Search from '../components/Search';
import styled from 'styled-components';
import main_pic from '../assets/Images/main_picture.jpeg';

function Main(){
  return(
    <Wrapper>
      <Background>
        <SearchBox>
          <Search />
        </SearchBox>
      </Background>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  padding-top: 5.0rem;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 600px;
  background-size: 100% 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${main_pic});

`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Main;