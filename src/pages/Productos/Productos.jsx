import { useState, useEffect } from "react";
import { ProductsTotal } from "../../components/ProductsTotal/ProductsTotal";

const Productos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return <ProductsTotal products={products} />;
};

export { Productos };
