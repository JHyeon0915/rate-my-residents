import React, { useState } from "react";
import residentsInfo from '../data/residentsInfo';
import AutoSuggestion from "./AutoSuggestion.js"


function Search(){
    const residents = residentsInfo;

    return(
        <>
            <section className="main phrase">
                <div>
                    <h2>Find a resident at SJSU International House</h2>
                </div>
                <AutoSuggestion />
            </section>
        </>
    );
}

export default Search;