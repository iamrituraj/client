import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
`;

const Products = ({ category, filters, sort }) => {
  console.log(category, filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const location = useLocation();

  const path_id = location.pathname.split("/")[1];

  // get products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          category
            ? `/products?category=${category}`
            : `/products`
        );
        setProducts(res.data);
        console.log(res.data);
        setfilteredProducts(res.data);
        console.log(filteredProducts);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  // filter products
  useEffect(() => {

    if (products)
    {
        console.log(products);

      let data = products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      );

      setfilteredProducts(data);
}    
    
  }, [ filters]);

  // sort products
  useEffect(() => {
    if (sort === "newest") {
      setfilteredProducts((product) =>
        [...product].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      );
    } else if (sort === "asc") {
      setfilteredProducts((product) =>
        [...product].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilteredProducts((product) =>
        [...product].sort((a, b) => b.price - a.price)
      );
    }
    console.log(filteredProducts);
  }, [sort]);

  return (
    <Container>
      {
        path_id === "products"
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products.map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
