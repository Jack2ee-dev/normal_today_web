import React from 'react';
import Form from 'react-bootstrap/Form';

import {
  StyledForm,
  StyledFormControl,
  StyledButtonWrapper,
  StyledButton,
} from './styled';

const Forms = ({ data, functions }) => {
  const { email, birthDate } = data;
  const { changed, clicked, skip, submit } = functions;

  return (
    <StyledForm>
      <Form.Group controlId="email">
        <StyledFormControl
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(event) =>
            changed('email', event.target.value)
          }
        />
      </Form.Group>
      <Form.Group controlId="birthDate">
        <StyledFormControl
          type="text"
          placeholder="생년월일"
          value={birthDate}
          onClick={() => clicked()}
          onChange={() => clicked()}
        />
      </Form.Group>
      <Form.Group controlId="sex">
        <StyledFormControl
          as="select"
          onChange={(event) =>
            changed('sex', event.target.value)
          }
        >
          <option defaultValue="" disabled selected hidden>
            성별
          </option>
          <option>남자</option>
          <option>여자</option>
          <option>밝히지 않음</option>
        </StyledFormControl>
      </Form.Group>
      <StyledButtonWrapper>
        <StyledButton
          variant="light"
          onClick={() => skip()}
        >
          건너뛰기
        </StyledButton>
        <StyledButton
          variant="primary"
          onClick={() => submit()}
        >
          제출
        </StyledButton>
      </StyledButtonWrapper>
    </StyledForm>
  );
};

export default Forms;
