import React from "react";
import tesla from "../assests/tesla.png";
import cl1 from "../assests/cl1.png";

const Customers = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-start px-6 mx-2">
      <img
        src={tesla}
        alt="Logo"
        className="w-[20%] h-[20%] mb-6 md:mb-0 md:mr-6"
      />
      <div className="flex-1">
        <p className="text-gray-600 mb-4">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <div className="mb-6">
          <p className="text-green-500 font-semibold">Tim Smith</p>
          <p className="text-gray-500">
            British Dragon Boat Racing Association
          </p>
        </div>
        <div className="flex px-6 flex-col md:flex-row items-center justify-center">
          <div className="flex space-x-4 px-6 mb-6 md:mb-0 items-center">
            <img src={cl1} alt="Customer 1" className="w-12 h-10" />
            <img src={cl1} alt="Customer 2" className="w-12 h-10" />
            <img src={cl1} alt="Customer 3" className="w-12 h-10" />
            <img src={cl1} alt="Customer 4" className="w-12 h-10" />
            <img src={cl1} alt="Customer 5" className="w-12 h-10" />
          </div>
          <div className="flex items-center text-green-500 font-semibold cursor-pointer">
            Meet all customers
            <span className="ml-2 text-2xl">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
