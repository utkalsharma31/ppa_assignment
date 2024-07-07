import React from 'react';
import cl1 from "../assests/cl1.png"
import cl2 from "../assests/cl2.png"
import cl3 from "../assests/cl3.png"
import cl4 from "../assests/cl4.png"
import cl5 from "../assests/cl5.png"
import cl6 from "../assests/cl6.png"
import cl7 from "../assests/cl7.png"

const clients = [
  { id: 1, src: cl1, },
  { id: 2, src: cl2, },
  { id: 3, src: cl3, },
  { id: 4, src: cl4, },
  { id: 5, src: cl5, },
  { id: 6, src: cl6, },
  { id: 7, src: cl7, },
];

function Clients() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Clients</h2>
        <p className="mt-4 text-lg text-gray-500 text-center">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-7 ">
          {clients.map(client => (
            <div key={client.id} className="col-span-1 flex justify-center">
              <img className="h-12" src={client.src} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
