import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import Home from 'components/home/home';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import NotFound from '../not-found/not-found';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from '../../constants';

const App = () => (
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

export default App;
