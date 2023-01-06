import {Outlet, Link } from 'react-router-dom';
import ResidentRatingTabs from '../components/ResidentRatingTabs';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import DisplayOverall from '../components/DisplayOverall';

function Result({name}){
    const location = useLocation();
    let rates = [];
    let resident_name = '';
    console.log("location.state: "+location.state.name);
    console.log("name: "+name);

    if(location.state === null)
        resident_name = name;
    else
        resident_name = location.state.name;

    useEffect(()=>{
        fetch('hettp://localhost:3001', {
            method: 'POST',
            body: JSON.stringify(location.state)
        }).then(res => res.json())
        .then(data => rates = data);
    }, []); // The empty array ensures that the effect only runs once.

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

    console.log(rates);
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
            {rates =! 0 ? <>NO RESULT</> : rates.forEach(r => {
                    return(<ResidentRatingTabs props={r} />);
                })}
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
`;

export default Result;