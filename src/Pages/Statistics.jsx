/* eslint-disable react/prop-types */
// Statistics.jsx
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const [productsData, setProductsData] = useState([]);

  // Fetch the product data from products.json
  useEffect(() => {
    
      document.title = "Gadgets Haven | Statistics"; // Set dynamic title
    
    fetch("/ProductData.json")
      .then((response) => response.json())
      .then((data) => setProductsData(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <div className="bg-[#9538E2] relative pb-20">

        <div className="container mx-auto text-center pt-16">
            
          <h1 className="text-2xl font-bold text-white">Statistics</h1>
          <p className="w-2/4 text-white mx-auto mt-4">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
        </div>
        
      </div>

      <div className="container mx-auto mt-8">

          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={productsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product_title" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="price" fill="#8884d8" />
              <Bar dataKey="rating" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>


    </div>
  );
};

export default Statistics;
