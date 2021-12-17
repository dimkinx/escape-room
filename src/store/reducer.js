import { createReducer } from '@reduxjs/toolkit';
import { RequestStatus } from '../constants';
import {
  setQuest,
  setQuestRequestStatus,
  setQuests,
  setQuestsRequestStatus,
  setOrderRequestStatus,
} from './actions';

const initialState = {
  quest: {
    data: null,
    status: RequestStatus.Unknown,
  },
  quests: {
    data: [],
    status: RequestStatus.Unknown,
  },
  order: {
    status: RequestStatus.Unknown,
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setQuest, (state, action) => {
      state.quest.data = action.payload.quest;
    })
    .addCase(setQuestRequestStatus, (state, action) => {
      state.quest.status = action.payload.status;
    })
    .addCase(setQuests, (state, action) => {
      state.quests.data = action.payload.quests;
    })
    .addCase(setQuestsRequestStatus, (state, action) => {
      state.quests.status = action.payload.status;
    })
    .addCase(setOrderRequestStatus, (state, action) => {
      state.order.status = action.payload.status;
    });
});

export default reducer;
