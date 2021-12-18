import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestsType } from '../../../../store/selectors';
import { setQuestsType } from '../../../../store/actions';
import TabsIcon from '../tabs-icon/tabs-icon';
import * as S from './tabs-item.styled';

function TabsItem({ tabType }) {
  const { Title, Type, IconSize: { Width, Height } } = tabType;
  const questsType = useSelector(getQuestsType);
  const dispatch = useDispatch();

  const handleTabBtnClick = () => {
    if (Type !== questsType) {
      dispatch(setQuestsType(Type));
    }
  };

  return (
    <S.TabItem>
      <S.TabBtn
        onClick={handleTabBtnClick}
        isActive={Type === questsType}
      >
        <TabsIcon
          name={Type}
          width={Width}
          height={Height}
        />
        <S.TabTitle>{Title}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>
  );
}

TabsItem.propTypes = {
  tabType: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    IconSize: PropTypes.shape({
      Width: PropTypes.string.isRequired,
      Height: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TabsItem;
