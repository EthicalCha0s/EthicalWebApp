import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PlanetOne from "../images/planet.svg";
import PlanetTwo from "../images/planet-2.svg";
import PlanetThree from "../images/planet-3.svg";
import PlanetFour from "../images/planet-4.svg";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
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
  color: #fff;
`;
const Image = styled(motion.img)`
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
const fadeLeft = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};
const Hero = ({ isMobile }) => {
  const ColumnLeft = styled.div`
    display: flex;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: ${isMobile ? "2.5rem 4rem;" : "5rem 8rem;"};
    z-index: 2;
    min-width: ${isMobile ? "200px" : "500px"};
    pointer-events: none;

    h1 {
      margin-bottom: 0.5rem;
      font-size: ${isMobile ? "1rem" : "2rem"};
    }

    p {
      margin: 2rem 0;
      font-size: ${isMobile ? "2rem" : "4rem"};
      line-height: 1.1;
      overflow: visible;
      white-space: nowrap;
    }

    a {
      display: flex;
      justify-content: ${(props) =>
        props.tempLeftProp ? "flex-start" : "center"};
      align-items: center;
      color: #fff;
      pointer-events: all;
      text-decoration: none;
    }
    a:active {
      color: #000;
    }
  `;
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About me
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            Have a look at my projects
          </motion.p>
          <Button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
              backgroundColor: "#67F6E7",
              border: "none",
              color: "#000",
            }}
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            <a href="https://github.com/EthicalChaos">GitHub 👩‍💻</a>
          </Button>
          <Button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
              backgroundColor: "#67F6E7",
              border: "none",
              color: "#000",
            }}
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            <a href="https://www.linkedin.com/in/ethicalboris/">LinkedIn 🤝</a>
          </Button>
        </ColumnLeft>

        <ColumnRight>
          <Image
            src={PlanetOne}
            alt="planet"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, x: 300, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetTwo}
            alt="planet"
            whileTap={{ scale: 0.55 }}
            whileHover={{ scale: 0.65 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, x: -300, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetThree}
            alt="planet"
            whileTap={{ scale: 0.75 }}
            whileHover={{ scale: 0.85 }}
            drag={true}
            dragConstraints={{ left: 250, right: 250, top: 250, bottom: 250 }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: 1,
              y: 150,
              x: -150,
              transition: { duration: 1 },
            }}
          />
          <Image
            src={PlanetFour}
            alt="planet"
            whileTap={{ scale: 1.05 }}
            whileHover={{ scale: 1.15 }}
            drag={true}
            dragConstraints={{ left: 250, right: 250, top: 250, bottom: 250 }}
            initial={{ opacity: 0, y: -200 }}
            animate={{
              opacity: 1,
              y: 300,
              x: 150,
              transition: { duration: 1 },
            }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Hero;
