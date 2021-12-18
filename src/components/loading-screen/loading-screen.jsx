import React from 'react';
import Loader from 'react-loader-spinner';
import * as S from './loading-screen.styled';
import { LoaderParam } from '../../constants';

const {Type, Color, Size: {Width, Height}} = LoaderParam;

function LoadingScreen() {
  return (
    <S.Main forwardedAs="main">
      <S.PageTitle>Выполняется загрузка...</S.PageTitle>
      <Loader
        type={Type}
        color={Color}
        width={Width}
        height={Height}
      />
    </S.Main>
  );
}

export default LoadingScreen;
