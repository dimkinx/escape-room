import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import Home from 'components/home/home';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Underway from '../underway/underway';
import Contacts from 'components/contacts/contacts';
import NotFound from '../not-found/not-found';
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
            <Home />
          </Route>
          <Route exact path={AppRoute.DetailedQuest}>
            <DetailedQuest />
          </Route>
          <Route exact path={AppRoute.Beginners}>
            <Underway />
          </Route>
          <Route exact path={AppRoute.Reviews}>
            <Underway />
          </Route>
          <Route exact path={AppRoute.Stock}>
            <Underway />
          </Route>
          <Route exact path={AppRoute.Contacts}>
            <Contacts />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
