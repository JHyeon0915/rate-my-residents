import { useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react';
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
    const [tags, setTags] = useState([]);
    const [comment, setComment] = useState('');


    console.log("name: " + resident_name)

    const onClick = (e) => {
        e.preventDefault();
        /*fetch('http://localhost:3001:/result/rating', {
            method: 'POST',
            body: 
        })*/

        navigate('/result')
        // gather all data and update.
    }

    const setTag = (tag) => {
        console.log(tag);
        setTags([...tags, tag]);     // same as users.concat(user)
    }

    const removeTag = (targetTag) => {
        setTags(tags.filter(tag => tag === targetTag))
    }

    return(
    <>
        <Header />
        <DisplayName>
            Rate: 
            <p style={{"font": "bold", margin: "0 auto"}}>{resident_name}</p>
        </DisplayName>
        <FormContainer>
            <form>
                <FormCard title="Rate your resident" type="slider" setRate={setQuality}/>
                <FormCard title="How difficult was to be friends with this person?" type="slider" setRate={setDiff}/>
                <FormCard title="Would you be freinds again in the next life?" type="radio" setRate={setWilling}/>
                <TagContainer setTag={setTag} removeTag={removeTag}/>
                <CommentSection setComment={setComment}/>
                <div id="submittion">
                    <SubmitBtn type="submit" onClick={onClick}>
                        Submit Rating
                    </SubmitBtn>
                </div>
            </form>
        </FormContainer>    
        
    </>
    );
}

const DisplayName = styled.div`
    font-size: 4vw;
    height: 6rem;
    border: 0;
    text-align: left;
    box-shadow: 0px 5px 10px #D7D7D7;
    margin-bottom: 40px
`;

const FormContainer= styled.div`
    position: relative;
    left: 0;
    max-width: 1280px;
    width: fit-content;
    margin: 0 2vw;
    padding: 0;
`;

const SubmitBtn = styled.button`
    width: 227px;
    height: 40px;
    margin: 50px 0;
    background-color: #989898;
    border:none;
    border-radius: 30px;
    pointer: cursor;
    color: white;
    font-weight: bold;
`;

export default Rating;