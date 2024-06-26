import { useLocation } from 'react-router-dom';
import {useState} from 'react';
import FormCard from '../components/FormCard';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TagContainer from '../components/TagContainer';
import Header from '../components/Header';
import styled from 'styled-components';
import CommentSection from '../components/CommentSection';
import axios from 'axios';

function Rating(){
    const location = useLocation();
    const residentName = location.state;
    const navigate = useNavigate();
    const [quality, setQuality] = useState(0);
    const [diff, setDiff] = useState(0);
    const [willing, setWilling] = useState('');
    const [tags, setTags] = useState([]);
    const [comment, setComment] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/rate', {residentName, quality, diff, willing, comment, tags})
            .then(response => console.log(response.data))
            .catch(err => console.log(err));

        navigate('/result', {state:{name: residentName}});
    }

    const addTag = (tag) => {
        setTags([...tags, tag]);
    }

    const removeTag = (targetTag) => {
        setTags(tags.filter(tag => tag !== targetTag))
    }

    return(
    <>
        <Header />
        <DisplayName>
            Rate: {residentName}
        </DisplayName>
        <FormContainer>
            <form>
                <FormCard title="Rate your resident" type="slider" setRate={setQuality}/>
                <FormCard title="How difficult was to be friends with this person?" type="slider" setRate={setDiff}/>
                <FormCard title="Would you be freinds again in the next life?" type="radio" setRate={setWilling}/>
                <TagContainer tags={tags} setTags={setTags} addTag={addTag} removeTag={removeTag}/>
                <CommentSection setComment={setComment}/>
                <div id="submittion">
                    <SubmitBtn type="submit" onClick={onSubmit}>
                        Submit Rating
                    </SubmitBtn>
                </div>
            </form>
        </FormContainer>
    </>
    );
}

const DisplayName = styled.div`
    display: flex;
    align-items: center;
    height: 6rem;
    padding-left: 2rem;
    border: 0;
    text-align: left;
    box-shadow: 0px 5px 10px #D7D7D7;
    font-size: 2.5rem;
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
    cursor: pointer;
    color: white;
    font-weight: bold;
`;

export default Rating;