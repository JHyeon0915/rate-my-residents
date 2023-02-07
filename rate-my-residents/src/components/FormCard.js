import styled from "styled-components";
import RatingSlider from "./RatingSlider";
import RatingRadioButton from "./RatingRadioButton";

function FormCard (props) {
    console.log(props);

    return(
        <Wrapper>
            <div style={{fontSize: "20px", margin: "5px 0"}}><b>{props.title}</b></div>
            {props.type === "slider" ? <RatingSlider setRate={props.setRate} /> : <RatingRadioButton setRate={props.setRate} />}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 20px;
    height: 154px;
    border: 1px solid #D7D7D7;
    box-shadow: 0px 5px 10px #D7D7D7;
    border-radius: 5px;
    margin: 15px 0px;
`;

export default FormCard;