import React from 'react';
import { useSelector } from 'react-redux';
import { getQuestsByType } from '../../../../store/selectors';
import TabsItem from '../tabs-item/tabs-item';
import QuestsItem from '../quests-item/quests-item';
import * as S from './quests-catalog.styled';
import { TabsType } from '../../../../constants';

function QuestsCatalog() {
  const quests = useSelector(getQuestsByType);

  return (
    <>
      <S.Tabs>
        {Object.values(TabsType).map((TabType) => (
          <TabsItem
            key={TabType.Type}
            tabType={TabType}
          />
        ))}
      </S.Tabs>
      <S.QuestsList>
        {quests.map((quest) => (
          <QuestsItem
            key={quest.id}
            quest={quest}
          />
        ))}
      </S.QuestsList>
    </>
  );
}

export default QuestsCatalog;
