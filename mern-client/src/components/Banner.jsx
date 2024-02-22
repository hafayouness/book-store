import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row  justify-between items-center gap-12 py-40">
        {/* left Side */}

        <div className="md:w-1/2  space-y-8  h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Your Books
            <span className="text-blue-500"> For The Best Prices</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            quibusdam mollitia sunt unde. Explicabo quia labore, sit suscipit
            nemo odit aliquam. Sequi, ratione quas cum amet vel sunt recusandae
            porro!
          </p>
          <div>
            <input
              type="search"
              name="search"
              placeholder="Search a book "
              id="search"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white  font-medium hover:bg-black  transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
        {/* right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
