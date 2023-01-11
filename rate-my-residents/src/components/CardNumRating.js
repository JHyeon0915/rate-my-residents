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
        height: 64px;
        background: ${background};
    `;

    return(
        <Wrapper>
            <h6>{title}</h6>
            <Ractangle>{rate}</Ractangle>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 81px;
    height: 90px;
`;

export default CardNumRating;