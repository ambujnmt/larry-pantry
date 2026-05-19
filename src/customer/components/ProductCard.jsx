// src/customer/components/ProductCard.jsx

function ProductCard({ name, price, image }) {
  return (
    <div className="single-product-item">
      <div className="single-product-item-image">
        <a href="#" className="prodcut-images">
          <img className="primary-image" src={image} alt={name} />
        </a>
        <ul className="single-product-item-action">
          <li className="single-product-item-action-list">
            <a href="#" className="single-product-item-action-link">
              <i className="icon-rt-heart2"></i>
            </a>
          </li>
          <li className="single-product-item-action-list">
            <a href="#" className="single-product-item-action-link">
              <i className="icon-rt-eye2"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="single-product-item-content">
        <div className="single-product-item-rating">
          <i className="icon-rt-star-solid select-star"></i>
          <i className="icon-rt-star-solid select-star"></i>
          <i className="icon-rt-star-solid select-star"></i>
          <i className="icon-rt-star-solid select-star"></i>
          <i className="icon-rt-star-solid"></i>
        </div>
        <h6 className="single-product-item-title">
          <a href="#">{name}</a>
        </h6>
        <div className="single-product-item-price">{price}</div>
        <div className="cart-btn1">
          <a href="#"><i className="fa fa-shopping-cart"></i>&nbsp; Add to cart</a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;