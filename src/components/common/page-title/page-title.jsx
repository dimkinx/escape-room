import React from 'react';
import PropTypes from 'prop-types';
import * as S from './page-title.styled';

function PageTitle({ children, ...props }) {
  return <S.PageTitle {...props}>{children}</S.PageTitle>;
}

PageTitle.propTypes = {
  children: PropTypes.node,
};

export default PageTitle;
