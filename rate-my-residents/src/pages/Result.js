import {Outlet, Link } from 'react-router-dom';
import ResidentRatingTabs from '../components/ResidentRatingTabs';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import DisplayOverall from '../components/DisplayOverall';
import { useState } from 'react';
import axios from 'axios';

function Result(props){
    const [name, setName] = useState(null);
    const [rates, setRates] =useState([]);
    const location = useLocation();

    useEffect(()=>{
        setName(location.state.name);
    }, []);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await axios.post('/api/info', {name: name}, {
                    headers: {'Content-Type': 'application/json'}
                });
                setRates(res.data);
            } catch (error){
                console.log(error);
            }
        };
        fetchData();
    }, [name]);

    const rating_tabs = [];
    rates.forEach(r => {
        rating_tabs.push(
            <li>
                <ResidentRatingTabs props={r} />
            </li>
        );
    });
    
    if(rating_tabs.length === 0){
        rating_tabs.push(
            <div style={{"font-size": "20px", margin: "20px"}}>NO RESULT</div>  
        );
    }

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
            <BigWrapper>
                <MainWrapper>
                    <OverallRate>{overall_rate}</OverallRate>
                    <div style={{color:"grey", display: "inline-block", "font-weight": "bold"}}>/5</div>

                    <p style={{"text-align":"left", padding: "10px 0"}}>Overall Quality Bases on {rates.length} ratings</p>
                    <ResidentName>{name}</ResidentName>
                    Resident in International House in San Jose State University.
                    <Feedback>
                        <FeedbackItem style={{"border-right":"1px solid black", "padding-right":10}}>
                            <FeedbackNum>{willingness}%</FeedbackNum>
                            <SmallText>Would be friends again</SmallText>
                        </FeedbackItem>
                        <FeedbackItem style={{"margin-left": 10}}>
                            <FeedbackNum>{diff_rate}</FeedbackNum>
                            <SmallText>Level of Difficulty</SmallText>
                        </FeedbackItem>
                    </Feedback>
                    <Link to="/result/rating" state={name}>
                        <RateButton>
                            Rate {name}
                        </RateButton>
                    </Link>
                    <Outlet />
                </MainWrapper>
                <ul>
                    {rating_tabs}
                </ul>
            </BigWrapper>
        </>
    );
}

const SmallText = styled.div`
    font-size: 14px;
`;

const RateButton = styled.button`
    margin: 10px 0;
    padding: 15px 40px;
    border: none;
    border-radius: 50px;
    background-color: #0055FD;
    color: white;
    cursor: pointer;
    box-shadow: none;
    font-weight: bold;
:hover {
    background-color: #0021FF;
}
`;

const MainWrapper = styled.div`
    padding: 80px 3% 20px 3%;
    border-bottom: 2px solid black;
    text-align: left;
`;

const Feedback = styled.div`
    display: flex;
`;

const FeedbackItem = styled.div`
    margin: 10px 0;
    padding: 10px 0;
`;

const FeedbackNum = styled.div`
    font-family: Poppins;
    font-weight: bold;
    font-size: 32px;
`;

const BigWrapper = styled.div`
    width: auto;
    max-width: 1000px;
`;

const ResidentName = styled.p`
    margin: 10px 0;
    font-size: 40px;
    font-weight: bold;
    font-family: Poppins;
    text-align: left;
`;

const OverallRate = styled.div`
    font-size: 60px;
    display: inline-block;
    clear: left; 
    font-weight: bold;
    font-family: Poppins;
    margin-right: 10px;
`;

export default Result;