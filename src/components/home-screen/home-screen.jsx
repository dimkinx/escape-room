import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestsAction } from '../../store/api-actions';
import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import LoadingScreen from '../loading-screen/loading-screen';
import { getQuestsRequestStatus } from '../../store/selectors';
import { QuestsCatalog } from './components/components';
import * as S from './home-screen.styled';
import { RequestStatus } from '../../constants';

function HomeScreen() {
  const questsRequestStatus = useSelector(getQuestsRequestStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (questsRequestStatus === RequestStatus.Unknown) {
      dispatch(getQuestsAction());
    }
  }, [dispatch, questsRequestStatus]);

  if (questsRequestStatus === RequestStatus.Unknown
    || questsRequestStatus === RequestStatus.Loading) {
    return <LoadingScreen />;
  }

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog />
      </S.Main>
    </MainLayout>
  );
}

export default HomeScreen;
