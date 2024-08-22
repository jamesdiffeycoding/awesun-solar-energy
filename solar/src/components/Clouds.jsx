"use client";
import "../App.css";

const Clouds = ({ cloudPositionState, cloudOpacityState }) => {
  return (
    <>
      <section className="grid absolute w-screen h-screen top-0 overflow-hidden">
        <img
          className="row-start-2 moving-clouds"
          src="./clouds-wide.png"
          alt="cloud"
          style={{
            width: "200%",
            height: "auto",
            position: "relative",
            opacity: `${cloudOpacityState}%`,
            left: `0%`,
            transition: "right 1s ease, opacity 1s ease",
          }}
        />
      </section>
      <section className="grid absolute w-screen h-screen top-0 overflow-hidden">
        <img
          className="row-start-2 moving-clouds"
          src="./clouds-wide.png"
          alt="cloud"
          style={{
            width: "200%",
            height: "auto",
            position: "relative",
            opacity: `${cloudOpacityState}%`,
            left: `100%`,
            transition: "right 1s ease, opacity 1s ease",
          }}
        />
      </section>
      <section className="grid absolute w-screen h-screen top-0 overflow-hidden">
        <img
          className="row-start-2 moving-clouds"
          src="./clouds-wide.png"
          alt="cloud"
          style={{
            width: "200%",
            height: "auto",
            position: "relative",
            opacity: `${cloudOpacityState}%`,
            left: `-100%`,
            transition: "right 1s ease, opacity 1s ease",
          }}
        />
      </section>
      <section className="grid absolute w-screen h-screen top-0 overflow-hidden">
        <img
          className="row-start-2 moving-clouds"
          src="./clouds-wide.png"
          alt="cloud"
          style={{
            width: "200%",
            height: "auto",
            position: "relative",
            opacity: `${cloudOpacityState}%`,
            left: `-200%`,
            transition: "right 1s ease, opacity 1s ease",
          }}
        />
      </section>
    </>
  );
};

export default Clouds;
