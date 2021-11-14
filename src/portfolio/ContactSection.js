import React from 'react'
import styled from 'styled-components'

const ContactSection = () => {
    return (
       <Container id="contact">
           <Wrapper>
            <Title>Subscribe To Our NewsLetter</Title>
            <Holder>
                <Input placeholder="Enter Your Email"/>
                <Button>Submit</Button>
            </Holder>
           </Wrapper>
       </Container>
    )
}

export default ContactSection;

const Container = styled.div`
width: 100%;
height: 100%;
`;
const Wrapper = styled.div`
min-height: 30vh;
display: flex;
height: 100%;
width: 100%;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #019178;

@media screen and (max-width: 768px){
    border-radius: 5px;
}

@media screen and (max-width: 480px){
    border-radius: 50px;
    min-height: 15vh;
    width: 90%;
    margin: auto;
}
`;
const Title = styled.div`
font-weight: bold;
font-size: 22px;
color: white;
margin-bottom: 20px;
font-family: Segoe UI;

@media screen and (max-width: 480px){
    font-size: 18px;
}
`;
const Holder = styled.div`
//width: 100%;
background-color: white;
border-radius: 40px;
height: 50px;
display: flex;
align-items: center;

@media screen and (max-width: 480px){
    height: 25px;
    margin-bottom: 10px;
}
`;
const Input = styled.input`
border: 0;
outline: none;
//margin-left: 5px;
flex: 1;
border-radius:40px;
padding-left: 10px;
color: black;
font-size: 18px;
font-family: Segoe UI;

@media screen and (max-width: 480px){
    font-size: 16px;
}
`;
const Button = styled.button`
border: 0;
outline: none;
background-color: transparent;
color: #0075af;
font-size: 18px;
padding-right: 10px;
cursor: pointer;
font-weight: bold;
font-family: Segoe UI;

@media screen and (max-width: 480px){
    font-size: 16px;
}
`;