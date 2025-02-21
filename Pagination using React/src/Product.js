export default function Product({ product }) {
    return (
      <div className="product">
        <img src={product.thumbnail} alt={product.sku} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
    );
  }
  