"use client";
import "../App.css";

const Clouds = ({ cloudOpacityState }) => {
  return (
    <>
      <section className="grid absolute w-screen h-screen top-0 overflow-hidden">
        <img
          className="row-start-2 moving-clouds"
          src="./clouds-wide.png"
          alt="cloud"
          style={{
            height: "auto",
            position: "relative",
            opacity: `${cloudOpacityState}%`,
            left: `0%`,
          }}
        />
      </section>
      <section className="grid absolute w-screen h-screen top-0 overflow-hidden">
        <img
          className="row-start-2 moving-clouds"
          src="./clouds-wide.png"
          alt="cloud"
          style={{
            height: "auto",
            position: "relative",
            opacity: `${cloudOpacityState}%`,
            left: `100%`,
          }}
        />
      </section>
      <section className="grid absolute w-screen h-screen top-0 overflow-hidden">
        <img
          className="row-start-2 moving-clouds"
          src="./clouds-wide.png"
          alt="cloud"
          style={{
            height: "auto",
            position: "relative",
            opacity: `${cloudOpacityState}%`,
            left: `-100%`,
          }}
        />
      </section>
      <section className="grid absolute w-screen h-screen top-0 overflow-hidden">
        <img
          className="row-start-2 moving-clouds"
          src="./clouds-wide.png"
          alt="cloud"
          style={{
            height: "auto",
            position: "relative",
            opacity: `${cloudOpacityState}%`,
            left: `-200%`,
          }}
        />
      </section>
    </>
  );
};

export default Clouds;
