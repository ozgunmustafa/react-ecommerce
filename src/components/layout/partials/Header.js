import React, { useState } from 'react';
import { BiSearchAlt, BiUser, BiCartAlt, BiHeart } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
  const basketProducts = useSelector((state) => state.basket.basketProducts);
  console.log('asdasd', basketProducts);

  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <header className="main-header">
      <div className="container header-container">
        <div className="header-container__left">
          <Link to="/">
            <img src={logo} alt="asidöasdasd" className="logo" />
          </Link>
        </div>
        <div className="header-container__center">
          <div className="search-bar">
            <input
              type="search"
              className="search-bar__input"
              value={searchText}
              onChange={handleChange}
              placeholder="Aramaya başla"
            />
            <button
              className={`search-bar__button ${searchText ? 'hvr-push' : ''}`}
            >
              <BiSearchAlt />
            </button>
          </div>
        </div>
        <div className="header-container__right">
          <ul className="main-menu">
            <li className="main-menu__item">
              <a href="/">
                <BiUser />
                <span className="hide-md">Hesabım</span>
              </a>
            </li>
            <li className="main-menu__item">
              <a href="/">
                <BiHeart />
                <span className="hide-md">Siparişlerim</span>
              </a>
            </li>
            <li className="main-menu__item">
              <Link to="/sepet">
                <BiCartAlt />
                <span className="hide-md">Sepetim</span>

                <span
                  className={`ntf-count ${
                    basketProducts.length > 0 ? 'show-element' : 'hide-element'
                  }`}
                >
                  {basketProducts.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
