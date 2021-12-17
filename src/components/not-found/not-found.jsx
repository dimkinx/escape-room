import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './not-found.styled';
import { AppRoute } from '../../constants';

function NotFound() {
  const location = useLocation();

  return (
    <S.Main forwardedAs="main">
      <S.PageTitle data-text="404">404</S.PageTitle>
      <S.PageSubtext>Контент по адресу <b>{location.pathname}</b> - не найден!</S.PageSubtext>
      <S.PageSubtext>Вы можете вернуться на <S.Link to={AppRoute.Home}>главную страницу</S.Link>.</S.PageSubtext>
    </S.Main>
  );
}

export default NotFound;
