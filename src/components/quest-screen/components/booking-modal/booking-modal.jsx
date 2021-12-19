import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postOrderAction } from '../../../../store/api-actions';
import { getOrderRequestStatus } from '../../../../store/selectors';
import { setOrderRequestStatus } from '../../../../store/actions';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import PropTypes from 'prop-types';
import * as S from './booking-modal.styled';
import { normalizePhoneNumber } from '../../../../utils';
import { RequestStatus } from '../../../../constants';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Введите имя'),
  phone: yup
    .string()
    .test(
      'test-phone',
      'Введите номер телефона, действующий в РФ',
      (value) => isValidPhoneNumber(value, 'RU'),
    )
    .required(),
  peopleCount: yup
    .number()
    .positive('Число должно быть больше нуля')
    .integer('Число должно быть целым')
    .typeError('Введите количество участников')
    .required(),
  isLegal: yup
    .bool()
    .oneOf(
      [true],
      'Одобрите согласие на обработку персональных данных'
    ),
}).required();

function BookingModal({ onModalCloseBtnClick }) {
  const orderRequestStatus = useSelector(getOrderRequestStatus);
  const [phoneNumber, setPhoneNumber] = useState('');

  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const handleDataFetch = (data) => {
    dispatch(postOrderAction({ ...data, phone: normalizePhoneNumber(phoneNumber) }));
  };

  const handleOnlyNumberKeyPress = (evt) => {
    if (!/[0-9]/.test(evt.key)) {
      evt.preventDefault();
    }
  };

  const handleModalCloseBtnClick = () => onModalCloseBtnClick && onModalCloseBtnClick(false);

  const handleEscKeydown = useCallback((evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      onModalCloseBtnClick && onModalCloseBtnClick(false);
    }
  }, [onModalCloseBtnClick]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscKeydown);
    return () => {
      document.removeEventListener('keydown', handleEscKeydown);
    };
  }, [handleEscKeydown]);

  useEffect(() => {
    if (orderRequestStatus === RequestStatus.Success) {
      dispatch(setOrderRequestStatus(RequestStatus.Unknown));
      document.removeEventListener('keydown', handleEscKeydown);
      onModalCloseBtnClick(false);
    }
  }, [dispatch, handleEscKeydown, onModalCloseBtnClick, orderRequestStatus]);

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn
          onClick={handleModalCloseBtnClick}
        >
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          noValidate
          onSubmit={handleSubmit(handleDataFetch)}
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              {...register('name')}
              type="text"
              id="booking-name"
              name="name"
              placeholder="Имя"
              required
            />
            {errors.name && (
              <S.BookingErrorText>{errors.name?.message}</S.BookingErrorText>
            )}
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingPhoneInput
              {...register('phone')}
              type="tel"
              id="booking-phone"
              name="phone"
              placeholder="Телефон"
              defaultCountry="RU"
              value={phoneNumber}
              onChange={setPhoneNumber}
              required
            />
            {errors.phone && (
              <S.BookingErrorText>{errors.phone?.message}</S.BookingErrorText>
            )}
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              {...register('peopleCount')}
              type="number"
              id="booking-people"
              name="peopleCount"
              placeholder="Количество участников"
              onKeyPress={handleOnlyNumberKeyPress}
              required
            />
            {errors.peopleCount && (
              <S.BookingErrorText>{errors.peopleCount?.message}</S.BookingErrorText>
            )}
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              {...register('isLegal')}
              type="checkbox"
              id="booking-legal"
              name="isLegal"
              required
            />
            {errors.isLegal && (
              <S.BookingErrorText>{errors.isLegal?.message}</S.BookingErrorText>
            )}
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
}

BookingModal.propTypes = {
  onModalCloseBtnClick: PropTypes.func,
};

export default BookingModal;
