import { appTheme as theme } from './components/app/common';

const AppRoute = {
  Home: '/',
  DetailedQuest: '/quest',
  Contacts: '/contacts',
};

const LoaderParam = {
  Type: 'Puff',
  Color: theme.color.tangerine,
  Size: {
    Width: 100,
    Height: 100,
  },
}

export {
  AppRoute,
  LoaderParam,
};
