import React from 'react';
import PropTypes from 'prop-types';
import * as S from './page-heading.styled';

function PageHeading({ children, ...props }) {
  return <S.PageHeading {...props}>{children}</S.PageHeading>;
}

PageHeading.propTypes = {
  children: PropTypes.node,
};

export default PageHeading;
