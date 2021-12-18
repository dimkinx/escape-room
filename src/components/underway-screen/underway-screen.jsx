import React from 'react';
import MainLayout from '../common/main-layout/main-layout';
import * as S from './underway-screen.styled';

function UnderwayScreen() {
  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <S.PageTitle>Страница в процессе разработки...</S.PageTitle>
      </S.Main>
    </MainLayout>
  );
}

export default UnderwayScreen;
