import React from "react";
import morefoot from "../assests/morefoot.png";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex overflow-hidden">
          <img
            src={morefoot}
            alt="About"
            className="object-cover"
          />
        </div>
        <div className="p-8">
          <h1 className="text-3xl text-gray-700 font-bold text-center mb-8">
            The Unseen of Spending Three Years at Pixelgrade
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            risus semper, laoreet sapien a, ultrices arcu. Pellentesque auctor
            magna sit amet elit tristique interdum. Donec nulla quam, viverra at
            nisi vitae, faucibus tempor magna. Cras justo odio, dapibus ac
            facilisis in, egestas eget quam. Donec elementum pulvinar odio.
          </p>
          <p className="text-gray-700 mt-4">
            Mauris blandit aliquam elit, eget tincidunt nibh pulvinar a. Sed
            porttitor lectus nibh. Donec sollicitudin pretium libero. Donec at
            libero justo. Praesent eleifend dignissim sem, sed consectetur sem
            consectetur nec.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 mt-6 rounded">Learn more</button>
        </div>
      </div>
  );
};

export default About;
