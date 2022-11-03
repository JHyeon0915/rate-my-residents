import React, { useState } from "react";
import Scroll from './Scroll';

function Search({ details }){
    const [searchField, setSearchField] = useState("");

    const names = details.filter(
        person => {
            return(
                person
                .name
                .includes(searchField)
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
    }

    return(
        <>
            <section className="main phrase">
            <div>
                <h2>Find a resident at SJSU International House</h2>
            </div>
            <div>
                <input 
                    className="search"
                    type="search"
                    placeholder="Resident Name" 
                    onChange={handleChange}
                    />
            </div>
            </section>
        </>
    );
}

export default Search;