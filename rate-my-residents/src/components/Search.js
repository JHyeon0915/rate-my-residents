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
    left: 0;
    width: 100%;
`;

export default Search;