import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Import any necessary functions or components for data fetching

function Home() {
  const [products, setProducts] = useState([]);

  // Use useEffect to fetch products data from the Fake Store API
  useEffect(() => {
    // Replace this with your actual API fetch logic
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Welcome to Our Online Store</h1>
      <p>Discover a wide range of products for all your needs.</p>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
