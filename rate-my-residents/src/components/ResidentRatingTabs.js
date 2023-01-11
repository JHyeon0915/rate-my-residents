// li로 구현
// rating value - two CardNumRating/ rating info - comments(div)
import CardNumRating from './CardNumRating';
import styled from 'styled-components';


function ResidentRatingTabs(props) {
    console.log(props.quality_rate);
    return(
    <Wrapper>
        <div>
            <CardNumRating title="QUALITY" rate={props.quality_rate}></CardNumRating>
            <CardNumRating title="DIFFICULTY" rate={props.difficulty_rate}></CardNumRating>
        </div>
        <div>
            <div><b>COMMENT</b></div>
            {props.comment}
            <Tag><b>{props.tag1}</b></Tag>
            <Tag>{props.tag2}</Tag>
            <Tag>{props.tag3}</Tag>
        </div>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    background: #F1F1F1;
`;

const Tag = styled.div`
    display: inline-block;
    background: #F1F1F1;
    margin: 10px 10px 0 5px;
    padding: 10px 15px;
    border-radius: 15px;
`;


export default ResidentRatingTabs;