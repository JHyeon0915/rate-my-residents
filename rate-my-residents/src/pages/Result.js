import {Outlet, Link } from 'react-router-dom';
import ResidentRatingTabs from '../components/ResidentRatingTabs';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import DisplayOverall from '../components/DisplayOverall';
import { useState } from 'react';

function Result({name}){
    const [rates, setRates] =useState([]);
    const location = useLocation();
    let resident_name = '';
    console.log("location.state: "+location.state.name);
    console.log("name: "+name);

    if(location.state === null)
        resident_name = name;
    else
        resident_name = location.state.name;

    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch('/api/info', {
                method: 'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({"name": resident_name})
            });
            
            const result = await res.json();
            result.forEach(r => {
                console.log(r);
            });

            setRates(result);
        };
        fetchData();
    }, []);

    const rating_tabs = [];
    rates.forEach(r => {
        rating_tabs.push(<ResidentRatingTabs props={r} />)
    });
    
    if(rating_tabs.length === 0){
        rating_tabs.push(<div>NO RESULT</div>);
    }
    console.log(rating_tabs.length);

    const assignData = (title) => {
        let sum = 0;
        if(title === "overall"){
            rates.forEach(r => {
                sum = r.quality_rate;
            });
        }
        else if (title === "diff"){
            rates.forEach(r => {
                    sum = r.difficalty_rate;
            });
        }
        else{
            rates.forEach(r => {
                sum = r.willing === "yes" ? sum + 1 : sum;
            });
        }
        return sum/rates.length;
    };

    const overall_rate = rates.length === 0 ? 5 : assignData("overall");
    const diff_rate = rates.length === 0 ? "-" : assignData("diff");
    const willingness = rates.length === 0 ? "-" : assignData("willing");

    return(
        <> 
            <Header />
            <div style={{"font-size": "60px", display: "inline-block", clear: "left", "font-weight": "bold"}}>{overall_rate}</div>
            <div style={{color:"grey", display: "inline-block"}}>/5</div>
            <div>Overall Quality Bases on {rates.length} ratings</div>
            <div>{resident_name}</div>
            <div>
                <div>{willingness}%</div>
                <SmallText>Would be friends again in the next life</SmallText>
            </div>
            <div>
                <div>{diff_rate}</div>
                <SmallText>Level of Difficulty</SmallText>
            </div><></>
            <Link to="/result/rating" resident_name={location.state.name}>
                <RateButton onClick={()=>{console.log(location.state.name)}}>
                    Rate {resident_name}
                </RateButton>
            </Link>
            <Outlet />

            <div>here is comment section</div>
            {rating_tabs}
        </>
    );
}

const SmallText = styled.div`
    font-size: 14px;
`;

const RateButton = styled.button`
    padding: 10px;
    border-color: blue;
    border-radius: 50px;
    background-color: blue;
    color: white;
    cursor: pointer;
`;

export default Result;