import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import HomeScreen from 'components/home-screen/home-screen';
import QuestScreen from 'components/quest-screen/quest-screen';
import UnderwayScreen from '../underway-screen/underway-screen';
import ContactsScreen from 'components/contacts-screen/contacts-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from '../../constants';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={AppRoute.Home}>
            <HomeScreen />
          </Route>
          <Route exact path={AppRoute.DetailedQuest}>
            <QuestScreen />
          </Route>
          <Route exact path={AppRoute.Beginners}>
            <UnderwayScreen />
          </Route>
          <Route exact path={AppRoute.Reviews}>
            <UnderwayScreen />
          </Route>
          <Route exact path={AppRoute.Stock}>
            <UnderwayScreen />
          </Route>
          <Route exact path={AppRoute.Contacts}>
            <ContactsScreen />
          </Route>
          <Route>
            <NotFoundScreen />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
