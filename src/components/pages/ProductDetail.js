import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { productIndex } from '../../redux/actions/productActions';
import MainLayout from '../layout/MainLayout';
import { Accordion, Container, ProductDetailPlacehHolder } from '../UI';
import { Link } from 'react-router-dom';
import { addToBasket } from '../../redux/actions/basketActions';

const ProductDetail = () => {
  //const [isLoaded, setIsLoaded] = useState(false);

  const product = useSelector((state) => state.product);
  const isLoaded = useSelector((state) => state.product.isLoaded);
  const { image, title, price, category, description } = product;

  const dispatch = useDispatch();
  const { productId } = useParams();

  const addBasket = (product) => {
    dispatch(addToBasket(product));
  };

  useEffect(() => {
    if (productId && productId !== '') {
      dispatch(productIndex(productId));
    }
  }, [productId, dispatch]);

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
              <p className="product-details____body__description">
                {description}
              </p>
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

              <button
                className="rotate btn-cta"
                onClick={(e) => addBasket(product)}
              >
                SEPETE EKLE
              </button>
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
