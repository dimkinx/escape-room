import React from 'react';
import PropTypes from 'prop-types';
import * as S from './page-subtext.styled';

function PageSubtext({ children, ...props }) {
  return <S.PageSubtext {...props}>{children}</S.PageSubtext>;
}

PageSubtext.propTypes = {
  children: PropTypes.node,
};

export default PageSubtext;
