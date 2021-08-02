import React from 'react';
import BasketProductCard from '../BasketProductCard';
import MainLayout from '../layout/MainLayout';
import { Container } from '../UI';

const Basket = () => {
  return (
    <MainLayout>
      <Container>
        <div className="basket-grid py-40">
          <div className="basket-grid__left">
            <h1 className="page-title mb-20">Sepetim</h1>
            <div className="products-list">
              <BasketProductCard />
              <BasketProductCard />
              <BasketProductCard />
            </div>
          </div>
          <div className="basket-grid__right">
            <div className="pricing-card">
              <span className="title">Order Summary</span>
              <div className="price">
                <span>Price</span>
                <strong>99.99 TL</strong>
              </div>
              <div className="price">
                <span>Ship</span>
                <strong>9.99 TL</strong>
              </div>
              <div className="price">
                <span>Discount Ship</span>
                <strong className="discount">9.99 TL</strong>
              </div>
              <div className="price">
                <span>Special Discount</span>
                <strong className="discount">19.00 TL</strong>
              </div>
              <hr />
              <div className="price">
                <span>Total Price</span>
                <strong>80.99 TL</strong>
              </div>
            </div>
            <button className="w-100 hvr-icon-rotate btn-cta btn-cta-secondary">
              ÖDEME YAP
            </button>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Basket;
