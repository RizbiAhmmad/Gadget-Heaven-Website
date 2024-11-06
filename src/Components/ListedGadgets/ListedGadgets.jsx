import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredCartList, getStoredWishList } from "../../Utility/AddToDB";
import Gadget from "../Gadgets/Gadget";
import AddToCartItems from "./AddToCartItems";

const ListedGadgets = () => {
  const [readList, setReadList] = useState([]);

  const [wishList, setWishList] = useState([]);

  const allGadgets = useLoaderData();

  useEffect(() => {

      document.title = "Gadgets Haven | Dashboard";

    const storedCartList = getStoredCartList();
    const storedCartListInt = storedCartList.map((id) => parseInt(id));
    console.log(storedCartListInt, allGadgets);

    const readCartList = allGadgets.filter((gadget) =>
      storedCartListInt.includes(gadget.product_id)
    );

    setReadList(readCartList);

    // wishlist
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const readWishList = allGadgets.filter((gadget) =>
      storedWishListInt.includes(gadget.product_id)
    );
    setWishList(readWishList);
  }, []);

  return (
    <div>
        <div className="bg-purple-500 text-white p-4 text-center">
      
        <h2 className="text-xl md:text-5xl font-extrabold mt-5 mb-4">
          Dashboard
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        
    </div>

    

      <div className="mt-6">
      <Tabs>
        <div className="text-center">

          {/* <button className="btn btn-primary"> <NavLink to="cart"> Cart </NavLink></button>
          <button className="btn btn-primary"> <NavLink to="wishlist"> Wish List </NavLink></button> */}
        <TabList>
          <Tab><NavLink to="cart"> Add To Cart </NavLink></Tab>
          <Tab><NavLink to="wishlist"> wish List </NavLink></Tab>
          
          
        </TabList>
        </div>

        <TabPanel>
          <h2 >My Cart List: {readList.length}</h2>

          

          <div className="w-9/12 mx-auto space-y-4">
          {readList.map((gadget) => (
            <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
          ))}
          </div>
        </TabPanel>
        <TabPanel>
          <button>My Wish List: {wishList.length}</button>
          {wishList.map((gadget) => (
            <Gadget key={gadget.product_id} gadget={gadget} />
          ))}
        </TabPanel>

      </Tabs>
      </div>

      <Outlet></Outlet>


    </div>
  );
};

export default ListedGadgets;
