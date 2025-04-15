import Products from "../components/Products";

const ProductList = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between m-4">
        {/* LEFT */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-lg font-semibold mr-4">Filter Products</span>
          <select name="product" className="p-2 mb-4 sm:mb-0 sm:mr-4">
            <option value="">All Products</option>
            <option value="Cleanser">Cleanser</option>
            <option value="Facemask">Facemask</option>
            <option value="Toner">Toner</option>
            <option value="Essence">Essence</option>
            <option value="Serum">Serum</option>
            <option value="Moisturiser">Moisturiser</option>
            <option value="Sunscreen">Sunscreen</option>
          </select>

          <select name="brand" className="p-2 mb-4 sm:mb-0 sm:mr-4">
            <option value="">All Skin Types</option>
            <option value="Dry">Dry</option>
            <option value="Oily">Oily</option>
            <option value="Combination">Combination</option>
            <option value="Sensitive">Sensitive</option>
            <option value="Normal">Normal</option>
            <option value="Acne-Prone">Acne-Prone</option>
            <option value="Mature">Mature</option>
          </select>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-lg font-semibold mr-4">Sort Products</span>
          <select name="Price" className="p-2 mb-4 sm:mb-0 sm:mr-4">
            <option value="newest">Newest Arrivals</option>
            <option value="price-asc">Price (asc)</option>
            <option value="price-desc">Price (desc)</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="best-selling">Best Selling</option>
          </select>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default ProductList;
