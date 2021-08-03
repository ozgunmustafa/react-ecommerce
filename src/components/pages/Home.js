import React, { useEffect, useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { getProducts } from '../../redux/actions/productActions';
import { MdTouchApp } from 'react-icons/md';
import { GiBoxUnpacking, GiReturnArrow } from 'react-icons/gi';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import {
  categoryImage1,
  categoryImage15,
  categoryImage2,
  categoryImage3,
  categoryImage4,
  categoryImage5,
  categoryImage6,
  categoryImage7,
} from '../../images/index';

import { Container, ProductPlaceHolder, Section, ShopAdviceCard } from '../UI';
import ProductCard from '../ProductCard';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  //const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.allProducts.products);
  const isLoaded = useSelector((state) => state.allProducts.isLoaded);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <MainLayout>
      <Section classNames="features pb-40 pt-40">
        <Container>
          <div className="highlights">
            <div className="highlight highlight__1">
              <img
                className="highlight__img"
                src={categoryImage1}
                alt="asdasd"
              />
            </div>
            <div className="highlight highlight__2">
              <img
                className="highlight__img"
                src={categoryImage2}
                alt="asdasd"
              />
            </div>
            <div className="highlight highlight__3">
              <img
                className="highlight__img"
                src={categoryImage3}
                alt="asdasd"
              />
            </div>
            <div className="highlight highlight__4">
              <img
                className="highlight__img"
                src={categoryImage4}
                alt="asdasd"
              />
            </div>
            <div className="highlight highlight__5">
              <img
                className="highlight__img"
                src={categoryImage5}
                alt="asdasd"
              />
            </div>
            <div className="highlight highlight__5">
              <img
                className="highlight__img"
                src={categoryImage6}
                alt="asdasd"
              />
            </div>
            <div className="highlight highlight__5">
              <img
                className="highlight__img"
                src={categoryImage7}
                alt="asdasd"
              />
            </div>

            <div className="highlight highlight__repeat">
              <img
                className="highlight__img"
                src={categoryImage15}
                alt="asdasd"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section classNames="py-40 bg-light">
        <Container>
          <div className="row">
            {isLoaded
              ? products.map((product) => (
                  <div className="col-md-4 mb-30" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))
              : [...Array(6)].map((x, i) => (
                  <div className="col-md-4 mb-30" key={i}>
                    <ProductPlaceHolder />
                  </div>
                ))}
          </div>
        </Container>
      </Section>
      <Section classNames="py-40">
        <Container>
          <div className="row shop-advices">
            <div className="col-6 col-md-3 mb-40">
              <ShopAdviceCard
                title="Hızlı Teslimat"
                icon={<GiBoxUnpacking />}
                description=" Saat 14:00'e kadar verdiğiniz siparişler aynı gün kapınızda."
              />
            </div>
            <div className="col-6 col-md-3 mb-40">
              <ShopAdviceCard
                title="Güvenli Alışveriş"
                icon={<MdTouchApp />}
                description="Ödeme ve adres bilgilerinizi kaydedin, güvenli alışverişin
                  keyfini çıkarın."
              />
            </div>
            <div className="col-6 col-md-3 mb-40">
              <ShopAdviceCard
                title="Hızlı İade İmkanı"
                icon={<GiReturnArrow />}
                description="Aldığınız ürünler için kolay iade imkanı"
              />
            </div>
            <div className="col-6 col-md-3 mb-40">
              <ShopAdviceCard
                title="Mobil Uygulama"
                icon={<AiOutlineAppstoreAdd />}
                description="Mobil uygulama ile bildirimleri aç, avantajları yakala,
                  fırsatları kaçırma."
              />
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
};

export default Home;
