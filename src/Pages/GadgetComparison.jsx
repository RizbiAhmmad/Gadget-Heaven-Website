// src/pages/GadgetComparison.jsx
import { useState, useEffect } from "react";

const GadgetComparison = () => {
  const [products, setProducts] = useState([]);
  const [selectedGadgets, setSelectedGadgets] = useState([]);
  const [comparisonData, setComparisonData] = useState([]);

  // Fetch data from products.json
  useEffect(() => {

      document.title = "Gadgets Haven | GadgetComparison"; // Set dynamic title

    fetch("/ProductData.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Handle selection of gadgets
  const handleSelect = (product) => {
    if (selectedGadgets.length < 2) {
      setSelectedGadgets([...selectedGadgets, product]);
    } else {
      alert("You can only compare two gadgets at a time.");
    }
  };

  // Generate comparison data
  useEffect(() => {
    if (selectedGadgets.length === 2) {
      setComparisonData([
        { label: "Product Title", values: selectedGadgets.map((g) => g.product_title) }, // Changed to product_title
        { label: "Price", values: selectedGadgets.map((g) => g.price) },
        { label: "Rating", values: selectedGadgets.map((g) => g.rating) },
      ]);
    } else {
      setComparisonData([]);
    }
  }, [selectedGadgets]);

  // Handle reset
  const handleReset = () => {
    setSelectedGadgets([]);
    setComparisonData([]);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      {comparisonData.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Comparison</h2>

          <table className="w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Feature</th>
                {selectedGadgets.map((gadget, idx) => (
                  <th key={idx} className="border border-gray-300 p-2">
                    {gadget.product_title}  {/* Changed to product_title */}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {comparisonData.map((data, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-300 p-2 font-semibold">
                    {data.label}
                  </td>
                  {data.values.map((value, i) => (
                    <td key={i} className="border border-gray-300 p-2">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <button
            className="mt-4 bg-red-500 text-white px-4 py-1 rounded"
            onClick={handleReset}
          >
            Reset Comparison
          </button>
        </div>
      )}

      <h1 className="text-2xl font-bold my-5">Gadget Comparison</h1>
      <p>
        Select up to two gadgets to compare their features, prices, and ratings.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow-md flex justify-between">

            <div>
            <h2 className="font-semibold text-lg">{product.product_title}</h2> {/* Changed to product_title */}
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating} stars</p>

            <button
              className="mt-2 bg-purple-600 text-white px-4 py-1 rounded"
              onClick={() => handleSelect(product)}
              disabled={selectedGadgets.includes(product)}
            >
              {selectedGadgets.includes(product) ? "Selected" : "Select"}
            </button>
            </div>

            <div>
                <img className="h-28 w-40 object-cover rounded-2xl" src={product.product_image} alt="" />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default GadgetComparison;
