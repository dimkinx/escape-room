import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestAction } from '../../store/api-actions';
import { setQuestRequestStatus } from '../../store/actions';
import { getQuest, getQuestRequestStatus } from '../../store/selectors';
import { MainLayout } from 'components/common/common';
import { BookingModal } from './components/components';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quest-screen.styled';
import { applyCamelCase, transformListToText } from '../../utils';
import { AppRoute, LevelType, RequestStatus, TabsType } from '../../constants';

function QuestScreen() {
  const { id } = useParams();
  const quest = useSelector(getQuest);
  const questRequestStatus = useSelector(getQuestRequestStatus);
  const dispatch = useDispatch();
  const [ isBookingModalOpened, setIsBookingModalOpened ] = useState(false);

  const handleBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  useEffect(() => {
    dispatch(getQuestAction(id));

    return () => {
      dispatch(setQuestRequestStatus(RequestStatus.Unknown));
    };
  }, [dispatch, id]);

  if (questRequestStatus === RequestStatus.Fail) {
    return <Redirect to={AppRoute.Home} />;
  }

  if (questRequestStatus === RequestStatus.NotFound) {
    return <NotFoundScreen />;
  }

  if (quest === null
    || questRequestStatus === RequestStatus.Unknown
    || questRequestStatus === RequestStatus.Loading) {
    return <LoadingScreen />;
  }

  const { coverImg, title, type, duration, peopleCount, level, description } = quest;

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{TabsType[applyCamelCase(type)].Title.toLowerCase()}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${transformListToText(peopleCount)} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{LevelType[applyCamelCase(level)]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn
              onClick={handleBookingBtnClick}
            >
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && (
          <BookingModal
            onModalCloseBtnClick={setIsBookingModalOpened}
          />
        )}
      </S.Main>
    </MainLayout>
  );
}

export default QuestScreen;
