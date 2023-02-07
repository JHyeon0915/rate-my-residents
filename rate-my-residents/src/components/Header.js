import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <Wrapper>
                <RMR style={{cursor: "pointer"}}>
                    <Link to="/" style={{textDecoration: "none", color: "black"}}>  
                        <b>R M R</b>
                    </Link>
                </RMR>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    margin: 0;
    padding-top: 20px;
    top: 0;
    height: 64px;
    width: 100%;
    background: black;
    color: white;
    align-items: center;
`;

const RMR = styled.div`
    textAlign: center;
    padding-top: 10px;
    background: white;
    font-size: 16px;
    width: 70px;
    height: 30px;
`;