import React from "react";
import AutoSuggestion from "./AutoSuggestion.js";
import styled from "styled-components";

function Search(){
  return(
    <MainWrapper>
      <h1 style={{"color": "white", "font-size": "30px"}}>Find a resident at SJSU International House</h1>
      <AutoSuggestion />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding: 0;
`;

export default Search;