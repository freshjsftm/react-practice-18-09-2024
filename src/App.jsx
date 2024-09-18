import Product from './components/Product/Product';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  return (
    <>
      <UserProfile  name="Olena" email="olena@gmail.com" />
      {/* <UserProfile name="Tom" age="23" email="tom@gmail.com" />
      <UserProfile name="Alex" age="35" email="alex@gmail.com" /> */}
      {/* <Image /> */}
      <table>
        <tr>
          <th>title</th>
          <th>price</th>
          <th>quantity</th>
        </tr>
        <Product title="Milk" price={32} quantity={1}/>
      </table>
    </>
  );
}

export default App;
