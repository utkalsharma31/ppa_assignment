import React from "react";
import comm1 from "../assests/comm1.png";
import comm2 from "../assests/comm2.png";
import comm3 from "../assests/comm3.png";

const Community = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-4">
        Manage your entire community in a single system
      </h1>
      <p className="text-xl text-center mb-8">Who is Nextcent suitable for?</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={comm1} alt="Use Case Icon" class="w-25 h-20 mx-auto mb-2" />
          <h2 className="text-xl font-bold mb-2">Membership Organisations</h2>
          <p className="text-gray-700">
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={comm2} alt="Use Case Icon" class="w-25 h-20 mx-auto mb-2" />
          <h2 className="text-xl font-bold mb-2">National Associations</h2>
          <p className="text-gray-700">
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={comm3} alt="Use Case Icon" class="w-25 h-20 mx-auto mb-2" />
          <h2 className="text-xl font-bold mb-2">Clubs And Groups</h2>
          <p className="text-gray-700">
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
