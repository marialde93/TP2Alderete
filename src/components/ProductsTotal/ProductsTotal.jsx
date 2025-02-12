import { Layout } from "../Layout/Layout";
import "./ProductsTotal.css";

const ProductsTotal = ({ products }) => {
  return (
    <Layout>
      <h1>Todos nuestros productos</h1>
      <article>
        {products
          .slice(0, 12)
          .map(({ id, title, image, description, price }) => (
            <div className="Products-total" key={id}>
              <h3>{title}</h3>
              <img src={image} alt={"Imagen de" + title} />
              <p className="Products-description">
                {description.slice(0, 150)}...
              </p>
              <p className="Products-price">$ {price}</p>
              <button>Comprar</button>
            </div>
          ))}
      </article>
    </Layout>
  );
};

export { ProductsTotal };
