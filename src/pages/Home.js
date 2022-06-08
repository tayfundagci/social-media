import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-2xl text-gray-200 my-10 mx-10 grid gap-5 sm:grid-cols-4   ">
      <div className="bg-gray-600 p-5 rounded sm:grid-cols-4 col-span-1 h-fit">
        <div className="flex justify-center">
          <img
            className="rounded-full flex content-center h-24 border-2"
            src="https://picsum.photos/200/200"
            alt="profile"
          />
        </div>
        <Link to="/profile">
          <h1 className="text-center mt-4 ">Tayfun Dağcı</h1>
        </Link>
      </div>

      <div className="bg-gray-600 p-5 rounded sm:grid-cols-8 col-span-3 px-10">
        <div className=" flex justify-between ">
          <div className="flex gap-5 top-0">
            <img
              className="content-center h-12 "
              src="https://picsum.photos/200/200"
              alt="profile"
            />
            <div className="top-0">
              <p className="text-sm font-bold">Walter White</p>
              <p className="text-sm font-thin">1 gün</p>
            </div>
          </div>

          <div>
            <button className="  rounded px-2  hover:bg-indigo-600  text-gray-200 font-thin text-sm">
              + FOLLOW
            </button>
          </div>
        </div>

        <div className="mt-8 font-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit sed
          maiores rem enim. Quibusdam laboriosam soluta ex sequi aliquam labore
          veniam sunt sapiente obcaecati laudantium voluptates ratione, pariatur
          iure in officia voluptatibus alias! Reiciendis a repudiandae ad
          ducimus possimus non recusandae illo nemo? Autem doloribus sequi
          voluptatibus nihil dolor at!
        </div>
      </div>
    </div>
  );
}

export default Home;
