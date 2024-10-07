import Product from '../Product/Product';
import styles from './ProductsTable.module.css';

const ProductsTable = (props) => {
  const { products, addNewProduct } = props;
  const showProduct = (product) => (
    <Product key={product.id} product={product} 
    addNewProduct={addNewProduct}/>
  );
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>{products.map(showProduct)}</tbody>
    </table>
  );
};

export default ProductsTable;
