import { useEffect, useState } from "react";
import Product from "./Product";
import PropTypes from "prop-types";
import { UserRequest } from "../requestMethods";
import { Link } from "react-router-dom";

const Products = ({ filters, sort, query }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let res;
        if (query) {
          res = await UserRequest.get(`/products?search=${query}`);
        } else {
          res = await UserRequest.get("/products");
        }
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [query]);

  useEffect(() => {
    let tempProducts = [...products];

    if (filters) {
      tempProducts = tempProducts.filter((item) =>
        Object.entries(filters).every(([key, value]) => {
          if (!value) return true;

          if (key === "product") {
            return item.categories.includes(value);
          } else if (key === "brand") {
            return item.brand.toLowerCase() === value.toLowerCase();
          } else if (key === "skinConcern") {
            return item.concern.includes(value);
          } else if (key === "skintype") {
            return item.skintype.includes(value); 
          } else {
            return true; 
          }
        })
      );
    }

    // Apply sorting (remains the same)
    if (sort === "newest") {
      tempProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sort === "price-asc") {
      tempProducts.sort((a, b) => a.originalPrice - b.originalPrice);
    } else if (sort === "price-desc") {
      tempProducts.sort((a, b) => b.originalPrice - a.originalPrice);
    } else if (sort === "name-asc") {
      tempProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "name-desc") {
      tempProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort === "best-selling") {
      // Implement your logic for best-selling
    }

    setFilteredProducts(tempProducts);
  }, [products, filters, sort]);

  return (
    <div className="flex flex-wrap mx-[40px]">
      {filteredProducts.map((product) => (
        <Link to={`/product/${product._id}`} key={product._id}> {/* Added key prop */}
          <Product product={product} />
        </Link>
      ))}
    </div>
  );
};

Products.propTypes = {
  cat: PropTypes.string,
  filters: PropTypes.object,
  sort: PropTypes.string,
  query: PropTypes.string,
};

export default Products;