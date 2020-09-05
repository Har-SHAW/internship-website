import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
const sky = require("../images/sky.jpg")

const ParallaxStyled = styled.div`
  .section {
    height: 110vh;
  }
  .parallax {
    height: 100vh;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      position: absolute;
    }
    h2 {
      position: absolute;
      left: 200px;
      text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3);
      color: white;
    }
  }
`;

const Parallax = () => (
  <ParallaxStyled>
    <Controller>
      <Scene
        duration="250%"
        triggerHook="0"
        pin
      >
        <Timeline
          wrapper={<div className="parallax" />}
        >
          <Tween
            position="0"
            from={{
              yPercent: -44,
            }}
            to={{
                yPercent: 0,
            }}
          >
            <img src={sky} alt="" />
          </Tween>
          <Tween
          position="0"
            from={{
              top: '10%',
              scale: 1.5,
            }}
            to={{
              top: '70%',
              scale: 2,
            }}
          >
            <h2>I am Harsha!</h2>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
    <div style={{height:"100px"}}></div>
  </ParallaxStyled>
);

export default Parallax;