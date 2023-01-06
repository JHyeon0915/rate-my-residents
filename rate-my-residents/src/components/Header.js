import styled from "styled-components";

const Wrapper = styled.section`
    margin: 0;
    padding: 0;
    top: 0;
    height: 64px;
    width: 100%;
    background: black;
    color: white;
    `;

export default function Header(){
    return(
        <Wrapper>
                <h3 style={{textAlign: "center", padding: "20px"}}>R M R</h3>
        </Wrapper>
    )
}