import React from 'react'
import Logo from './assets/logo.png'
import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const FooterSection = () => {
    return (
        <Last>
      <Image src={Logo}/>
      <Text>This platform is developed by JayCoder</Text>
      <Social>
          <L href="https://www.linkedin.com/in/sharon-sagay-7894b01ab" rel="" target="_blank">
           
                <LinkedInIcon/>
            </L>
      </Social>
        </Last>
    )
}

export default FooterSection

const Last = styled.div`
width: 100%;
height: 80px;
background-color: white;
color: black;
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 480px){
    flex-direction: column;

}
`;


const Image = styled.img`
//width: 10.5%;
height: 40px;
background-color: #0075af;
object-fit: contain;
margin-left: 3%;
border-radius: 5px;

@media screen and (max-width: 480px){
    position: relative;
    right: 130px;
    top: 10px;
}

`;
const Text = styled.div`
font-family: Segoe UI;
font-size: 16px;

@media screen and (max-width: 480px){
    
    position: relative;
    bottom: -20px;
    font-size: 14px;
    
}

`;
const Social = styled.div`
//width: 6%;
//justify-content: center;
//display: flex;
height: 50px;
object-fit: contain;
margin-right: 3%;


`;
const L = styled.a`
color: black;
font-weight: bold;

@media screen and (max-width: 480px){
    position: relative;
    left: 130px;
    top: -50px;
}


.MuiSvgIcon-root {
    font-size: 40px;
    color: #0075af;
}
`;
