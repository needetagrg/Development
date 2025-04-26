import PropTypes from "prop-types";

const Products = ({ filters, sort, query }) => {

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
           <Products query={query} filters={filters} sort={sort}/>
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
