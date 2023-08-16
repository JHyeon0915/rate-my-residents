import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <Wrapper>
                <RMR style={{cursor: "pointer"}}>
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>  
                        <p><b>R M R</b></p>
                    </Link>
                </RMR>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45px;
    margin: 0;
    padding: 1rem 0;
    background: black;
    color: white;
`;

const RMR = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 3rem;
    background: white;
    font-size: 16px;
`;