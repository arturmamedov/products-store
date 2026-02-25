export default function ProductCard({ product }) {
    return (
        <div className="card">
            <img src="https://placehold.co/300x200" className="card-img-top img-full" alt={product.title} />
            <div className="card-body">
                <p className="card-text">{product.title}</p>
                <p className="price text-end">€{product.price.toFixed(2)}</p>
            </div>
        </div>
    )
}