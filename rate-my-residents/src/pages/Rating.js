import { useLocation } from 'react-router-dom';
import {useState} from 'react';
import FormCard from '../components/FormCard';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RatingRadioButton from '../components/RatingRadioButton';
import RatingSlider from '../components/RatingSlider';
import TagContainer from '../components/TagContainer';
import Header from '../components/Header';

function Rating({resident_name}){
    const navigate = useNavigate();
    const [quality, setQuality] = useState(0);
    const [diff, setDiff] = useState(0);
    const [willing, setWilling] = useState('');
    const [tag1, setTag1] = useState('');
    const [tag2, setTag2] = useState('');
    const [tag3, setTag3] = useState('');


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

    return(
    <>
        <Header />
        <div>
            Rate: 
        </div>
        <form>
            <div>Here is FormCard</div>
            <h5>Quality</h5>
            <RatingSlider setRate={setQuality} />
            <h5>Difficalty</h5>
            <RatingSlider setRate={setDiff}/>
            <div></div>
            <RatingRadioButton setWilling={setWilling}/>
            <div></div>
            <TagContainer handleClick={getTag}/>
            <h5>here comment</h5>
            <input type='text'></input>
            <div id="submittion">
                <div>
                    Please be thoughtful not to hurt anyone.
                </div>
                <button onClick={onClick}>
                    Submit
                </button>
            </div>
        </form>
    </>
    );
}

export default Rating;