import React from "react";
import styled from "styled-components";
import data from "./data.json";


const ServiceSection = () => {
  return (
    <Container id='service'>
      <Wrapper>
        {data.map((props) => (
          <Card>
            <Image src={props.img} />
            <Content>
              <Title>{props.title}</Title>
              <Desc>{props.desc}</Desc>
            </Content>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ServiceSection;

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;

  @media screen and (max-width: 768px){
      
      min-height: 40vh;
  }
  
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  //flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 480px){
    flex-direction: column;
 }

`;
const Card = styled.div`
  width: 39%;
  //height: 560px;
  background-color: lightblur;
  border: 3px solid #b8b6b9;
  border-radius: 5px;
  margin: 1.5%;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(1.03);
    border: 3px solid #0075af;
  }

  @media screen and (max-width: 768px){
      width: 78%;
      
  }
  @media screen and (max-width: 480px){
      width: 84%;
      margin-bottom: 10px;
  }
  
`;
const Image = styled.img`
  width: 100%;
  //height: 44%;
  object-fit: cover;
  background-color: #0075af;
  border-radius: 5px 5px 0 0;
`;
const Content = styled.div`
  color: black;
`;
const Title = styled.div`
  margin-bottom: 0.75%;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  font-family: Segoe UI;
  text-transform: uppercase;

  @media screen and (max-width: 480px){
    font-size: 20px;
}
`;
const Desc = styled.div`
  margin: 0.75%;
  text-align: center;
  font-family: Segoe UI;
  font-size: 16px;

  @media screen and (max-width: 480px){
    font-size: 16px;
}
`;
