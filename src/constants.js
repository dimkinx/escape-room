import { appTheme as theme } from './components/app/common';

const ENDPOINT_BASE_URL = 'http://localhost:3001';

const Endpoint = {
  GetQuest: (id) => `${ENDPOINT_BASE_URL}/quests/${id}`,
  GetQuests: () => `${ENDPOINT_BASE_URL}/quests`,
  PostOrder: () => `${ENDPOINT_BASE_URL}/orders`,
};

const HttpStatusCode = {
  NotFound: '404',
};

const RequestStatus = {
  Unknown: 'UNKNOWN',
  Loading: 'LOADING',
  Success: 'SUCCESS',
  NotFound: 'NOT_FOUND',
  Fail: 'FAIL',
};

const AppRoute = {
  Home: '/',
  DetailedQuest: '/detailed-quest/:id',
  QuestWithoutId: '/detailed-quest/',
  Beginners: '/beginners',
  Reviews: '/reviews',
  Stock: '/stock',
  Contacts: '/contacts',
};

const ActionType = {
  SetQuest: 'setQuest',
  SetQuestRequestStatus: 'setQuestRequestStatus',
  SetQuests: 'setQuests',
  SetQuestsRequestStatus: 'setQuestsRequestStatus',
  SetQuestsType: 'setQuestsType',
  SetOrderRequestStatus: 'setOrderRequestStatus',
};

const SuccessMessage = {
  SuccessToSendOrder: 'Ваша заявка отправлена!',
};

const ErrorMessage = {
  FailToLoadQuest: 'Не удалось загрузить квест',
  FailToLoadQuests: 'Не удалось загрузить квесты',
  FailToSendOrder: 'Не удалось отправить заявку',
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

const TabsType = {
  All: {
    Title: 'Все квесты',
    Type: 'all-quests',
    IconSize: {
      Width: '26',
      Height: '30',
    },
  },
  Adventures: {
    Title: 'Приключения',
    Type: 'adventures',
    IconSize: {
      Width: '36',
      Height: '30',
    },
  },
  Horror: {
    Title: 'Ужасы',
    Type: 'horror',
    IconSize: {
      Width: '30',
      Height: '30',
    },
  },
  Mystic: {
    Title: 'Мистика',
    Type: 'mystic',
    IconSize: {
      Width: '30',
      Height: '30',
    },
  },
  Detective: {
    Title: 'Детектив',
    Type: 'detective',
    IconSize: {
      Width: '40',
      Height: '30',
    },
  },
  SciFi: {
    Title: 'Sci-fi',
    Type: 'sci-fi',
    IconSize: {
      Width: '28',
      Height: '30',
    },
  },
};

const LevelType = {
  Hard: 'сложный',
  Medium: 'средний',
  Easy: 'легкий',
};

export {
  Endpoint,
  HttpStatusCode,
  RequestStatus,
  AppRoute,
  ActionType,
  SuccessMessage,
  ErrorMessage,
  ToastParam,
  LoaderParam,
  MapParam,
  MapIconParam,
  TabsType,
  LevelType,
};
