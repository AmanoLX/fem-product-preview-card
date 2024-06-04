import { useState } from 'react';
import './index.css';
import productData from './data';
import Card from './Card';

function App() {
  const [products, setProducts] = useState(productData);

  return (
    <main>
      {products.map((product) => (
        <Card key={product.id} product={product} {...product} />
      ))}
    </main>
  );
}

export default App;
