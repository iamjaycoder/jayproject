import React, {useState} from 'react'
import styled from 'styled-components'
import HeaderBar from './HeaderBar';
import HeroSection from './HeroSection';
import ContactSection from './ContactSection';
import ServiceSection from './ServiceSection';
import FooterSection from './FooterSection';

const HomePage = () => {

    const [toggle, setToggle] = useState(false)

    const onHandle = () => {
        const check = window.scrollY;

        if (check >= 80) {
            setToggle(true)
        }
        else {
            setToggle(false)
        }
    }
    window.addEventListener("scroll", onHandle);

    return (
        <Container>
            <Wrapper>
            <HeaderBar bg={toggle ? 'bg' : ''}/>
            <HeroSection/>
            <ServiceSection/>
            <ContactSection/>
            <FooterSection/>
            </Wrapper>
        </Container>
    )
}

export default HomePage;

const Container = styled.div`
font-family: Poppins;
`
const Wrapper = styled.div`

`