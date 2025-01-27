import { useState, useEffect } from "react";
import { ProductsCard } from "../../components/ProductsCard/ProductsCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return <ProductsCard products={products} />;
};

export { Home };
