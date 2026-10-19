import { useState, useEffect } from "react";
import { GetAllProducts } from "../services/ShoppingCartservice.js";
export default function ProductList() {
  const [Products, setProducts] = useState([]);
  const LoadProducts = async () => {
    try {
      const response = await GetAllProducts();
      setProducts(response.data);
    } catch (error) {
      console.log(error);
      console.log("Error While Fetch Products");
    }
  }
  useEffect(() => {
    LoadProducts();
  }, []);
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">All Products</h2>

      <div className="row">
        {Products.map((Product) => (
          <div className="col-md-4 mb-4" key={Product._id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{Product.name}</h5>
                <p className="card-text">
                  {Product.description}
                </p>
                <p>Category: {Product.category}</p>
                <h5>Price: ₹{Product.price}</h5>
                <p>Stock: {Product.stock}</p>
                <button className="btn btn-primary">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}