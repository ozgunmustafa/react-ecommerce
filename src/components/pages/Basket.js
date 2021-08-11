import React from 'react';
import { useSelector } from 'react-redux';
import BasketProductCard from '../BasketProductCard';
import MainLayout from '../layout/MainLayout';
import { Container } from '../UI';
import { cartGif } from '../../images/index';
import { Link } from 'react-router-dom';

const Basket = () => {
  const basketProducts = useSelector((state) => state.basket.basketProducts);
  const discountRate = 0.18;
  var shippingPrice = 9.99;

  const totalPrice = basketProducts.reduce(
    (total, item) => (total += item.price),
    0
  );

  const calculateTotalPrice = () => {
    if (totalPrice > 100) shippingPrice = 0;
    else shippingPrice = 9.99;

    return (totalPrice - totalPrice * discountRate + shippingPrice).toFixed(2);
  };

  return (
    <MainLayout>
      <Container>
        <div className="basket-grid py-40">
          <div className="basket-grid__left">
            {basketProducts.length > 0 ? (
              <div className="products-list">
                <h1 className="page-title mb-20">Sepetim</h1>

                {basketProducts.map((product, index) => (
                  <BasketProductCard product={product} key={index} />
                ))}
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  height: '30vh',
                  fontSize: '14px',
                  color: '#73a6d3',
                }}
              >
                <img
                  src={cartGif}
                  width="50px"
                  height="50"
                  alt="cart has no item"
                  className="mb-30"
                />
                Sepetinizde herhangi bir ürün bulunmamaktadır.
                <Link
                  to="/"
                  style={{ fontSize: '16px', fontWeight: 'bold' }}
                  className="mt-30"
                >
                  Alışverişe Devam Et
                </Link>
              </div>
            )}
          </div>
          {basketProducts.length > 0 ? (
            <div className="basket-grid__right">
              <div className="pricing-card">
                <span className="title">Order Summary</span>
                <div className="price">
                  <span>Price</span>
                  <strong>{totalPrice} TL</strong>
                </div>
                <div className="price">
                  <span>Ship</span>
                  <strong>9.99 TL</strong>
                </div>

                {totalPrice > 100 ? (
                  <div className="price">
                    <span>Discount Ship</span>
                    <strong className="discount">9.99 TL</strong>
                  </div>
                ) : (
                  ''
                )}

                <div className="price">
                  <span>Special Discount</span>
                  <strong className="discount">
                    {(totalPrice * discountRate).toFixed(2)} TL
                  </strong>
                </div>
                <hr />
                <div className="price">
                  <span>Total Price</span>
                  <strong>{calculateTotalPrice()} TL</strong>
                </div>
              </div>
              <button className="w-100 hvr-icon-rotate btn-cta btn-cta-secondary">
                ÖDEME YAP
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </Container>
    </MainLayout>
  );
};

export default Basket;
