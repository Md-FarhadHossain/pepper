import React from "react";
import oc1 from "../../assets/overview-cus-1.png";
import oc2 from "../../assets/overview-cus-2.png";
import ocr1 from "../../assets/overview-cus-res-1.png";
import ocr2 from "../../assets/overview-cus-res-2.png";

const Overview = () => {
  return (
    <section
      data-aos="flip-down"
      data-aos-duration="2000"
      
      className="container mx-auto lg:px-24 px-4  mb-[8.75rem]"
    >
      <div className="bg-[#151531] rounded-[2rem] relative lg:py-20 py-10 px-7">
        <div className="left-0 lg:top-[2.022rem] md:top-[2.022rem]  absolute">
          <img
            className="lg:block md:block hidden"
            src={oc2}
            alt="overview-cus-2"
          />
          <img
            className="lg:hidden md:hidden block"
            src={ocr2}
            alt="overview-cus-2"
          />
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="lg:text-5xl text-[1.75rem] text-[#FFFAFF] font-bold">
            A nice and simple <br /> financial overview
          </h1>
          <p className="text-[#fffaffda] lg:block md:block hidden font-medium leading-5 pt-[0.774rem] text-[0.938rem] pb-[3.75rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Suspendisse varius enim in eros elementum tristique.
          </p>
          <p className="text-[#fffaffda] lg:hidden md:hidden block font-medium leading-5 pt-[0.774rem] text-[0.938rem] pb-[3.75rem]">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Suspendisse varius enim <br /> in eros elementum tristique.
          </p>

          <div className="bg-[#fffaff1f] flex py-8 lg:px-16 lg:w-[37.5rem] w-full px-8 justify-between rounded-[1.875rem] lg:flex-row md:flex-row flex-col lg:gap-0 gap-[1.738rem]">
            <div>
              <h1 className="text-[#FFFAFF] text-4xl font-bold">120+</h1>
              <p className="text-[#fffaff94] text-sm">Useful widgets</p>
            </div>
            <div className="lg:border-l-[1px] lg:border-r-[1px] border-[#fffaff23] px-8">
              <h1 className="text-[#FFFAFF] text-4xl font-bold">20+</h1>
              <p className="text-[#fffaff94] text-sm">Integrations</p>
            </div>
            <div>
              <h1 className="text-[#FFFAFF] text-4xl font-bold">65+</h1>
              <p className="text-[#fffaff94] text-sm">Features out</p>
            </div>
          </div>
        </div>

        <div className="absolute right-0 lg:bottom-[1.676rem] md:bottom-[1.676rem] bottom-[0.349rem]">
          <img
            className="lg:block md:block hidden"
            src={oc1}
            alt="overview-cus-1"
          />
          <img
            className="lg:hidden md:hidden block"
            src={ocr1}
            alt="overview-cus-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;
