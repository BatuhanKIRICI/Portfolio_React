import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Batuhan KIRICI</h1>
        <p className="pl-desc">
          My proficiency in programming languages such as HTML, CSS, JavaScript,
          and TypeScript, as well as CSS and frameworks such as React and
          Next.js, allow me to build dynamic and scalable applications. In
          addition, I have experience in version control with GitHub
          methodologie.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
