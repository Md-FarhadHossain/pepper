import React from "react";
import about1 from "../../assets/about-1.png";

const AboutCompany = () => {
  const informations = [
    {
      id: 1,
      icon: about1,
      title: "7.000 Happy users",
      description:
        "Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac",
    },
    {
      id: 2,
      icon: about1,
      title: "24/7 Support",
      description:
        "Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac",
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-4 lg:px-0 mt-[8.75rem] flex items-center justify-between gap-[11.25rem]">
        <div>
          <h1 className="w-[23.746rem] text-5xl font-bold leading-normal">
            Build a powerful website for your startup.
          </h1>
          <p className="w-[22.966rem] font-medium mt-[0.848rem] mb-10">
            Orci molestie nam vulputate nunc habitant gravida. Interdum vitae
            vivamus ipsum aliquet consectetur aliquam.
          </p>

          <button className="btn bg-[#9D0AFF]">Read more</button>
        </div>

        {/* informations */}
        <div className="flex items-center gap-10">
          <div className="grid gap-10">
            {informations.map((information) => (
              <div className="bg-white py-10 rounded-[1.875rem] shadow-2xl shadow-[#15153115] px-8" key={information.id}>
                <div className="bg-[#9D0AFF] w-14 h-14 flex items-center justify-center rounded-2xl mb-[1.375rem]">
                  <img src={information.icon} alt={information.title} />
                </div>

                <div>
                  <h1 className="font-bold text-[1.375rem] mb-[0.537rem]">{information.title}</h1>
                  <p>{information.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white py-10 px-8 shadow-2xl shadow-[#15153115] rounded-[1.875rem]">
            <div className="bg-[#9D0AFF] w-14 h-14 flex items-center justify-center rounded-2xl mb-[1.375rem]">
              <img src={about1} alt="/" />
            </div>

            <div>
              <h1 className="font-bold text-[1.375rem] mb-[0.537rem]">Global community</h1>
              <p>
                Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc
                eleifend aliquet nullam nec sit gravida ac
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
