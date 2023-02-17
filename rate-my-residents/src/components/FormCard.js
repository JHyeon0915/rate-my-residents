import styled from "styled-components";
import RatingSlider from "./RatingSlider";
import RatingRadioButton from "./RatingRadioButton";

function FormCard (props) {
    return(
        <Wrapper>
            <div>
                <p><b>{props.title}</b></p>
            </div>
            {props.type === "slider" ? <RatingSlider setRate={props.setRate} /> : <RatingRadioButton setRate={props.setRate} />}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 30px 0px 0px;
    max-width: 886px;
    width: 100%;
    height: 156px !important;
    border: 1px solid #D7D7D7;
    box-shadow: 0px 5px 10px #D7D7D7;
    border-radius: 5px;
    margin: 15px 0px;
    font-size: 16px;
`;

export default FormCard;