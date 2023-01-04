import React from "react";
import features1 from "../../assets/features-1.png";
import features2 from "../../assets/features-2.png";
import features3 from "../../assets/features-3.png";
import violetIcon from "../../assets/violet-icon.png";
import greenIcon from "../../assets/green-icon.png";

const Features = () => {
  const features = [
    {
      id: 1,
      align: false,
      image: features1,
      title: "Manage and Track Your Projects",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      list: (
        <>
          <li className="flex">
            {" "}
            <img className="mr-3 mb-4" src={violetIcon} alt="/" />{" "}
            <span>Create posts, reels and stories.</span>
          </li>
          <li className="flex">
            {" "}
            <img className="mr-3 mb-4" src={violetIcon} alt="/" />{" "}
            <span>Publish your Facebook posts dynamically.</span>
          </li>
          <li className="flex">
            {" "}
            <img className="mr-3 mb-4" src={violetIcon} alt="/" />{" "}
            <span>Schedule any Twitter posts.</span>
          </li>
        </>
      ),
    },
    {
      id: 2,
      align: true,
      image: features2,
      title: "Easily manage your team's tasks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      list: (
        <>
          <li className="flex">
            {" "}
            <img className="mr-3 mb-4" src={greenIcon} alt="/" />{" "}
            <span>Create posts, reels and stories.</span>
          </li>
          <li className="flex">
            {" "}
            <img className="mr-3 mb-4" src={greenIcon} alt="/" />{" "}
            <span>Publish your Facebook posts dynamically.</span>
          </li>
          <li className="flex">
            {" "}
            <img className="mr-3 mb-4" src={greenIcon} alt="/" />{" "}
            <span>Schedule any Twitter posts.</span>
          </li>
        </>
      ),
    },
    {
      id: 3,
      align: false,
      image: features3,
      title: <>Simple financial overview for you</>,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      list: (
        <>
          <li className="flex">
            {" "}
            <img className="mr-3 mb-4" src={violetIcon} alt="/" />{" "}
            <span>Create posts, reels and stories.</span>
          </li>
          <li className="flex">
            {" "}
            <img className="mr-3 mb-4" src={violetIcon} alt="/" />{" "}
            <span>Publish your Facebook posts dynamically.</span>
          </li>
          <li className="flex">
            {" "}
            <img className="mr-3 mb-4" src={violetIcon} alt="/" />{" "}
            <span>Schedule any Twitter posts.</span>
          </li>
        </>
      ),
    },
  ];
  return (
    <section className="container mx-auto px-4 mt-[8.75rem] lg:px-10 mb-[8.75rem]">
      <div className="grid gap-[6.25rem]">
        {features.map((feature) => (
          <div
            className="flex items-center lg:justify-between md:justify-center gap-10 justify-center flex-wrap"
            key={feature.id}
          >
            <div
              className={`${feature.align ? "" : "lg:block"} md:hidden hidden`}
            >
              {feature.align ? (
                ""
              ) : (
                <>
                  <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    
                  >
                    <img src={feature.image} alt={feature.title} />
                  </div>
                </>
              )}
            </div>

            <div
              data-aos="flip-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              
              className="lg:hidden md:block block px-[2.344rem] lg:px-0"
            >
              <img src={feature.image} alt={feature.title} />
            </div>

            <div
              data-aos="fade-left"
              // data-aos-offset="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              
              className="lg:px-0 px-[1.219rem]"
            >
              <div className="lg:w-[26.25rem] w-full">
                <h1 className="text-5xl font-bold leading-tight">
                  {feature.title}
                </h1>
                <p className="mb-10 mt-[0.774rem]">{feature.description}</p>
              </div>
              <ul>{feature.list}</ul>
            </div>

            <div
              className={`${feature.align ? "lg:block" : ""} md:hidden hidden`}
            >
              {feature.align ? (
                <>
                  <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    
                    data-aos-duration="2000"
                  >
                    <img src={feature.image} alt={feature.title} />
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
