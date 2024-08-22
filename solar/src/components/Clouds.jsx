"use client";
import "../App.css";

const Clouds = ({ cloudPositionState, cloudOpacityState }) => {
  return (
    <>
      <section className="cloudGrid grid absolute w-screen h-screen top-0">
        <img
          className="row-start-2"
          src="./clouds-left.png"
          alt="cloud"
          style={{
            width: "200%",
            height: "auto",
            position: "relative",
            opacity: `${cloudOpacityState}%`,
            right: `${cloudPositionState}%`,
            transition: "right 1s ease, opacity 1s ease",
          }}
        />
        <img
          className="row-start-2"
          src="./clouds-right.png"
          alt="cloud"
          style={{
            position: "relative",
            opacity: `${cloudOpacityState}%`,
            left: `${cloudPositionState}%`,
            transition: "left 1s ease, opacity 1s ease",
          }}
        />
      </section>
    </>
  );
};

export default Clouds;
