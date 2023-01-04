import React from "react";
import gs1 from "../../assets/get-start-1.png";
import gs2 from "../../assets/get-start-2.png";
import gs3 from "../../assets/get-start-3.png";
import gs4 from "../../assets/get-start-4.png";
import gs5 from "../../assets/get-start-5.png";
import gs6 from "../../assets/get-start-6.png";
import gs7 from "../../assets/get-start-7.png";
import gs8 from "../../assets/get-start-8.png";

const GetStarted = () => {
  return (
    <div
      data-aos="flip-up"
      data-aos-duration="2000"
      
    >
      <section className="container mt-[8.75rem] mx-auto lg:px-24 px-4">
        <div className="bg-[#151531] rounded-[2rem] relative lg:py-20 py-10 px-7">
          <div className="left-0 top-0 absolute">
            <img
              className="lg:block md:block hidden"
              src={gs1}
              alt="overview-cus-2"
            />
            <img
              className="lg:hidden md:hidden block"
              src={gs5}
              alt="overview-cus-2"
            />
          </div>

          <div className="absolute bottom-0 left-0">
            <img className="lg:block md:block hidden" src={gs3} alt="gs3" />
            <img className="lg:hidden md:hidden block" src={gs7} alt="gs3" />
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="lg:text-5xl text-[1.75rem] text-[#FFFAFF] font-bold w-[18.146rem] lg:w-[31.099rem] mt-[5.125rem]">
              Focus on the analytics that matter.
            </h1>
            <p className="text-[#fffaffda] w-[18.469rem] lg:w-[24.766rem] font-medium leading-5 pt-[0.773rem] text-[0.938rem] pb-[2.55rem] lg:pb-[3.75rem]">
              Grow faster with a website that helps you convert more customers.
            </p>

            <div className="flex lg:flex-row md:flex-row flex-col">
              <button className="btn border-none normal-case text-[0.938rem] px-[2.043rem] py-3 rounded-2xl h-[3.55rem] bg-[#9D0AFF]">
                Get started now
              </button>
              <button className="btn btn-outline border-white lg:ml-5 md:ml-5 ml-0 mt-5 lg:mt-0 md:mt-0 normal-case text-[0.938rem] px-[2.043rem] py-3 rounded-2xl h-[3.55rem] text-white">
                Compare plans
              </button>
            </div>
          </div>

          <div className="absolute top-0 right-0">
            <img className="lg:block md:block hidden" src={gs4} alt="gs4" />
            <img className="lg:hidden md:hidden block" src={gs8} alt="gs4" />
          </div>

          <div className="absolute right-0 bottom-0">
            <img
              className="lg:block md:block hidden"
              src={gs2}
              alt="overview-cus-1"
            />
            <img
              className="lg:hidden md:hidden block"
              src={gs6}
              alt="overview-cus-2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
