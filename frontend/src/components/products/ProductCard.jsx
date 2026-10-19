export default function ProductCard({ product, onAdd }) {
  return (
    <article className="product">
      <div className="product-image" style={product.imageUrl ? { backgroundImage: `linear-gradient(180deg, transparent 45%, rgba(45,30,25,.3)), url("${product.imageUrl}")` } : undefined} role="img" aria-label={product.name}><span>{product.imageUrl ? "" : "ArtKolač"}</span></div>
      <div className="product-body">
        <small>{product.category}</small>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        {product.preparationPhotos?.length > 0 && <div className="product-process-photos" aria-label="Fotografije pripreme">{product.preparationPhotos.slice(0, 3).map((photo, index) => <figure key={`${photo.url}-${index}`}><img src={photo.url} alt={photo.caption || `Korak pripreme ${index + 1}`} loading="lazy" />{photo.caption && <figcaption>{photo.caption}</figcaption>}</figure>)}</div>}
        <div className="product-bottom">
          <strong>{product.price.toFixed(2).replace('.', ',')} €</strong>
          <button onClick={() => onAdd(product)}>Dodaj</button>
        </div>
      </div>
    </article>
  )
}
