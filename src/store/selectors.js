import { createSelector } from 'reselect';
import { TabsType } from '../constants';

const getQuest = (state) => state.quest.data;
const getQuestRequestStatus = (state) => state.quest.status;
const getQuests = (state) => state.quests.data;
const getQuestsRequestStatus = (state) => state.quests.status;
const getQuestsType = (state) => state.quests.type;

const getQuestsByType = createSelector(
  [getQuests, getQuestsType],
  (quests, currentQuestsType) => {
    if (currentQuestsType === TabsType.All.Type) {
      return quests;
    }

    return quests.filter(({ type }) => currentQuestsType === type);
  },
);

export {
  getQuest,
  getQuestRequestStatus,
  getQuests,
  getQuestsRequestStatus,
  getQuestsType,
  getQuestsByType,
};
