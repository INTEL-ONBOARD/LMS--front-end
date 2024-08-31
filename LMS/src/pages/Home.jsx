import React from "react";
import {useNavigate} from "react-router-dom";
import About from './About';
import Contact from './Contact';

const Home = () => {
    const navigate = useNavigate();
    const LoginClick = () => {
        navigate("/dashboard");
    };

    return (
        <div>
      <div className="relative mx-auto w-full">
          <nav className="absolute bg-transparent px-4 py-3 w-full top-3 z-50">
              <div className="Container ms-auto flex justify-between items-center  ">
                  <div className="text-3xl hidden sm:block lg:ml-20 font-bold text-white">
                      LMS
                  </div>

                  <div className="flex flex-grow max-w-md lg:max-w-2xl">
                      <input
                          type="text"
                          placeholder="Search  here...."
                          className="w-full py-2 px-4 rounded-2xl border border-white bg-white text-black placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                      />
                  </div>
                  <button className="text-black bg-white py-2 px-6 rounded-2xl" onClick={LoginClick}>
                      Login
                  </button>
              </div>
          </nav>

          <div className="relative w-full h-screen bg-custom-gradient space-y-1 ">
              <img
                  src="./src/assets/LaundryBackground.png"
                  className="absolute inset-0 top-1 w-full h-full object-cover opacity-20"
                  alt="Background"
              />
              <div className="absolute inset-0 bg-custom-gradient opacity-100 top-0"></div>

              <div className="absolute top-1/4  pt-20 left-2 sm:left-8  md:left-16 lg:left-24 px-4 ">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-Barlow font-semibold text-white  ">
                      <span className="block">Experience The</span>
                      <span className="block">Best In</span>
                      <span className="block">Laundy Care</span>
                  </h1>
              </div>

              <div
                  className="absolute top-2/4 lg:pt-20 md:pt-24 sm:pt-16 pt-10 left-2 sm:left-8  md:left-16 lg:left-24 sm:text-left px-4 ">
                  <p className=" text-base md:text-xl lg:text-xl font-sans font-normal text-white opacity-85">
                      Reliable Convenient and Affordable Laundry Services.
                  </p>
              </div>

              <div className="absolute bottom-1/4 pb-6 left-4 sm:left-14 md:left-20 md:pb-0 lg:left-28   ">
                  <button
                      className="w-32  lg:w-56 h-auto text-white bg-custom-yellow lg:rounded-xl rounded-lg  text-xs lg:text-lg lg:p-3 p-3">
                      Schedule a pickup
                  </button>
              </div>
          </div>

          <div className="mt-14 mb-8 w-full md:w-3/4 lg:w-2/4 mx-auto px-4">
              <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-sans mb-8 font-medium">
                  OUR SERVICES
              </h1>
              <div className="space-y-10 ">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="flex justify-center md:justify-start">
                          <div className="bg-gray-300 w-16 h-16 md:w-20 md:h-20 rounded-full"></div>
                      </div>
                      <div className="text-center md:text-left ">
                          <h2 className="mb-2 text-lg font-sans text-black">
                              Laundry Service
                          </h2>
                          <p className="text-gray-500 ">
                              From everyday wear to special items, our laundry service handles
                              it all with meticulous attention to detail.
                          </p>
                      </div>
                  </div>
                  <hr className="bg-slate-950 mt-5 mb-10"/>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="flex justify-center md:justify-start">
                          <div className="bg-gray-300 w-16 h-16 md:w-20 md:h-20 rounded-full"></div>
                      </div>
                      <div className="text-center md:text-left">
                          <h2 className="mb-2 text-lg font-sans text-black">
                              Dry Cleaning
                          </h2>
                          <p className="text-gray-500">
                              Trust us with your delicate fabrics and formal wear. Our dry
                              cleaning service ensures your clothes are cleaned and pressed to
                              perfection.
                          </p>
                      </div>
                  </div>
                  <hr className="bg-slate-950 mt-5 mb-10"/>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="flex justify-center md:justify-start">
                          <div className="bg-gray-300 w-16 h-16 md:w-20 md:h-20 rounded-full"></div>
                      </div>
                      <div className="text-center md:text-left">
                          <h2 className="mb-2 text-lg font-sans text-black">
                              Pickup & Delivery
                          </h2>
                          <p className="text-gray-500">
                              Enjoy the convenience of our pickup and delivery service.
                              Schedule a time that works for you, and we'll handle the rest.
                          </p>
                      </div>
                  </div>
                  <hr className="bg-slate-950 mt-5 mb-10"/>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="flex justify-center md:justify-start">
                          <div className="bg-gray-300 w-16 h-16 md:w-20 md:h-20 rounded-full"></div>
                      </div>
                      <div className="text-center md:text-left">
                          <h2 className="mb-2 text-lg font-sans text-black">
                              Specialized Care
                          </h2>
                          <p className="text-gray-500">
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
        </div>

  );
};

export default Home;
