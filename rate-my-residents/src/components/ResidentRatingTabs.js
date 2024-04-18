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
        <RateInfoContainer>
            <RatingHeader><b>COMMENT</b></RatingHeader>
            <Comment>{props.comment}</Comment>
            <TagBox>
                {tagElements}
            </TagBox>
        </RateInfoContainer>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    background: #F9F9F9;
    margin: 16px 0;
    padding: 21px 24px 0;
`;

const TagBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 12px;
`;

const Tag = styled.span`
    background-color: #F1F1F1;
    border-radius: 14.5px;
    font-stretch: condensed;
    margin: 0px 16px 8px 0px;
    padding: 8px 16px;
    border-radius: 25px;
    text-align: center;
    text-transform: uppercase;
    font-family: HelveticaNeue, arial;
    font-weight: 700;
`;

const CardNumContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const RateInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 48px;
    text-align: left;
    width: 100%;
`;

const RatingHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0px 10px;
    min-height: 31px;
`;

const Comment = styled.div`
    flex: 1 1 0%;
    font-size: 16px;
    line-height: 1.5;
    text-align: left;
    margin-bottom: 30px;
`;

export default ResidentRatingTabs;