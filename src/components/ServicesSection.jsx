// import { features } from "../constants";
import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";

const ServicesSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        {/* <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span> */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl my-10 lg:mt-20 tracking-wide">
          Our{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Services
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-10 border border-gray-700 rounded-xl">
            <p className="text-4xl mb-8">
              UI/UX DESIGING <br></br>
              <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                (Most Popular)
              </span>

            </p>
            <p className="mb-8">
              <span className="text-1xl mt-6 mr-2">We specialize in providing top-notch UI/UX design services aimed at creating intuitive and engaging user experiences. Our expert designers focus on understanding user behavior and crafting interfaces that are both aesthetically pleasing and highly functional. Partner with us and let us help you to transform your ideas into visually stunning and user-friendly digital solutions.</span>
            </p>

            <a
              href="#"
              className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-5 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
            >
              Know More
            </a>
          </div>
        </div>


        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-10 border border-gray-700 rounded-xl">
            <p className="text-4xl mb-8">
              WEB DEVELOPMENT <br></br>
              <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                (Most Popular)
              </span>

            </p>
            <p className="mb-8">
              <span className="text-1xl mt-6 mr-2">we specialize in delivering exceptional web development services that bring your digital vision to life. Our team of skilled developers is proficient in the latest technologies and frameworks, ensuring your website is not only visually appealing but also highly functional and responsive. Let us help you create a powerful online presence that resonates with your audience.</span>
            </p>

            <a
              href="#"
              className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-5 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
            >
              Know More
            </a>
          </div>

        </div>



        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-10 border border-gray-700 rounded-xl">
            <p className="text-4xl mb-8">
              DIGITAL MARKETING <br></br>
              <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                (Most Popular)
              </span>

            </p>
            <p className="mb-8">
              <span className="text-1xl mt-6 mr-2">we offer comprehensive SEO services designed to elevate your online visibility and drive organic traffic to your website. Our team of SEO experts employs proven strategies and techniques to enhance your search engine rankings, ensuring that your business stands out in a crowded digital landscape. Partner with us to enhance your online presence and attract more customers through effective SEO practices.</span>
            </p>

            <a
              href="#"
              className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-5 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
            >
              Know More
            </a>
          </div>

        </div>
      </div>
      {/* <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 ">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ServicesSection;
