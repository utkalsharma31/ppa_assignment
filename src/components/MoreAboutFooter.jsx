import React from 'react';
import morefoot from "../assests/morefoot.png"

const MoreAboutFooter = () => {
  return (
      <div className="py-16 container mx-auto px-4 flex flex-row items-center">
        <div className="w-1/2">
          <img src={morefoot} alt="" className="w-[50%] h-[50%] object-cover" />
        </div>
        <div className="w-1/2 pl-4">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">
            How to design your site footer like we did
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
            molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at
            libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta
            nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt.
            Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est,
            finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
  );
};

export default MoreAboutFooter;