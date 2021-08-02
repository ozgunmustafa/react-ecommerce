import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../../redux/actions/productActions';
import MainLayout from '../layout/MainLayout';
import { Accordion, Container, ProductDetailPlacehHolder } from '../UI';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;

  const dispatch = useDispatch();
  const { productId } = useParams();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== '') {
      fetchProductDetail();
    }
  }, [productId]);

  return (
    <MainLayout>
      <Container classNames="py-40">
        {isLoaded ? (
          <div className="product-details">
            <div className="product-details__img">
              <img src={image} alt="" />
            </div>
            <div className="product-details__body">
              <h1 className="product-details____body__title">{title}</h1>
              <Link
                className="product-details__body__category text-muted text-decoration-underline"
                to="/"
              >
                {category}
              </Link>
              <span className="product-details__body__price">
                {price + ' TL'}
              </span>
              <p className="product-details____body__description">{description}</p>
              <div className="mt-30">
                <Accordion
                  summary="Non velit quis nulla aute magna"
                  details="Ut anim voluptate aute adipisicing velit excepteur mollit in pariatur."
                  classNames="mb-20"
                  open
                />
                <Accordion
                  summary="Enim ullamco minim voluptate"
                  details="Labore sit ex et amet enim labore ex dolor ea amet consequat Lorem velit."
                  classNames="mb-20"
                />
              </div>

              <button className="rotate btn-cta">SEPETE EKLE</button>
            </div>
          </div>
        ) : (
          <ProductDetailPlacehHolder />
        )}
      </Container>
    </MainLayout>
  );
};

export default ProductDetail;
