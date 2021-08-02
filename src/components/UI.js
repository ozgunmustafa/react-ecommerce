function Container({ children, classNames }) {
  return <div className={`container ${classNames}`}>{children}</div>;
}

function Section({ children, classNames }) {
  return <section className={classNames}>{children}</section>;
}

function ShopAdviceCard({ title, description, icon }) {
  return (
    <div className="shop-advice">
      <span className="shop-advice__title">{title}</span>
      <span className="shop-advice__icon">{icon}</span>
      <span className="shop-advice__description">{description}</span>
    </div>
  );
}

function Accordion({ summary, details, classNames, ...rest }) {
  return (
    <details className={classNames} {...rest}>
      <summary>{summary}</summary>
      <div className="content">{details}</div>
    </details>
  );
}

//Loader Placeholder
function ProductPlaceHolder() {
  return (
    <div className="product-dummy">
      <div className="product-dummy__img mb-20"></div>
      <div className="product-dummy__body">
        <span className="title dummy mb-15"></span>
        <span href="/" className="dummy category"></span>
        <span className="dummy description"></span>
        <span className="dummy description w-80"></span>
        <span className="dummy description"></span>
        <div className="price-details">
          <div className="dummy discount-rate"></div>
          <div className="dummy price">
            <span className="dummy old-price"></span>
            <span className="dummy new-price"></span>
          </div>
        </div>
        <span className="dummy btn-dummy"></span>
      </div>
    </div>
  );
}
function ProductDetailPlacehHolder() {
  return (
    <div className="product-details__dummy">
      <div className="product-details__dummy__img dummy shimmer"></div>
      <div className="product-details__dummy__body shimmer">
        <div className="title dummy"></div>
        <div className="category dummy"></div>
        <div className="price dummy"></div>
        <div className="accordion dummy"></div>
        <div className="accordion dummy"></div>
        <div className="accordion dummy"></div>
        <div className="accordion dummy"></div>
        <div className="accordion dummy"></div>
        <div className="button dummy"></div>
      </div>
    </div>
  );
}

export {
  Container,
  Section,
  Accordion,
  ShopAdviceCard,
  ProductPlaceHolder,
  ProductDetailPlacehHolder,
};
