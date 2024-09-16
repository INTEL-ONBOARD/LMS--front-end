import React from "react";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  const navigate = useNavigate();
  const LoginClick = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="relative mx-auto w-full">
        <nav className="absolute top-1 left-0 w-full bg-transparent flex items-center p-4 z-50">
          <div className="flex-shrink-0 ml-4 sm:ml-10">
            <h1 className="text-2xl sm:text-4xl font-bold text-white font-quantico">
              LMS
            </h1>
          </div>

          <div className="flex-grow flex justify-center mx-4 sm:mx-10">
            <div className="relative w-full max-w-xs sm:max-w-xl">
              <img
                className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-45 hidden sm:block"
                src="./src/images/iconamoon_search-light.png"
                alt="Search Icon"
              />
              <input
                type="text"
                placeholder="Search here..."
                className="w-full pl-12 px-4 py-2 rounded-full bg-white text-gray-700 placeholder-gray-500 shadow-md"
              />
            </div>
          </div>

          <div className="flex-shrink-0 mr-4 sm:mr-10">
            <button
              className="px-4 py-2 bg-gray-300 text-purple-950 rounded-md font-quantico"
              onClick={LoginClick}
            >
              Login
            </button>
          </div>
        </nav>

        <div className="relative w-full h-screen sm:h-screen bg-custom-gradient space-y-1">
          <img
            src="./src/assets/LaundryBackground.png"
            className="absolute inset-0 top-1 w-full h-full object-cover opacity-20"
            alt="Background"
          />
          <div className="absolute inset-0 bg-custom-gradient opacity-100 top-0"></div>

          <div className="absolute top-1/2 sm:top-2/3 transform -translate-y-1/2 left-4 sm:left-28 text-center sm:text-left space-y-4 mt-5">
            <h1 className="text-4xl sm:text-7xl font-bold font-poppins mb-3 animate-slideInY text-white">
              WE'LL DO YOUR
            </h1>
            <h1 className="text-5xl sm:text-8xl font-extrabold font-poppins animate-slideInY text-white ">
              DIRTY WORK
            </h1>
            <h4 className="text-lg sm:text-xl font-light font-poppins mb-10 opacity-90 animate-slideInY text-white ">
              Reliable Convenient and Affordable Laundry Services.
            </h4>
            <button className="w-5/6 px-6 py-1 sm:px-7 sm:py-3 h-14 bg-gray-300 text-purple-950 font-quantico text-xl sm:text-3xl tracking-widest rounded-md animate-slideButton opacity-0">
              SCHEDULE PICKUP
            </button>
          </div>
        </div>

        <div className="mt-14 mb-8 w-full md:w-3/4 lg:w-2/4 mx-auto px-4">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-barlow mb-10 font-medium">
            OUR SERVICES
          </h1>
          <div className="space-y-10 ">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex justify-center md:justify-start">
                <div className="bg-circle-color w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center">
                  <img
                    src="./src/images/Washing Machine.png"
                    alt="Eco-friendly Cleaning"
                    className="w-12 h-12 object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left ">
                <h2 className="mb-2 text-xl font-barlow text-black font-medium">
                  Laundry Service
                </h2>
                <p className="text-gray-500 font-barlow font-medium">
                  From everyday wear to special items, our laundry service
                  handles it all with meticulous attention to detail.
                </p>
              </div>
            </div>
            <hr className="bg-slate-950 mt-5 mb-10" />
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex justify-center md:justify-start">
                <div className="bg-circle-color w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center">
                  <img
                    src="./src/images/Eco-friendly Cleaning.png"
                    alt="Eco-friendly Cleaning"
                    className="w-12 h-12 object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="mb-2 text-xl font-barlow text-black font-medium">
                  Dry Cleaning
                </h2>
                <p className="text-gray-500 font-barlow font-medium">
                  Trust us with your delicate fabrics and formal wear. Our dry
                  cleaning service ensures your clothes are cleaned and pressed
                  to perfection.
                </p>
              </div>
            </div>
            <hr className="bg-slate-950 mt-5 mb-10" />
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex justify-center md:justify-start">
                <div className="bg-circle-color w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center">
                  <img
                    src="./src/images/In Transit.png"
                    alt="Eco-friendly Cleaning"
                    className="w-12 h-12 object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="mb-2 text-xl font-barlow text-black font-medium">
                  Pickup & Delivery
                </h2>
                <p className="text-gray-500 font-barlow font-medium">
                  Enjoy the convenience of our pickup and delivery service.
                  Schedule a time that works for you, and we'll handle the rest.
                </p>
              </div>
            </div>
            <hr className="bg-slate-950 mt-5 mb-10" />
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex justify-center md:justify-start">
                <div className="bg-circle-color w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center">
                  <img
                    src="./src/images/Honesty.png"
                    alt="Eco-friendly Cleaning"
                    className="w-12 h-12 object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="mb-2 text-xl font-barlow text-black font-medium">
                  Specialized Care
                </h2>
                <p className="text-gray-500 font-barlow font-medium">
                  Need special care for unique fabrics or items? We offer
                  customized solutions for all your laundry needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Contact />

      {/* <nav className="absolute bg-transparent px-4 py-3 w-full top-3 z-20">
        <div className="Container ms-auto flex justify-between items-center  ">
          <div className="text-3xl hidden sm:block lg:ml-20 font-bold text-white">
            LOGO
          </div>

          <div className="w-5/12 flex gap-52 rounded-full border bg-white text-black placeholder-gray-400 ">
            <input
              type="text"
              placeholder="Search  here...."
              className="w-full py-2 px-2 rounded-full ml-10 border-white focus:border-yellow-400 focus:outline-none"
            />
            <img
              className="absolute left-2/3 pt-2 opacity-45 "
              src="./src/images/iconamoon_search-light.png"
            />
          </div>
          <button
            className="text-black bg-white h-8 px-4 font-medium rounded-md text-barlow"
            onClick={LoginClick}
          >
            LOGIN
          </button>
        </div>
      </nav> */}
    </div>
  );
};

export default Home;
