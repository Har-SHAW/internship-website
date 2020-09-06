import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const Sticky2 = () => (
  <div className="sticky">
    <Controller>
      <Scene triggerHook="0" duration={1300} pin>
        {(progress) => (
          <div className="sticky">
            <Timeline totalProgress={progress} paused>
              <Tween from={{ width: "0vw" }} to={{ width: "100vw" }}>
                <div
                  style={{
                    height: "10vh",
                    left: "0vh",
                    top: "0vh",
                    position: "absolute",
                    width: "0vw",
                    backgroundColor: "white",
                  }}
                ></div>
              </Tween>
            </Timeline>
            <Timeline totalProgress={progress} paused>
              <Tween from={{ width: "0vw" }} to={{ width: "100vw" }}>
                <div
                  style={{
                    height: "10vh",
                    left: "0vh",
                    top: "20vh",
                    position: "absolute",
                    width: "0vw",
                    backgroundColor: "white",
                  }}
                ></div>
              </Tween>
            </Timeline>
            <Timeline totalProgress={progress} paused>
              <Tween from={{ width: "0vw" }} to={{ width: "100vw" }}>
                <div
                  style={{
                    height: "10vh",
                    left: "0vh",
                    top: "40vh",
                    position: "absolute",
                    width: "0vw",
                    backgroundColor: "white",
                  }}
                ></div>
              </Tween>
            </Timeline>
            <Timeline totalProgress={progress} paused>
              <Tween from={{ width: "0vw" }} to={{ width: "100vw" }}>
                <div
                  style={{
                    height: "10vh",
                    left: "0vh",
                    top: "60vh",
                    position: "absolute",
                    width: "0vw",
                    backgroundColor: "white",
                  }}
                ></div>
              </Tween>
            </Timeline>
            <Timeline totalProgress={progress} paused>
              <Tween from={{ width: "0vw" }} to={{ width: "100vw" }}>
                <div
                  style={{
                    height: "10vh",
                    left: "0vh",
                    top: "80vh",
                    position: "absolute",
                    width: "0vw",
                    backgroundColor: "white",
                  }}
                ></div>
              </Tween>
            </Timeline>
            <Timeline totalProgress={progress} paused>
              <Tween from={{ width: "0vw" }} to={{ width: "100vw" }}>
                <div
                  style={{
                    height: "10vh",
                    right: "0vw",
                    top: "10vh",
                    position: "absolute",
                    width: "0vw",
                    backgroundColor: "white",
                  }}
                ></div>
              </Tween>
            </Timeline>
            <Timeline totalProgress={progress} paused>
              <Tween from={{ width: "0vw" }} to={{ width: "100vw" }}>
                <div
                  style={{
                    height: "10vh",
                    right: "0vw",
                    top: "30vh",
                    position: "absolute",
                    width: "0vw",
                    backgroundColor: "white",
                  }}
                ></div>
              </Tween>
            </Timeline>
            <Timeline totalProgress={progress} paused>
              <Tween from={{ width: "0vw" }} to={{ width: "100vw" }}>
                <div
                  style={{
                    height: "10vh",
                    right: "0vw",
                    top: "50vh",
                    position: "absolute",
                    width: "0vw",
                    backgroundColor: "white",
                  }}
                ></div>
              </Tween>
            </Timeline>
            <Timeline totalProgress={progress} paused>
              <Tween from={{ width: "0vw" }} to={{ width: "100vw" }}>
                <div
                  style={{
                    height: "10vh",
                    right: "0vw",
                    top: "70vh",
                    position: "absolute",
                    width: "0vw",
                    backgroundColor: "white",
                  }}
                ></div>
              </Tween>
            </Timeline>
            <Timeline totalProgress={progress} paused>
              <Tween from={{ width: "0vw" }} to={{ width: "100vw" }}>
                <div
                  style={{
                    height: "10vh",
                    right: "0vw",
                    top: "90vh",
                    position: "absolute",
                    width: "0vw",
                    backgroundColor: "white",
                  }}
                ></div>
              </Tween>
            </Timeline>
          </div>
        )}
      </Scene>
    </Controller>
    <div style={{ height: "100px" }}></div>
  </div>
);

export default Sticky2;
