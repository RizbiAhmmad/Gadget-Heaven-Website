import React, { useEffect, useState } from "react";
import Gadget from "./Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("./ProductData.json")
      .then((response) => response.json())
      .then((data) => setGadgets(data));
  }, []);

  // Extract unique categories from gadgets
  const uniqueCategories = Array.from(new Set(gadgets.map((gadget) => gadget.category)));

  // Filter gadgets by the selected category
  const filteredGadgets = selectedCategory
    ? gadgets.filter((gadget) => gadget.category === selectedCategory)
    : gadgets;

  return (
    <div className="mt-[265px]">
      <h2 className="text-4xl text-center my-4 pb-6">Explore Cutting-Edge Gadgets</h2>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-6">
        {/* Display unique categories */}
        
        <div className="col-span-1 rounded-xl border h-[385px]">

        <p
            className="m-3 rounded-lg p-3 text-red-500 border border-red-500 hover:text-white hover:bg-red-500 cursor-pointer"
            onClick={() => setSelectedCategory(null)}
          >
            Show All
          </p>
          {uniqueCategories.map((category) => (
            <p
              className="m-3 rounded-lg p-3 text-purple-500 border border-purple-500 hover:text-white hover:bg-purple-500 cursor-pointer"
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              Category: {category}
            </p>
          ))}
          {/* Reset filter button */}
          
        </div>

        {/* Display filtered gadgets */}
        <div className="col-span-4">
          <div className="grid grid-cols-3 gap-5">
            {filteredGadgets.map((gadget) => (
              <Gadget gadget={gadget} key={gadget.product_id}></Gadget>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
