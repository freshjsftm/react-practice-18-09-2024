const Cart = (props) => {
  const { cartProducts } = props;
  return (
    <section>
      <h2>Cart</h2>
      {
        cartProducts.length===0 ? 
        <p>empty cart</p>:
        <ol>
          {cartProducts.map((product)=><li key={product.id}>{product.title}</li>)}
        </ol>
      }
    </section>
  );
};

export default Cart;
