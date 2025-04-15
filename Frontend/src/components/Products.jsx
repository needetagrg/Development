import Product from "./Product";

const Products = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      <Product img="/arencia.webp" />
      <Product img="/snailmucin.webp"/>
      <Product img="/puritoM.webp"/>
      <Product img="/rhodemilk.webp"/>
      <Product img="/medicubeVC.webp"/>
      <Product img="/equalberryT.webp"/>
      <Product img="/haruharu.jpg"/>
      <Product img="/centella.webp"/>
    </div>
  );
};

export default Products;