import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home'
import ContactsIcon from '@mui/icons-material/Contacts'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'
import {animateScroll as Scroll, Link} from 'react-scroll';



const SideBar = ({bg, toggle, setToggle}) => {
    return (
        <Container bg={bg}>
            <Wrapper>    
            <Navigation>
            <Nav to="home"
           smooth={true}
           offset={-100}
           duration={500}
           
           
           onClick={()=>{
               console.log(toggle)
            setToggle(false);
        }}
           >
               <HomeIcon/>
               <span>Home</span>

            </Nav>
            <Nav to="contact"
           smooth={true}
           offset={-100}
           duration={500}
                  
           onClick={()=>{
            console.log(toggle)
         setToggle(false)
     }}
           >
               <ContactsIcon/>
               <span>Contact</span>
            </Nav>
            <Nav to="service"
           smooth={true}
           offset={-100}
           duration={500}
           
                  
           onClick={()=>{
            console.log(toggle)
         setToggle(false)
     }}
           
           >
               <HomeRepairServiceIcon/>
               <span>Services</span>
            </Nav>

            </Navigation>

            </Wrapper>
        </Container>
    )
}

export default SideBar;

const Container = styled.div`


    width: 100%;
    height: 150px;
    color: white;
    position: fixed;
    z-index: 10;
    background-color: #009670;
    opacity: 0.6;
    
    //padding-top:80px;


`;
const Wrapper = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction:column;
//  background: blue;
 
`;

const Navigation = styled.div`

display: flex;
flex-direction:column;
margin-left:10px;
// background: red;
`;
const Nav = styled(Link)`
display: flex;
align-items: center;
color: white;
margin: 15px 0;
transition: all 350ms;



// @media screen and (max-width: 480px){
//     margin: 0;
// }


.MuiSvgIcon-root {
    font-size: 20px;
    margin-right: 10px;
    color: rgba(255, 255, 255, 0.7);
    transition: all 350ms;

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
@media screen and (max-width: 480px){
//    margin: 0 10px;

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

@media screen and (max-width: 768px){
    width: 9%; 
 }
`;