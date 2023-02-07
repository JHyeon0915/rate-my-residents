import { useLocation } from 'react-router-dom';
import {useState} from 'react';
import FormCard from '../components/FormCard';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RatingRadioButton from '../components/RatingRadioButton';
import RatingSlider from '../components/RatingSlider';
import TagContainer from '../components/TagContainer';
import Header from '../components/Header';
import styled from 'styled-components';
import CommentSection from '../components/CommentSection';

function Rating({resident_name}){
    const navigate = useNavigate();
    const [quality, setQuality] = useState(0);
    const [diff, setDiff] = useState(0);
    const [willing, setWilling] = useState('');
    const [tag1, setTag1] = useState('');
    const [tag2, setTag2] = useState('');
    const [tag3, setTag3] = useState('');
    const [comment, setComment] = useState('');


    console.log("name: " + resident_name)

    const onClick = (e) => {
        e.preventDefault();
        getTag();
        /*fetch('http://localhost:3001:/result/rating', {
            method: 'POST',
            body: 
        })*/

        navigate('/result')
        // gather all data and update.
    }

    const getTag = (tag) => {
        if(tag1 === '')
            setTag1(tag);
        else if(tag2 === '')
            setTag2(tag);
        else if(tag3 === '')
            setTag3(tag);
        
        console.log(tag1, tag2, tag3);
    }

    const element = <RatingSlider setRate={setDiff}/>;
    return(
    <>
        <Header />
        <DisplayName>
            Rate: 
            <p style={{"font": "bold", margin: "0 auto"}}>{resident_name}</p>
        </DisplayName>
        <form>
            <FormCard title="Rate your resident" type="slider" setRate={setQuality}/>
            <FormCard title="How difficult was to be friends with this person?" type="slider" setRate={setDiff}/>
            <FormCard title="Would you be freinds again in the next life?" type="radio" setRate={setWilling}/>
            <TagContainer handleClick={getTag}/>
            <CommentSection setComment={setComment}/>
            <div id="submittion">
                <button onClick={onClick}>
                    Submit
                </button>
            </div>
        </form>
    </>
    );
}

const DisplayName = styled.div`
    font-size: 3vw;
    height: 5rem;
    border: 0;
    text-align: left;
    box-shadow: 0px 5px 10px #D7D7D7;
    margin-bottom: 40px
`;

export default Rating;