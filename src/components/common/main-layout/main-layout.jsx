import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from 'components/common/common';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
