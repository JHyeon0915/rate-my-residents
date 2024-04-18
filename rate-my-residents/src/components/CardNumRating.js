import styled from "styled-components";

function CardNumRating ({ title, rate }) {
    return(
        <Wrapper>
            <CardNumRatingTitle>{title}</CardNumRatingTitle>
            <Rectangle title={title}>
                {rate}.0
            </Rectangle>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 81px;
    height: 90px;
    margin-bottom: 24px;
`;

const CardNumRatingTitle = styled.div`
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    margin-bottom: 4px;
    text-transform: uppercase;
`;

const Rectangle = styled.div`
    align-self: center;
    width: 72px;
    height: 64px;
    line-height: 36px;
    margin-bottom: 8px;
    padding: 14px 10px;
    font-size: 32px;
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    background: ${props => props.title === 'QUALITY' ? '#7FF6C2' : '#E4E4E4' };
`;

export default CardNumRating;