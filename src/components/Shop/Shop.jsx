import { useState } from 'react';
import ProductsTable from './ProductsTable/ProductsTable';
import data from './data';
import Cart from './Cart/Cart';

const Shop = () => {
  const [products, setProducts] = useState(data);
  const [cartProducts, setCartProducts] = useState([]);

  const addNewProduct = (id) => {
    const [newProduct] = products.filter((product) => product.id === id);
    setCartProducts([...cartProducts, newProduct]);
  };
  return (
    <>
      <ProductsTable products={products} addNewProduct={addNewProduct}/>
      <Cart cartProducts={cartProducts} />
    </>
  );
};

export default Shop;
