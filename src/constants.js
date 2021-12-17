import { appTheme as theme } from './components/app/common';

const AppRoute = {
  Home: '/',
  DetailedQuest: '/quest',
  Beginners: '/beginners',
  Reviews: '/reviews',
  Stock: '/stock',
  Contacts: '/contacts',
};

const ToastParam = {
  Theme: 'colored',
  Position: 'top-center',
};

const LoaderParam = {
  Type: 'Puff',
  Color: theme.color.tangerine,
  Size: {
    Width: 100,
    Height: 100,
  },
};

const MapParam = {
  Size: {
    Width: 649,
    Height: 336,
  },
  Zoom: 16,
  Location: {
    Latitude: 59.968322,
    Longitude: 30.317359,
  },
};

const MapIconParam = {
  Size: {
    Width: 56,
    Height: 70,
  },
  AnchorPosition: {
    X: 56 / 2,
    Y: 60,
  },
  Location: {
    Latitude: 59.968322,
    Longitude: 30.317359,
  },
};

const RequestStatus = {
  Unknown: 'UNKNOWN',
  Loading: 'LOADING',
  Success: 'SUCCESS',
  NotFound: 'NOT_FOUND',
  Fail: 'FAIL',
};

const ActionType = {
  SetQuest: 'setQuest',
  SetQuestRequestStatus: 'setQuestRequestStatus',
  SetQuests: 'setQuests',
  SetQuestsRequestStatus: 'setQuestsRequestStatus',
  SetReviewRequestStatus: 'setReviewRequestStatus',
};

export {
  AppRoute,
  ToastParam,
  LoaderParam,
  MapParam,
  MapIconParam,
  RequestStatus,
  ActionType,
};
