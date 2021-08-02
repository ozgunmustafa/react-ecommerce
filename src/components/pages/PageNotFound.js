import React from 'react';
import MainLayout from '../layout/MainLayout';

const PageNotFound = () => {
  return (
    <MainLayout>
      <div className="not-found">
        <h1>404 Not Found</h1>
        <a href="/">Go Home</a>
      </div>
    </MainLayout>
  );
};

export default PageNotFound;
