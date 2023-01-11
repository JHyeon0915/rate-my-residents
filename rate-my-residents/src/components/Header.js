import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <Wrapper>
                <RMR style={{}}>
                    <Link to="/" style={{textDecoration: "none", color: "black"}}>  
                        <b>R M R</b>
                    </Link>
                </RMR>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    margin: 0;
    padding-bottom: 0;
    top: 0;
    height: 64px;
    width: 100%;
    background: black;
    color: white;
    align-items: center;
`;

const RMR = styled.div`
    textAlign: center;
    padding: 0;
    background: white;
    font-size: 16px;
    width: 70px;
    height: 30px;
`;