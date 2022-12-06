import React, { useState } from "react";
import residentsInfo from '../data/residentsInfo';
import AutoSuggestion from "./AutoSuggestion.js"


function Search({ details }){
    const [searchInput, setSearchInput] = useState("");
    const [suggestion, setSuggestion] = useState("");
    const residents = residentsInfo;

    const handleChange = e => {
        e.preventDfault();
        var value = e.target.value;
        setSearchInput(value);
    }

    /*if (searchInput.length > 0){
        residents.filter((resident => {
            return resident.name.match(searchInput);
        }));
    }*/
    const handleKeyDown = (e) => {
        if (e.keyCode === 39) {
          setSearchInput(suggestion);
        }
      };
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