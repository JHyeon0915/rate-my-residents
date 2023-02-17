import styled from "styled-components";
import alert_pic from '../assets/Images/alert.svg';

function CommentSection (props) {
    const PLACEHOLDER = "What do you want to share? Feel free to leave comments of glorious moments with your lovely resident.";
    
    const onChange = (e) => {
        props.setComment(e.target.value);
    }

    return(
        <Wrapper>
            <div style={{font: "16px"}}><b>Write a Review</b></div>
            <p>Discuss the professor's professional abilities including teaching style and ability to convey the material clearly</p>
            <Guidance>
                <image src={alert_pic}/>
                <b>Guidelines</b>
                    <ol>
                        <li>Please be thoughtful not to hurt anyone.</li>
                    </ol>
            </Guidance>
            <CommentArea onChange={onChange} type="text" placeholder={PLACEHOLDER}></CommentArea>
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
    margin: 20px 0;
`;

const CommentArea = styled.textarea`
    width: 94%;
    height: 201px;
    padding: 20px;
    text-align: left;
    word-break: break-word;
    resize: none;
`;

export default CommentSection;