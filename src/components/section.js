import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }
  .panel span {
    position: relative;
    display: block;
    font-size: 80px;
  }

  .panel.blue {
    background-color: #3aafa9;
  }

  .panel.white {
    background-color: white;
  }
`;

const SectionWipes2 = () => (
  <SectionWipes2Styled>
    <Controller>
      <Scene triggerHook="onLeave" duration="300%" pin>
        <Timeline wrapper={<div id="pinContainer" />}>
          <section className="panel blue">
            <div>
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginTop: "30vh",
                }}
              >
                Developing
              </span>
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "30px",
                  marginLeft: "20vw",
                  marginRight: "20vw",
                }}
              >
                I am a developer from the past 2 years, I have learnt a lot of
                thing in this journey, I am good at backend services and cloud
                services such as AWS ans Firebase
              </span>
            </div>
          </section>
          <Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
            <section className="panel white">
              <div>
                <span
                  style={{
                    color: "#3aafa9",
                    fontWeight: "bold",
                    marginTop: "30vh",
                  }}
                >
                  Designing
                </span>
                <span
                  style={{
                    color: "#3aafa9",
                    fontWeight: "bold",
                    fontSize: "30px",
                    marginLeft: "20vw",
                    marginRight: "20vw",
                  }}
                >
                  I am learning designing web sites and mobile applications from
                  the past 4 months, Every time am learning new things and
                  techniques from various web sites across the internet
                </span>
              </div>
            </section>
          </Tween>
          <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section className="panel blue">
              <div>
                <span
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    marginTop: "30vh",
                  }}
                >
                  Music Production
                </span>
                <span
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "30px",
                    marginLeft: "20vw",
                    marginRight: "20vw",
                  }}
                >
                  I am very addicted to music and sometimes will try to make
                  some tracks and sounds using various tools, Only instruments
                  like guitar, piano are not the source of music, we can produce
                  music from anything and anywhere
                </span>
              </div>
            </section>
          </Tween>
          <Tween from={{ y: "-100%" }} to={{ y: "0%" }}>
            <section className="panel white">
            <div>
                <span
                  style={{
                    color: "#3aafa9",
                    fontWeight: "bold",
                    marginTop: "30vh",
                  }}
                >
                  I am Harsha!
                </span>
                <span
                  style={{
                    color: "#3aafa9",
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginLeft: "20vw",
                    marginRight: "20vw",
                  }}
                >
                  Mail: 8888harsha4444@gmail.com
                </span>
                <span
                  style={{
                    color: "#3aafa9",
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginLeft: "20vw",
                    marginRight: "20vw",
                  }}
                >
                  GitHub: https://github.com/Har-SHAW
                </span>
              </div>
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
);

export default SectionWipes2;
