import React from "react";
import logo from "../../assets/white-logo.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import email from "../../assets/email.png";

const Footer = () => {
  return (
    <div className="bg-[#151531]">
      <footer className="footer mt-[8.75rem] px-4 lg:px-0 container mx-auto pb-[3.8rem] py-[6.25rem] text-neutral-content">
        <div>
          {/* Logo */}
          <img src={logo} alt="logo" />

          {/* teagline */}
          <p className="w-[19.401rem] font-medium text-base mt-[1.188rem] mb-[1.261rem] text-[#FFFAFF]">
            Pepper is one of the most reliable delievery patlform magement
            service to automate your network.
          </p>

          {/* Read more button */}
          <button className="btn border-none normal-case text-[0.938rem] px-[2.043rem] py-3 rounded-2xl h-[3.55rem] bg-[#9D0AFF]">
            Read more
          </button>

          {/* Social icons */}
          <div className="flex gap-4 mt-[2.546rem]">
            <img src={linkedin} alt="linkedin" />
            <img src={twitter} alt="twitter" />
            <img src={email} alt="email" />
          </div>

          {/* Copyright */}
          <div className="mt-[12.368rem] lg:block md:block hidden">
            <p className="text-sm">
              © All rights reserved.{" "}
              <span className="text-[#00F59B]">Farhad Hossain</span>. Powered by{" "}
              <span className="text-[#9D0AFF]">Farhad</span>.
            </p>
          </div>
        </div>

        {/* Footer link */}
        <div className="flex gap-[4.983rem] text-base">

            {/* Pages main */}
          <div className="flex flex-col gap-4 ext-[#FFFAFF]">
            <span className="font-bold text-xl text-[#FFFAFF]">Pages main</span>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Pricing Ecommerce</a>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Careers Template</a>
            <a className="link link-hover">Contact</a>
          </div>

          {/* Template pages */}
          <div className="flex flex-col text-[#FFFAFF] gap-4">
            <span className="font-bold text-xl text-[#FFFAFF]">
              Template pages
            </span>
            <a className="link link-hover">Style guide</a>
            <a className="link link-hover">Licenses</a>
            <a className="link link-hover">Changelog</a>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-20 lg:hidden md:hidden block">
          <p className="text-sm">
            © All rights reserved.{" "}
            <span className="text-[#00F59B]">Farhad Hossain</span>. Powered by{" "}
            <span className="text-[#9D0AFF]">Farhad</span>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
