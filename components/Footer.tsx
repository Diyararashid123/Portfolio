import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";


const Footer = () => {
 
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        Currently actively searching for new <span className="text-purple">job</span> opportunities <span className="text-purple">Contact me</span> to explore how my skills can contribute to your team.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        As a Software Engineer with 2-3 years of experience in web development, including 4-5 months at Disdas as a Web Developer, and a Computer Engineering degree, I am passionate about creating impactful solutions that benefit clients, companies, and society. I thrive on problem-solving and enjoy developing unique, innovative solutions that can pleasantly surprise anyone. Currently seeking new opportunities to further develop my skills and contribute to meaningful projects. Feel free to reach out and contact me.
</p>

        <a href="mailto:diyararashid@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Diyara Rashid Number: 0733541642  Country: Sweden City: Helsingborg
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id} 
              href={info.link}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
             >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;