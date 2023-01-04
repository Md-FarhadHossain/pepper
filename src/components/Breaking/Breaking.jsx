import React from "react";
import brakingGreen from "../../assets/braking-green.png";
import brakingViolet from "../../assets/violet-slide.png";
import "./Breaking.css";
const Breaking = () => {
  const breakings2 = [
    {
      id: 1,
      title: "Activity Stream",
    },
    {
      id: 2,
      title: "Public and private chat",
    },
    {
      id: 3,
      title: "Event scheduler",
    },
    {
      id: 4,
      title: "Appoitment scheduling",
    },
    {
      id: 5,
      title: "GNo prior credit card required",
    },
    {
      id: 6,
      title: "Group video calls",
    },
    {
      id: 8,
      title: "Activity Stream",
    },
  ];
  const breakings = [
    {
      id: 1,
      title: "Group video calls",
    },
    {
      id: 2,
      title: "Event scheduler",
    },
    {
      id: 3,
      title: "Expert on demad call",
    },
    {
      id: 4,
      title: "Email support for 24/7",
    },
    {
      id: 5,
      title: "Group video calls",
    },
    {
      id: 5,
      title: "Group video calls",
    },
    {
      id: 6,
      title: "Activity Stream",
    },
    {
      id: 6,
      title: "Activity Stream",
    },
    {
      id: 8,
      title: "No prior credit card required",
    },
  ];

  return (
    <section>
      <div className="slider">
        <div className="slide-track grid gap-[2.625rem]">
          {breakings2.map((breaking) => (
            <div className="slide" key={breaking.id}>
              <div className="flex items-center gap-3 bg-white p-4 rounded-full">
                <img className="" src={brakingViolet} alt="brakingViolet" />
                <span className="text-black">{breaking.title}</span>
              </div>
            </div>
          ))}
          {breakings2.map((breaking) => (
            <div className="slide" key={breaking.id}>
              <div className="flex items-center gap-3 bg-white p-4 rounded-full">
                <img className="" src={brakingViolet} alt="brakingViolet" />
                <span className="text-black">{breaking.title}</span>
              </div>
            </div>
          ))}
          {breakings2.map((breaking) => (
            <div className="slide" key={breaking.id}>
              <div className="flex items-center gap-3 bg-white p-4 rounded-full">
                <img className="" src={brakingViolet} alt="brakingViolet" />
                <span className="text-black">{breaking.title}</span>
              </div>
            </div>
          ))}
          {breakings2.map((breaking) => (
            <div className="slide" key={breaking.id}>
              <div className="flex items-center gap-3 bg-white p-4 rounded-full">
                <img className="" src={brakingViolet} alt="brakingViolet" />
                <span className="text-black">{breaking.title}</span>
              </div>
            </div>
          ))}
          {breakings2.map((breaking) => (
            <div className="slide" key={breaking.id}>
              <div className="flex items-center gap-3 bg-white p-4 rounded-full">
                <img className="" src={brakingViolet} alt="brakingGreen" />
                <span className="text-black">{breaking.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider">
        <div className="slide-track grid gap-[2.625rem]">
          {breakings.map((breaking) => (
            <div className="slide" key={breaking.id}>
              <div className="flex items-center gap-3 bg-white p-4 rounded-full">
                <img className="" src={brakingGreen} alt="brakingGreen" />
                <span className="text-black">{breaking.title}</span>
              </div>
            </div>
          ))}
          {breakings.map((breaking) => (
            <div className="slide" key={breaking.id}>
              <div className="flex items-center gap-3 bg-white p-4 rounded-full">
                <img className="" src={brakingGreen} alt="brakingGreen" />
                <span className="text-black">{breaking.title}</span>
              </div>
            </div>
          ))}
          {breakings.map((breaking) => (
            <div className="slide" key={breaking.id}>
              <div className="flex items-center gap-3 bg-white p-4 rounded-full">
                <img className="" src={brakingGreen} alt="brakingGreen" />
                <span className="text-black">{breaking.title}</span>
              </div>
            </div>
          ))}
          {breakings.map((breaking) => (
            <div className="slide" key={breaking.id}>
              <div className="flex items-center gap-3 bg-white p-4 rounded-full">
                <img className="" src={brakingGreen} alt="brakingGreen" />
                <span className="text-black">{breaking.title}</span>
              </div>
            </div>
          ))}
          {breakings.map((breaking) => (
            <div className="slide" key={breaking.id}>
              <div className="flex items-center gap-3 bg-white p-4 rounded-full">
                <img className="" src={brakingGreen} alt="brakingGreen" />
                <span className="text-black">{breaking.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Breaking;
