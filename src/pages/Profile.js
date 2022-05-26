import React from "react";

function Profile() {
  return (
    <div className="text-2xl text-gray-400 px-10 py-10">
      <div className=" grid md:grid-cols-3  gap-4">
        <div className="bg-orange-600 col-span-1">
          <h1 className="text-2xl text-gray-400 px-10 py-10">Profile</h1>
        </div>
        <div className="bg-orange-200 col-span-2">
          {" "}
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
