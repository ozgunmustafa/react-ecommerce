import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToBasket } from '../redux/actions/basketActions';

const ProductCard = ({ product, onClick }) => {
  const dispatch = useDispatch();

  const addBasket = (product) => {
    dispatch(addToBasket(product));
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card__img__wrapper">
        <img src={product.image} alt="" />
      </div>
      <div className="product-card__body">
        <span className="title mb-5">{product.title}</span>
        <a href="/" className=" text-muted text-decoration-underline">
          {product.category}
        </a>
        <span className="description">{product.description}</span>
        <div className="price-details">
          <div className="discount-rate">
            %25 <span className="hide-less-md">İndirim</span>
          </div>
          <div className="price">
            <span className="old-price">
              {(product.price + product.price * 0.25).toFixed(2) + ' ₺'}
            </span>
            <span className="new-price">{product.price.toFixed(2)} ₺</span>
          </div>
        </div>
        <button
          className="hvr-icon-rotate btn-cta btn-cta-secondary"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addBasket(product);
          }}
        >
          SEPETE EKLE
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
