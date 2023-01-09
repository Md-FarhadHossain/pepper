import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import heroImage from "../../assets/hero-image.png";

const HeroSection = () => {
  const [heading, setHeading] = useState("");
  const [buttonClicked, setButtonClicked] = useState(1);

  const [buttonTapped, setButtonTapped] = useState(0);
  
  useEffect(() => {
    fetch("http://localhost:5000/buttonTapped")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setButtonTapped(data);
      });
  }, [buttonClicked]);

  useEffect(() => {
    fetch("http://localhost:5000/heading")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHeading(data?.heading);
      });
  }, []);

  console.log(buttonTapped);

  // handle Button Click
  const handleButtonClick = async (event) => {
    event.preventDefault();

    setButtonClicked(prev => prev + 1)

    const result = {
      buttonTapped: 1,
    };

    await fetch("http://localhost:5000/buttonTapped", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <section className="py-20">
      <div data-aos="zoom-in" data-aos-duration="2000" className="text-center">
        {/* Hero Title */}
        {/* <h1 className="text-6xl lg:block md:block hidden text-[#151531] font-bold leading-tight">
          Save more and get your <br /> finances right
          
        </h1>
        <h1 className="text-5xl lg:hidden md:hidden block text-[#151531] font-bold leading-tight">
          Save more and
          <br /> get your finances right
        </h1> */}

        <div className="flex justify-center leading-relaxed">
          <h1
            style={{ lineHeight: "4.5rem" }}
            className="lg:text-6xl text-[2.5rem] md:text-5xl lg:block md:block hidden text-[#151531] font-bold leading-loose lg:w-[43.322rem] md:w-[43.322rem] w-[21.338rem]"
          >
            {heading}
          </h1>
          <h1
            style={{ lineHeight: "3rem" }}
            className="lg:text-6xl text-[2.5rem] lg:hidden md:hidden block text-[#151531] font-bold leading-loose lg:w-[43.322rem] w-[21.338rem]"
          >
            {heading}
          </h1>
        </div>

        {/* Hero description */}
        <p className="py-6 lg:block md:block hidden ">
          Orci molestie nam vulputate nunc habitant gravida. Interdum <br />{" "}
          vitae vivamus ipsum aliquet consectetur aliquam.
        </p>
        <p className="py-6 lg:hidden md:hidden block">
          Orci molestie nam vulputate nunc habitant <br /> gravida. Interdum
          vitae vivamus ipsum <br /> aliquet consectetur aliquam.
        </p>

        {/* Hero action button 'Request a demo' */}
        <button
          onClick={handleButtonClick}
          className="btn border-none mt-2 mb-16  normal-case text-[0.938rem] px-[2.043rem] py-3 rounded-2xl h-[3.55rem] bg-[#9D0AFF]"
        >
          Request a demo
        </button>
      </div>

      {/* Hero bottom image */}
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="flex justify-center w-full"
      >
        <img className="w-full lg:px-2 px-0" src={heroImage} alt="heroImage" />
      </div>
    </section>
  );
};

export default HeroSection;
