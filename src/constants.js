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
  AppRoute,
  LoaderParam,
  MapParam,
  MapIconParam,
};
