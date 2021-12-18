import { appTheme as theme } from './components/app/common';

const ENDPOINT_URL = 'http://localhost:3001';

const HttpStatusCode = {
  NotFound: 404,
};

const RequestStatus = {
  Unknown: 'UNKNOWN',
  Loading: 'LOADING',
  Success: 'SUCCESS',
  NotFound: 'NOT_FOUND',
  Fail: 'FAIL',
};

const APIRoute = {
  GetQuest: (id) => `${ENDPOINT_URL}/quests/${id}`,
  GetQuests: () => `${ENDPOINT_URL}/quests`,
  PostOrder: () => `${ENDPOINT_URL}/orders`,
};

const AppRoute = {
  Home: '/',
  DetailedQuest: '/quest/:id',
  Beginners: '/beginners',
  Reviews: '/reviews',
  Stock: '/stock',
  Contacts: '/contacts-screen',
};

const ActionType = {
  SetQuest: 'setQuest',
  SetQuestRequestStatus: 'setQuestRequestStatus',
  SetQuests: 'setQuests',
  SetQuestsRequestStatus: 'setQuestsRequestStatus',
  SetOrderRequestStatus: 'setReviewRequestStatus',
};

const ErrorMessage = {
  FailToLoadQuest: 'Не удалось загрузить квест',
  FailToLoadQuests: 'Не удалось загрузить квесты',
  FailToSendOrder: 'Не удалось отправить заказ',
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

export {
  HttpStatusCode,
  RequestStatus,
  APIRoute,
  AppRoute,
  ActionType,
  ErrorMessage,
  ToastParam,
  LoaderParam,
  MapParam,
  MapIconParam,
};
