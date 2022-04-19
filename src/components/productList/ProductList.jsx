import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import comingSoon from '../../img/comingSoon.jpg'

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">ossimus delectus repudiandae! Quod libero repellat quo porro ullam provident fugit corrupti.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={comingSoon} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;