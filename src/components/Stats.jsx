import React from 'react';


const Stats = () => {
  return (
    <div className="bg-gray-100 p-14 flex flex-col md:flex-row items-center justify-between ">
      <div className="text-center px-20 md:text-left mb-8 md:mb-0">
        <h2 className="text-4xl font-bold text-gray-700">
          Helping a local <br /> 
          <span className="text-green-500">business reinvent itself</span>
        </h2>
        <p className="text-gray-600 mt-2">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 px-20">
        <div className="text-center">
          <div className="text-green-500 text-3xl font-bold">2,245,341</div>
          <div className="text-gray-600">Members</div>
        </div>
        <div className="text-center">
          <div className="text-green-500 text-3xl font-bold">46,328</div>
          <div className="text-gray-600">Clubs</div>
        </div>
        <div className="text-center">
          <div className="text-green-500 text-3xl font-bold">828,867</div>
          <div className="text-gray-600">Event Bookings</div>
        </div>
        <div className="text-center">
          <div className="text-green-500 text-3xl font-bold">1,926,436</div>
          <div className="text-gray-600">Payments</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;