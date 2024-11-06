import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredCartList, addToStoredWishList } from "../Utility/AddToDB";

const GadgetDetails = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);
  const data = useLoaderData();

  const gadget = data.find((gadget) => gadget.product_id === id);

  // console.log(gadget);

  const {
    product_id: currentProductId,
    price,
    product_title,
    product_image,
    category,
    rating,
    Specification,
    description,
  } = gadget;

  //   add cart
  const handleAddToCart = (id) => {
    addToStoredCartList(id);
  };

  //   add wishlist
  const handleAddWishlist = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div>
      <div className="bg-purple-500 mx-6 min-h-[20vh] flex flex-col items-center  ">
        <h1 className="text-2xl font-bold text-white text-center mb-2">
          Product Details
        </h1>
        <p className="text-white text-center mb-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="card card-side bg-base-100 shadow-xl justify-center ">
        <figure>
          <img className=" object-cover" src={product_image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{product_title}</h2>
          <p>Price ${price}</p>
          <p>
            Available:{" "}
            <button className="btn bg-green-300 rounded-full">In Stock</button>
          </p>
          <h2>{description}</h2>
          <h2 className="">Specification: {Specification}</h2>
          <h2>Rating: {rating}</h2>
          <div className="card-actions items-center justify-start">
            <button
              onClick={() => handleAddToCart(product_id)}
              className="flex items-center gap-2 bg-purple-500 text-white rounded-full px-6 py-2 font-semibold hover:bg-purple-600"
            >
              Add To Cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zm-9.83-4.25l1.58-6.59c.13-.54.65-.91 1.22-.91H19c.75 0 1.38.58 1.45 1.32l.66 4.66c.09.65-.41 1.25-1.07 1.33H8.52l-.35 1.48H19v2H8c-.84 0-1.57-.53-1.84-1.32L4.26 7H2V5h2.33l1.84 7.75z" />
              </svg>
            </button>

            <button
              onClick={() => handleAddWishlist(product_id)}
              className="text-purple-500 hover:text-purple-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
