import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Home from "./home";
const plane = require("../images/pngwave.png");
const lifeisshort = require("../images/lifeisshort.jpg");
const earth = require("../images/earth.png");

const Sticky2 = () => (
  <div className="sticky">
    {/* <div style={{height: "100vh", width: "100vw", background: "transparent"}} /> */}
    <Home />
    <Controller>
      <Scene triggerHook="0" duration={1300} pin>
        {(progress) => (
          <div className="sticky">
            <Timeline totalProgress={progress} paused>
              <Tween
                from={{ x: "5%", top: "30%" }}
                to={{ x: "60%", top: "5%" }}
              >
                <div className="animation" style={{zIndex: 9}}>
                  <img
                    style={{ width: "500px", height: "500px" }}
                    src={plane}
                    alt="plane"
                  />
                </div>
              </Tween>
            </Timeline>
            <Timeline
              totalProgress={progress}
              paused
              target={
                <img
                  src={earth}
                  alt=""
                  style={{ height: "300px", width: "300px" }}
                ></img>
              }
            >
              <Tween
                from={{ opacity: 0, x: "50vw", y: "10vh" }}
                to={{ opacity: 1, x: "80vw", y: "50vh" }}
              />
            </Timeline>
            <Timeline
              totalProgress={progress}
              paused
              target={
                <img
                  style={{
                    position: "absolute",
                    backgroundColor: "transparent",
                    overflow: "hidden",
                  }}
                  src={lifeisshort}
                  alt=""
                />
              }
            >
              <Tween
                from={{
                  height: "100vh",
                  width: "0px",
                  left: "0",
                  opacity: 0,
                }}
                to={{
                  height: "100vh",
                  width: "800px",
                  left: "0",
                  opacity: 1,
                }}
              />
            </Timeline>
          </div>
        )}
      </Scene>
    </Controller>
  </div>
);

export default Sticky2;
