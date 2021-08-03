import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../redux/actions/basketActions';

const BasketProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const removeProduct = (id) => {
    dispatch(removeFromBasket(id));
  };
  return (
    <div className="products-list__item">
      <img
        className="products-list__item__img"
        src={product.image}
        alt="Voluptate sit commodo et aute eiusmod pariatur laboris ullamco ullamco qui id mollit nostrud."
      />
      <div className="products-list__item__body">
        <div className="meta-data">
          <span className="name">{product.title}</span>
          <span className="count">
            Count: <strong>1</strong>
          </span>
          <span className="count">
            Price: <strong>{product.price} TL</strong>
          </span>
        </div>
        <span>
          <AiOutlineCloseCircle
            className="remove-icon"
            onClick={(e) => removeProduct(product.id)}
          />
        </span>
      </div>
    </div>
  );
};

export default BasketProductCard;
