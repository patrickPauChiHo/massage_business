import { useRef } from "react";
import { servicesDetail } from "../constant";
import Service from "./Service";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Services = () => {
  const serviceRef = useRef(null);

  //   useGSAP(() => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     gsap.fromTo(
  //       serviceRef.current,
  //       {
  //         opacity: 0,
  //         y: 100,
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1,
  //         scrollTrigger: {
  //           trigger: serviceRef.current,
  //           start: "top 5%",
  //           end: "top 20%",
  //           toggleActions: "play none none none",
  //         },
  //       }
  //     );
  //   });

  return (
    <section
      className=" min-h-screen text-slate-300 mt-11 mx-auto w-2/3"
      id="services"
      ref={serviceRef}
    >
      <strong className="text-2xl lg:text-7xl ">Wellness</strong>
      <div className="grid md:grid-cols-1  xl:grid-cols-3 gap-10 rounded">
        {servicesDetail.map((service, i) => (
          <div key={i}>
            <Service service={service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
