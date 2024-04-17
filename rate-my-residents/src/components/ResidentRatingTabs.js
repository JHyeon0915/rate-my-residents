// li로 구현
// rating value - two CardNumRating/ rating info - comments(div)
import CardNumRating from './CardNumRating';
import styled from 'styled-components';


function ResidentRatingTabs(props) {
    props = props.props;
    console.log(props);

    const tagElements = [];

    if(props.tag1)
        tagElements.push(<Tag>{props.tag1}</Tag>);
    if(props.tag2)
        tagElements.push(<Tag>{props.tag2}</Tag>);
    if(props.tag3)
        tagElements.push(<Tag>{props.tag3}</Tag>);

    return(
    <Wrapper>
        <CardNumContainer>
            <CardNumRating title="QUALITY" rate={props.quality_rate}></CardNumRating>
            <CardNumRating title="DIFFICULTY" rate={props.difficulty_rate}></CardNumRating>
        </CardNumContainer>
        <GeneralRateInfoContainer>
            <div><b>COMMENT</b></div>
            <p>{props.comment}</p>
            {tagElements}
        </GeneralRateInfoContainer>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 882px;
    background: #F9F9F9;
    margin: 15px 0;
    padding: 0;
`;

const Tag = styled.div`
    display: inline-block;
    background-color: #F1F1F1;
    margin: 10px 10px 0 5px;
    padding: 10px 15px;
    border-radius: 25px;
    font-weight: bold;
`;

const CardNumContainer = styled.div`
    display: inline-block;
    margin: 25px;
`;

const GeneralRateInfoContainer = styled.div`
    display: inline-block;
    margin: 25px;
`;


export default ResidentRatingTabs;