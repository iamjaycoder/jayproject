import React, { useState } from "react";
import styled from "styled-components";
import logo from "./assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import {animateScroll as Scroll, Link,} from "react-scroll";
//import MenuIcon from "@mui/icons-material/Menu";
//import SideBar from "./SideBar";

const HeaderBar = ({ bg }) => {
  const [toggle, setToggle] = useState(false);

  const onHandle = () => {
    setToggle(!toggle);
  };

  return (
    <MenuContainer>
      <Container bg={bg}>
        <Wrapper>
          <Logo
            src={logo}
            onClick={() => {
              Scroll.scrollToTop();
            }}
          />
          <Navigation>
            <Nav
              to='home'
              smooth={true}
              offset={-100}
              duration={500}>
              <HomeIcon />
              <span>Home</span>
            </Nav>
            <Nav
              to='contact'
              smooth={true}
              offset={-100}
              duration={500}>
              <ContactsIcon />
              <span>Contact</span>
            </Nav>
            <Nav
              to='service'
              smooth={true}
              offset={-100}
              duration={500}>
              <HomeRepairServiceIcon />
              <span>Services</span>
            </Nav>
          </Navigation>

          <Button
            onClick={() => {
              Scroll.scrollToBottom();
            }}>
            Goto Last
          </Button>
        </Wrapper>
        <MediaScreen>
          {/* <Logo src={logo} /> */}
          <Menu
            onClick={() => {
              onHandle();
              console.log(toggle);
            }}>
            {/* <MenuIcon /> */}
          </Menu>
        </MediaScreen>
      </Container>
      {/* {toggle ? <SideBar toggle= {toggle} setToggle={setToggle}/> : null}; */}
    </MenuContainer>
  );
};

export default HeaderBar;

const Menu = styled.div`
//   margin-right: 10px;
`;

const MenuContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
`;
const MediaScreen = styled.div`
//   display: none;

//   @media screen and (max-width: 768px) {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
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
-webkit-backdrop-filter: blur( 4px );
// border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
background: ${({ bg }) => bg ?  "transparent" :  "#0075af"}
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
`;
const Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-left: 20px;
  cursor: pointer;

//   @media screen and (max-width: 768px) {
//     width: 50px;
//     height: 50px;
//     margin-left: 10px;
//   }
  
`;
const Navigation = styled.div`
  display: flex;
  flex: 1;
`;
const Nav = styled(Link)`
  margin: 0 20px;
  display: flex;
  align-items: center;
  color: white;

  .MuiSvgIcon-root {
    font-size: 40px;
    margin-right: 5px;
    color: rgba(255, 255, 255, 0.7);
    transition: all 350ms;
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

    .MuiSvgIcon-root {
      color: rgba(255, 255, 255, 1);
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
  margin-right: 20px;
  width: 100px;
  height: 40px;
  outline: none;
  border: 0;
  color: #0075af;
  border-radius: 3px;
  background-color: white;
  transform: scale(1);
  transition: all 350ms;
  font-weight: bold;
  font-family: roboto;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    border: 2px solid white;
    background-color: transparent;
    color: white;
  }

//   @media screen and (max-width: 768px) {
//     width: 9%;
//   }
`;
