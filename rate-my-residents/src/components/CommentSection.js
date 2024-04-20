import { useState } from 'react';
import styled from "styled-components";

function CommentSection (props) {
    const PLACEHOLDER = "What do you want to share? Feel free to leave comments of glorious moments with your lovely resident.";
    const [isGuidanceOpen, setIsGuidanceOpen] = useState(false);

    const onChange = (e) => {
        props.setComment(e.target.value);
    }

    const toggleGuidance = () => {
        setIsGuidanceOpen(!isGuidanceOpen);
    };

    return(
        <Wrapper>
            <Title>Write a Review</Title>
            <Content>Discuss the professor's professional abilities including teaching style and ability to convey the material clearly</Content>
            
            <GuidanceContainer>
                <GuidanceHeader onClick={toggleGuidance}>
                    <div>
                        <h2 style={{fontSize: '14px'}}>
                            <span style={{fontSize: '18px'}}>⚠ </span>
                            Guidelines
                        </h2>
                    </div>
                    <div style={{cursor: 'default', userSelect: 'none'}}>{isGuidanceOpen ? '▲' : '▼'}</div>
                </GuidanceHeader>
                {isGuidanceOpen && <GuidanceContent>
                    <ul>
                        <li>Please be thoughtful not to hurt anyone.</li>
                        <li>Do not use inappropriate language.</li>
                        <li>Do not post personal information.</li>
                    </ul>
                </GuidanceContent>}
            </GuidanceContainer>
            <div>
            <CommentArea onChange={onChange} type="text" placeholder={PLACEHOLDER}></CommentArea>
            </div>
            
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

const Title = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 16px;
    text-align: left;
`;

const Content = styled.div`
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 16px;
    text-align: left;
`;

const GuidanceContainer = styled.div`
    background: #F7F7F7;
    background: rgb(247, 247, 247);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 16px;
`;

const GuidanceHeader = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 22px 12px 10px;
    text-align: left;
    font-weight: 700;
`;

const GuidanceContent = styled.div`
    padding: 0px 22px 22px 60px;
    text-align: left;

  & > ul {
    font-size: 16px;
    list-style: disc;
    margin-bottom: 8px;
  }

  & > ul > li {
    text-align: left;
  }
`;

const CommentArea = styled.textarea`
    width: 96%;
    height: 201px;
    text-align: left;
    word-break: break-word;
    resize: none;
    font-size: 16px;
    padding: 2%;
    border-radius: 3px;
`;

export default CommentSection;