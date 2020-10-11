import React, {
  useState,
  useEffect,
  useContext,
} from 'react';
import qs from 'query-string';
import DatePicker from 'react-mobile-datepicker';
import Spinner from 'react-bootstrap/Spinner';

import { AuthContext } from '../../contexts/stores/authStore';
import axios from '../../axios';

import {
  UserPageLayout,
  ComponentsWrapper,
} from './styled';

import Phrase from '../../components/user/phrase';
import Form from '../../components/user/form';

const User = ({ location, history }) => {
  const {
    state: authState,
    dispatch: authDispatch,
  } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [
    existingUserDetail,
    setExistingUserDetail,
  ] = useState({
    email: '',
    sex: null,
    birthDate: '',
  });
  const [date, setDate] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(
    false
  );

  const { mode } = qs.parse(location.search);

  const getUserDetail = async () => {
    setLoading(true);
    try {
      const userDetail = (
        await axios({
          url: `/user/${authState.userId}/detail`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${authState.authToken}`,
          },
        })
      ).data;

      setExistingUserDetail(userDetail);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleUserDetailInput = (key, value) => {
    const changedUserDetail = {
      ...existingUserDetail,
      [key]: value,
    };
    setExistingUserDetail(changedUserDetail);
  };

  const openDatePicker = () => setIsDatePickerOpen(true);

  const closeDatePicker = () => setIsDatePickerOpen(false);

  const selectDate = (date) => {
    const birthDateFormatted = `${date
      .toISOString()
      .substring(0, 10)
      .replaceAll('-', '.')}.`;
    handleUserDetailInput('birthDate', birthDateFormatted);
    setIsDatePickerOpen(false);
  };

  const skipUserDetailPage = () => {
    history.push('/');
  };

  const submitUserDetail = async () => {
    try {
      const result = (
        await axios({
          url: `/user/${authState.userId}/detail`,
          method: 'POST',
          headers: {
            Authorization: `Bearer ${authState.authToken}`,
          },
        })
      ).data;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    switch (mode) {
      case 'init':
        console.log('init');
        break;
      case 'edit':
        getUserDetail();
        break;
      default:
        break;
    }
  }, [mode]);

  let Components;
  if (loading)
    Components = () => <Spinner animation="border" />;
  else
    Components = () => (
      <ComponentsWrapper>
        <Phrase />
        <Form
          data={{
            email: existingUserDetail.email,
            birthDate: existingUserDetail.birthDate,
            sex: existingUserDetail.sex,
          }}
          functions={{
            changed: handleUserDetailInput,
            clicked: openDatePicker,
            skip: skipUserDetailPage,
            submit: submitUserDetail,
          }}
        />
      </ComponentsWrapper>
    );

  return (
    <UserPageLayout>
      <Components />
      <DatePicker
        value={date}
        isOpen={isDatePickerOpen}
        onSelect={selectDate}
        onCancel={closeDatePicker}
        theme="ios"
        confirmText="선택"
        cancelText="취소"
      />
    </UserPageLayout>
  );
};

export default User;
