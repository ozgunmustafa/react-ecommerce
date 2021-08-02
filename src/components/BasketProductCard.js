import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const BasketProductCard = () => {
  return (
    <div className="products-list__item">
      <img
        className="products-list__item__img"
        src="https://source.unsplash.com/random"
        alt="Voluptate sit commodo et aute eiusmod pariatur laboris ullamco ullamco qui id mollit nostrud."
      />
      <div className="products-list__item__body">
        <div className="meta-data">
          <span className="name">
            Ex incididunt aute magna adipisicing veniam laborum enim.
          </span>
          <span className="count">
            Count: <strong>1</strong>
          </span>
          <span className="count">
            Price: <strong>19.99 TL</strong>
          </span>
        </div>
        <span>
          <AiOutlineCloseCircle className="remove-icon" />
        </span>
      </div>
    </div>
  );
};

export default BasketProductCard;
