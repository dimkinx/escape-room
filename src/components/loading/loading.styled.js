import styled from 'styled-components';
import { Container } from 'components/common/common';

const Main = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const PageTitle = styled.h1.attrs({
  className: 'visually-hidden',
})``;

export {
  Main,
  PageTitle,
};
