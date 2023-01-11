import styled from "styled-components";
import alert_pic from '../assets/Images/alert.svg';

function CommentSection (props) {
    const onChange = (e) => {
        props.setComment(e.target.value);
    }

    return(
        <Wrapper>
            <div style={{font: "16px"}}><b>Write a Review</b></div>
            <Guidance>
                <image src={alert_pic}/>
                <b>Guidelines</b>
                    <ol>
                        <li>Please be thoughtful not to hurt anyone.</li>
                    </ol>
            </Guidance>
            <input onChange={onChange} type="text"></input>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    border: 1px solid #D7D7D7;
    box-shadow: 0px 5px 10px #D7D7D7;
    border-radius: 5px;
    margin: 15px 0px;
    padding: 20px;
`;

const Guidance = styled.div`
    background: #F7F7F7;
    margin: 10px 0;
`;

export default CommentSection;