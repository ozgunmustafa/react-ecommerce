import React from 'react';
import Footer from './partials/Footer';
import Header from './partials/Header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
