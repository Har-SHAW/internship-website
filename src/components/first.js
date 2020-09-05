import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
const plane = require("./pngwave.png");
const lifeisshort = require("../images/lifeisshort.jpg")

const Sticky2 = () => (
  <div className="sticky">
    <div style={{height: "100vh", width: "100vw", background: "transparent"}} />
    <Controller>
      <Scene triggerHook="0" duration={1300} pin>
        {(progress) => (
          <div className="sticky">
            <Timeline totalProgress={progress} paused>
              <Tween
                from={{ x: "5%", top: "30%" }}
                to={{ x: "60%", top: "5%" }}
              >
                <div className="animation">
                  <img
                    style={{ width: "500px", height: "500px" }}
                    src={plane}
                    alt="plane"
                  />
                </div>
              </Tween>
              </Timeline>
              {/* <Timeline totalProgress={progress} paused
                target={
                  <div className="heading">
                    <h2>I Love to travel a lot</h2>
                  </div>
                }
              >
                <Tween from={{ opacity: 0, scale:0 }} to={{ opacity: 1 ,x: "55%", scale:1}} />
              
            </Timeline> */}
            <Timeline
              totalProgress={progress}
              paused
              target={
                <img
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    height: "100px",
                    width: "100px",
                    backgroundColor: "orange",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  src={lifeisshort}
                  alt="lifeisshort"
                />
              }
            >
              <Tween
                from={{ height:"0px", width:"0px",left: "90%", top: "50%", opacity: 0}}
                to={{ height:"100vh",width:"800px",left: "0",top:"0", opacity: 1}}
              />
            </Timeline>
          </div>
        )}
      </Scene>
    </Controller>
    <div style={{height:"100px"}}></div>
  </div>
);

export default Sticky2;
