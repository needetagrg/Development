import { useState } from "react";
import { useLocation } from "react-router-dom";
import Products from "../components/Products";

const ProductList = () => {
  const location = useLocation();
  const query = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  }
    

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between m-4">
        {/* LEFT */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-lg font-semibold mr-4">Filter Products</span>
          <select name="product" className="w-full p-2 m-4 text-gray-600 bg-white border border-gray-300 rounded" onChange={handleFilters}>
            <option value="">All Products</option>
            <option value="Cleanser">Cleanser</option>
            <option value="Facemask">Facemask</option>
            <option value="Toner">Toner</option>
            <option value="Essence">Essence</option>
            <option value="Serum">Serum</option>
            <option value="Moisturiser">Moisturiser</option>
            <option value="Sunscreen">Sunscreen</option>
          </select>

          <select name="brand" className="w-full p-2 m-4 text-gray-600 bg-white border border-gray-300 rounded" onChange={handleFilters}>
            <option value="">All Skin Types</option>
            <option value="Dry">Dry</option>
            <option value="Oily">Oily</option>
            <option value="Combination">Combination</option>
            <option value="Sensitive">Sensitive</option>
            <option value="Normal">Normal</option>
            <option value="Acne-Prone">Acne-Prone</option>
            <option value="Mature">Mature</option>
          </select>

          <select
            name="skinConcern" className="w-full p-2 m-4 text-gray-600 bg-white border border-gray-300 rounded" onChange={handleFilters}>
            <option value="">
               All Skin Concern
            </option>
            <option value="Acne">Acne</option>
            <option value="Hyperpigmentation">Hyperpigmentation</option>
            <option value="Aging">Aging</option>
            <option value="Pore Size">Pore Size</option>
            <option value="Uneven Texture">Uneven Texture</option>
            <option value="Dark Circles">Dark Circles</option>
          </select>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-lg font-semibold mr-4">Sort Products</span>
          <select name="price" className="w-full p-2 text-gray-600 bg-white border border-gray-300 rounded" onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest Arrivals</option>
            <option value="price-asc">Price (asc)</option>
            <option value="price-desc">Price (desc)</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="best-selling">Best Selling</option>
          </select>
        </div>
      </div>
      <Products query={query} filters={filters} sort={sort}/>
    </div>
  );
};

export default ProductList;
