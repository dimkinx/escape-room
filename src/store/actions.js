import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../constants';

const setQuest = createAction(
  ActionType.SetQuest,
  (quest) => ({
    payload: {
      quest,
    },
  }),
);

const setQuestRequestStatus = createAction(
  ActionType.SetQuestRequestStatus,
  (status) => ({
    payload: {
      status,
    },
  }),
);

const setQuests = createAction(
  ActionType.SetQuests,
  (quests) => ({
    payload: {
      quests,
    },
  }),
);

const setQuestsRequestStatus = createAction(
  ActionType.SetQuestsRequestStatus,
  (status) => ({
    payload: {
      status,
    },
  }),
);

const setQuestsType = createAction(
  ActionType.SetQuestsType,
  (type) => ({
    payload: {
      type,
    },
  }),
);

const setOrderRequestStatus = createAction(
  ActionType.SetOrderRequestStatus,
  (status) => ({
    payload: {
      status,
    },
  }),
);

export {
  setQuest,
  setQuestRequestStatus,
  setQuests,
  setQuestsRequestStatus,
  setQuestsType,
  setOrderRequestStatus,
};
