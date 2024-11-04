import React from 'react';
import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
    return (
      <div className="bg-purple-500 text-white mx-6 min-h-[75vh] flex flex-col items-center justify-center p-4 relative">
      <div className="text-center max-w-3xl mb-12"> {/* Adjusted margin-bottom */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="bg-white text-purple-600 px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-200">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="absolute p-2 shadow-lg border-2 border-white rounded-lg bottom-0 transform translate-y-1/2">
        <img
          src={bannerImg} 
          alt="VR Headset"
          className="w-full max-w-lg rounded-lg shadow-lg"
        />
      </div>
    </div>
    );
};

export default Banner;