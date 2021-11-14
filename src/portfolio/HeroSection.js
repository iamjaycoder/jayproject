import React from 'react';
import styled from 'styled-components';
import img from './assets/sharon2.JPG';


const HeroSection = () => {
    return (
       <Container id='home'>
           <Wrapper>
               <Image src={img}/>
               
               <Content>
                   <Title>Sharon Shawo Sagay</Title>
                   <Desc>Sharon Sagay is a Communications Specialist and Brand Strategist who prides herself
in delivering value to clients(individuals and companies alike).
With over 10 years experience, 8 of which were spent as an On Air Personality, Sharon has worked
with various brands to create and promote Brand awareness. Some of those Brands include FrieslandCampina WAMCO amongst others.</Desc>
                    <Desc>She is the Co-Founder of Megas Chara Enterprise, a company saddled with the responsibility of ensuring brands get the needed visibility they need
using best practices and at affordable rates.</Desc>
                    <Desc>She currently leads the Communications Team for LoftyInc Allied Partners Limited- a company born to create and churn out lasting companies;
which they have consistently done for over a decade.</Desc>
                    <Desc>In her spare time, she loves to moderate events of any kind, interact with people and play puzzle games.</Desc>
               </Content>
               

           </Wrapper>
       </Container>
    )
}

export default HeroSection;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
background-image: url("Image/logo.jpeg");
background-size: 36%;
background-repeat: no-repeat;
background-position: center;

@media screen and (max-width: 768px){
    background-position: 110% 150px;
    background-size: 57%;
}

@media screen and (max-width: 480px){
    background-image: none;
  
    
}
`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-around;
//flex-wrap: wrap;
align-items: center;

@media screen and (max-width: 768px){
   
    flex-direction: column;
  
}
`;
const Image = styled.img`
 width: 22.5%; 
 height: 450px;
object-fit: cover;
margin-top: 114px;
background-color: #0075af;

@media screen and (max-width: 768px){
    width: 45%;
    margin-right: 45%;
    margin-top: 160px;

}
@media screen and (max-width: 480px){
    width: 87%;
    margin: 114px auto 0 auto;
}


`;
const Content = styled.div`
margin-top: 114px;
width: 22.5%;

@media screen and (max-width: 768px){
    width: 96%;
    margin-top: 20px;
}

@media screen and (max-width: 480px){
//margin-top: 140px;
width: 90%;
}
`;
const Title = styled.div`
font-weight: bold;
font-size: 28px;
text-align: center;
margin-bottom: 10px;
font-family: Segoe UI;

@media screen and (max-width: 480px){
    font-size: 26px;
}

`;
const Desc = styled.div`
margin-bottom: 20px;
font-size: 18px;
font-family: Segoe UI;
text-align: center;

@media screen and (max-width: 480px){
    font-size: 16px;
}
`;