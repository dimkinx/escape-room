import { createReducer } from '@reduxjs/toolkit';
import { RequestStatus, TabsType } from '../constants';
import {
  setQuest,
  setQuestRequestStatus,
  setQuests,
  setQuestsRequestStatus,
  setOrderRequestStatus, setQuestsType,
} from './actions';

const initialState = {
  quest: {
    data: null,
    status: RequestStatus.Unknown,
  },
  quests: {
    data: [],
    status: RequestStatus.Unknown,
    type: TabsType.All.Type,
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
    .addCase(setQuestsType, (state, action) => {
      state.quests.type = action.payload.type;
    })
    .addCase(setOrderRequestStatus, (state, action) => {
      state.order.status = action.payload.status;
    });
});

export default reducer;
