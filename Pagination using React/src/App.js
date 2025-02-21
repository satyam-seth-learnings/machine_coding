import "./styles.css";
import { useState, useEffect } from "react";
import Product from "./Product";
import Pagination from "./Pagination";

export default function App() {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const limit = 10;
  const pageCount = Math.ceil(products.length / limit);
  const baseIndex = page * limit;
  const lastIndex = Math.min(baseIndex + limit, products.length);

  async function fetchProducts(params) {
    const response = await fetch("https://dummyjson.com/products/?limit=500");
    if (response.ok) {
      const data = await response.json();
      setProducts(data.products);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function goToPrevPage() {
    setPage((prev) => prev - 1);
  }

  function goToNextPage() {
    setPage((prev) => prev + 1);
  }

  function goToPage(pageIndex) {
    setPage(pageIndex);
  }

  return (
    <div className="App">
      <h1>Products Pagination</h1>
      <Pagination
        page={page}
        pageCount={pageCount}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        goToPage={goToPage}
      />
      {products && (
        <div className="products">
          {products.slice(baseIndex, lastIndex).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
