import React, {useState} from "react";
import styled from "styled-components";
import logo from "./assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import {animateScroll as Scroll, Link,} from "react-scroll";
import {FaBars, FaTimes} from 'react-icons/fa'


const HeaderBar = ({ bg }) => {

    const [toggle, setToggle] = useState(false);

  const onHandle = () => {
    setToggle(!toggle);
  };
  const offHandle = () => {
    setToggle(false);
  }
 
  return (
        
      <Container bg={bg}>
        <Wrapper>
          
          <Logo
            src={logo}
            onClick={() => {
              Scroll.scrollToTop();
            }}
          />
          <MobileMenu onClick={onHandle}>
              {toggle ? <FaTimes/> : <FaBars/>}
          </MobileMenu>
          
          <Navigation toggle={toggle} onClick={offHandle}>
            <Nav
            onClick={offHandle}
              to='home'
              smooth={true}
              offset={-100}
              duration={500}>
              <HomeIcon />
              <span>Home</span>
            </Nav>
            <Nav
            onClick={offHandle}
              to='service'
              smooth={true}
              offset={-100}
              duration={500}>
              <HomeRepairServiceIcon />
              <span>Services</span>
            </Nav>
            <Nav
            onClick={offHandle}
              to='contact'
              smooth={true}
              offset={-100}
              duration={500}>
              <ContactsIcon />
              <span>Contact</span>
            </Nav>
          </Navigation>
         
          <Button
            onClick={() => {
              Scroll.scrollToBottom();
            }}>
            Goto Last
          </Button>
        </Wrapper>
      </Container>
     
  );
};

export default HeaderBar;

const MobileMenu = styled.div`
display: none;

@media screen and (max-width: 480px){
    display: flex;
    align-items: center;
    position: absolute;
    top: 20px;
    right:20px;
    font-size: 30px;
    //colour: ${({ cl }) => cl ?  "#fff" :  "#0075af"};
    background: #0075af;

}
`;


const Container = styled.div`
  width: 100%;
  height: 80px;
  color: white;
  position: fixed;
  z-index: 10;
  background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );cd
// border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
background: ${({ bg }) => bg ?  "transparent" :  "#0075af"}


`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  
   @media screen and (max-width: 768px) {
    flex-direction: column;
    //justify-content: center;
    //background: red
  }
`;
const Logo = styled.img`
  width: 10.5%;
  height: 80px;
  object-fit: contain;
  margin-left: 1.5%; 
  cursor: pointer;

  @media screen and (max-width: 480px){
    width: 18%;
  }


`;
const Navigation = styled.div`
  display: flex;
  flex: 1;

  @media screen and (max-width: 768px) {
    //background: red;
    width: 100%;
    //margin-top: 130px;
  }

  @media screen and (max-width: 480px){
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 80px;
    background: #019178;
    left: ${({toggle}) => (toggle ? "0" : "-100%")};
    width: 100%;
    height: 90vh;
    transition: all 350ms ease-in-out;
}

`;
const Nav = styled(Link)`
  margin: 0 1.5%;
  display: flex;
  align-items: center;
  color: white;

  @media screen and (max-width: 768px){
     margin:  auto;
    color: #0075af;
}
@media screen and (max-width: 480px){
  color: #fff;
  font-size: 20px;
  margin: 30px auto;
}

  .MuiSvgIcon-root {
    font-size: 40px;
    margin-right: 3%;
    color: rgba(255, 255, 255, 0.7);
    transition: all 350ms;

    @media screen and (max-width: 768px){
        color: #0075af;
        font-size: 30px;
    }
    @media screen and (max-width: 480px){
       color: #fff;
    }
  }

  :after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: white;
    opacity: 0;
    transition: all 350ms;
    transform: scale(0);
    transform-origin: center;

   
  }

  :hover {
    cursor: pointer;

    @media screen and (max-width: 768px){
    
     color: #019178;
 }
    @media screen and (max-width: 480px){
    
     color: #fff;
 }

    .MuiSvgIcon-root {
      color: rgba(255, 255, 255, 1);

      @media screen and (max-width: 768px){
       color: #019178;
   }
   @media screen and (max-width: 480px){
    
    color: #fff;
}
    }

    span {
      :after {
        opacity: 1;
        transform: scale(1);
        
        
      }
    }
  }


`;
const Button = styled.button`
   margin-right: 1.5%;
   width: 10.5%;
   height: 40px;
   outline: none;
   border: 0;
   color: #0075af;
   border-radius: 3px;
   background-color: white;
   transform: scale(1);
   transition: all 350ms;
   font-weight: bold;
   font-family: Segoe UI;

   
@media screen and (max-width: 768px){

  position: absolute;
  //left: 42%;
  //bottom: 100px;
  background: red;
  display: none;
  }
 

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    border: 2px solid white;
    background-color: transparent;
    color: white;
  }



@media screen and (max-width: 480px){
  display: none;
}

`;
