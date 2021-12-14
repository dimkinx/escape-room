import Loader from 'react-loader-spinner';
import * as S from './loading.styled';
import { LoaderParam } from '../../constants';

const {Type, Color, Size: {Width, Height}} = LoaderParam;

const Loading = () => (
  <S.Main forwardedAs="main">
    <S.PageTitle>Выполняется загрузка...</S.PageTitle>
    <Loader
      type={Type}
      color={Color}
      width={Width}
      height={Height}
    />
  </S.Main>
);

export default Loading;
