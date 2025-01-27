import { Layout } from "../Layout/Layout";
import "./ProductsCard.css";

const ProductsCard = ({ products }) => {
  return (
    <Layout>
      <h1>Los más vendidos</h1>
      <article>
        {products
          .slice(0, 4)
          .map(({ id, title, image, description, price }) => (
            <div className="Products-card" key={id}>
              <h3>{title}</h3>
              <img src={image} alt={"Imagen de " + title} />
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

export { ProductsCard };
