import React from "react";
import trustedTeam from "../../assets/trusted-team.png";
import trustedTeamResponsive from "../../assets/trusted-team-responsive.png";

const TrustedTeam = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-anchor-placement="top-center"
      className="flex justify-center flex-col container mx-auto items-center py-28"
    >
      <p className="text-[#15153183] text-lg pb-8">
        Trusted and loved by the world’s best teams
      </p>
      <img
        className=" lg:block md:block hidden"
        src={trustedTeam}
        alt="trustedTeam"
      />
      <img
        className="pt-6 lg:hidden md:hidden block"
        src={trustedTeamResponsive}
        alt="trustedTeamResponsive"
      />
    </section>
  );
};

export default TrustedTeam;
