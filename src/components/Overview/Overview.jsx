import React from "react";
import oc1 from "../../assets/overview-cus-1.png";
import oc2 from "../../assets/overview-cus-2.png";

const Overview = () => {
  return (
    <section className="container mx-auto px-24">
      <div className="bg-[#151531] rounded-[2rem] relative py-20">
        <div className=" absolute">
        <img src={oc2} alt="overview-cus-2" />
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl text-[#FFFAFF] font-bold leading-snug">
            A nice and simple <br /> financial overview
          </h1>
          <p className="text-[#FFFAFF] py-3 text-[0.938rem] pb-[3.75rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Suspendisse
            varius enim in eros elementum tristique.
          </p>

          <div className="bg-[#fffaff1f] flex py-8 px-16 w-[37.5rem] justify-between rounded-[1.875rem]">
            <div>
              <h1 className="text-[#FFFAFF] text-4xl font-bold">120+</h1>
              <p className="text-[#fffaff94] text-sm">Useful widgets</p>
            </div>
            <div className="border-l-[1px] border-r-[1px] border-[#fffaff23] px-8">
              <h1 className="text-[#FFFAFF] text-4xl font-bold">20+</h1>
              <p className="text-[#fffaff94] text-sm">Integrations</p>
            </div>
            <div>
              <h1 className="text-[#FFFAFF] text-4xl font-bold">65+</h1>
              <p className="text-[#fffaff94] text-sm">Features out</p>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-8">
          <img src={oc1} alt="overview-cus-1" />
        </div>
      </div>
      <br /><br />
      <br /><br />
    </section>
  );
};

export default Overview;
