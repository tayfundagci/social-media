import React from "react";

function Profile() {
  return (
    <div className="text-2xl text-gray-400 px-10 py-10">
      <div className=" grid md:grid-cols-3  gap-4">
        <div className="bg-gray-600 col-span-3 md:col-span-1">
          <h1 className="text-2xl text-white px-10 py-10 text-center items-center">
            Profile
          </h1>
        </div>
        <div className="bg-gray-600 col-span-3 md:col-span-2 text-white p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          quidem perspiciatis voluptatibus facilis veritatis at laudantium
          commodi animi sapiente id quisquam voluptas illo dignissimos enim quo
          cum consequatur expedita mollitia.
        </div>
      </div>
    </div>
  );
}

export default Profile;
