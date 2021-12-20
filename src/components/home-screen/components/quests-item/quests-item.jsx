import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-item.styled';
import { applyCamelCase, transformListToText } from '../../../../utils';
import { AppRoute, LevelType } from '../../../../constants';

function QuestsItem({ quest }) {
  const { id, previewImg, title, peopleCount, level } = quest;
  return (
    <S.QuestItem>
      <S.QuestItemLink to={`${AppRoute.QuestWithoutId}${id}`}>
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width="344"
            height="232"
            alt={`Квест ${title}`}
          />

          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {`${transformListToText(peopleCount)} чел`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {LevelType[applyCamelCase(level)]}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
}

QuestsItem.propTypes = {
  quest: PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    peopleCount: PropTypes.array.isRequired,
    level: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuestsItem;
