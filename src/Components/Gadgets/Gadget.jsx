import React from "react";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_image, product_title, price, product_id } = gadget;

  return (
    
      <div className="card  bg-base-100 h-full shadow-xl">
        <figure className="w-full h-{400px} object-cover rounded-lg p-6">
          <img 
            src={product_image}
            
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions justify-start">
          
          <Link to={`/gadgets/${product_id}`}><button className="bg-purple-500 text-white rounded-full px-4 py-2 font-semibold hover:bg-purple-600">
                  View Details
                </button></Link>

          </div>
        </div>
      </div>
    
  );
};

export default Gadget;
