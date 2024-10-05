import { useRef } from "react";
import { FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      aboutRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 35%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <section
      className="text-slate-300 w-2/3 mx-auto min-h-screen"
      id="about"
      ref={aboutRef}
    >
      <div className=" mt-20 flex flex-wrap justify-center gap-10 mb-10 ">
        <strong className="text-2xl lg:text-7xl">T&K Massage</strong>
        <span className="max-w-full text-xl lg:text-5xl leading-relaxed">
          Relax and revitalise with a choice of T&K Massage's special spa
          treatments, massages and facials. Inspired by the five elements and
          Traditional Chinese Medicine, T&K Massage is a sanctuary where your
          mind, body and soul connect.
        </span>
      </div>
      <div className=" grid xl:grid-cols-3 sm:grid-cols-1  justify-between items-center gap-12 mt-10 mb-10">
        <div className=" flex flex-col gap-10 w-full h-full divide-y divide-slate-400">
          <strong className="text-2xl lg:text-5xl">Operating Hours</strong>
          <p className="text-xl lg:text-3xl pt-10">
            {" "}
            Mon - Sun: 10:00am to 9:00pm
          </p>
        </div>
        <div className=" flex flex-col gap-10 w-full h-full divide-y divide-slate-400">
          <strong className="text-2xl lg:text-5xl">Find US</strong>
          <div className="flex flex-col gap-5 pt-10">
            <div className="flex flex-row  items-center gap-5 text-2xl lg:text-3xl">
              <FaPhone size={35} />
              <p className="text-sm lg:text-3xl">0421440777</p>
            </div>
            <div className="flex flex-row  items-center gap-5">
              <CiLocationOn size={35} />
              <p className="text-sm lg:text-3xl">
                1 Brookwood St Glen Waverley VIC 3150
              </p>
            </div>
            <div className="flex flex-row  items-center gap-5">
              <MdOutlineEmail size={35} />
              <p className="text-sm lg:text-3xl"> tkmassage@gmail.com</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-10 w-full h-full divide-y divide-slate-400">
          <strong className="text-2xl lg:text-5xl">Parking</strong>
          <p className="text-xl lg:text-3xl pt-10"> Off street parking</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-10 mt-10 border-t border-yellow-200 lg:border-0">
          <br />
          <strong className="text-xl lg:text-5xl">HYGIENE MEASURES</strong>
          <p className="text-md lg:text-3xl">
            We make every effort to ensure the safety and well-being of our
            guests and employees.
          </p>
        </div>
        <div className="flex flex-col gap-10 mt-10">
          <br />
          <strong className="text-xl lg:text-5xl">WHAT WE ARE DOING</strong>
          <span className="text-md lg:text-3xl flex flex-row gap-10 items-center">
            <IoIosArrowRoundForward />
            <p>Sanitising guests contact areas after use</p>
          </span>
          <span className="text-md lg:text-3xl  flex flex-row gap-10 items-center">
            <IoIosArrowRoundForward />
            <p>Providing hand sanitisers for guest usage</p>
          </span>
          <span className="text-md lg:text-3xl  flex flex-row gap-10 items-center">
            <IoIosArrowRoundForward />
            <p>
              Sanitising equipment and facilities before the start of treatments
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
