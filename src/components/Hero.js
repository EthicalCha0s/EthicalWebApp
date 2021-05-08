import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PlanetOne from '../images/planet.svg'
import PlanetTwo from '../images/planet-2.svg'
import PlanetThree from '../images/planet-3.svg'
import PlanetFour from '../images/planet-4.svg'


const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #131313;
`;
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem calc((100vw - 1300px) /2);

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 2rem;

    h1 {
        margin-bottom: 0.5rem;
        font-size: 2rem;
    }

    p {
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1
    }
`;

const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #fff;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: transparent;
`;

const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
`;

const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

    ${Image}:nth-child(1) {
        top: 10px;
        left: 10px; 
    }
    ${Image}:nth-child(2) {
        top: 170px;
        left: 10px; 
    }
    ${Image}:nth-child(3) {
        top: 350px;
        left: 50px; 
    }
    ${Image}:nth-child(4) {
        top: 100px;
        left: 75px; 
    }
`;

const Hero = () => {
    const fadeLeft = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Welcome</motion.h1>
                    <motion.p
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 1 }}
                    >I am Boris</motion.p>
                    <Button
                        whileHover={{ scale: 1.05 }}
                    >Get started</Button>
                </ColumnLeft>

                <ColumnRight>
                    <Image src={PlanetOne} alt='planet' />
                    <Image src={PlanetTwo} alt='planet' />
                    <Image src={PlanetThree} alt='planet' />
                    <Image src={PlanetFour} alt='planet' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Hero
