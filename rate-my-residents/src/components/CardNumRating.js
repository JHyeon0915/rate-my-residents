import { useLocation } from "react-router-dom";
import styled from "styled-components";

function CardNumRating ({ title, rate }) {
    let background;
    if(title === "QUALITY")
        background = "#7FF6C2";
    else
        background = "#E4E4E4";

    const Ractangle = styled.div`
        width: 72px;
        height: auto;
        background: ${background};
        padding: 10px 0;
    `;

    return(
        <Wrapper>
            <h6>{title}</h6>
            <Ractangle>
                <RateNum>{rate}.0</RateNum>
            </Ractangle>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 81px;
    height: 90px;
`;

const RateNum = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-weight: 900;
`;

export default CardNumRating;