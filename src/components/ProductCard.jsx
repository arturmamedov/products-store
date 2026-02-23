export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <h3>{product.title}</h3>
            <p className="price">€{product.price.toFixed(2)}</p>
        </div>
    )
}