import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const StyledForm = styled(Form)`
  // padding: 0 1rem;
`;

export const StyledFormControl = styled(Form.Control)`
  height: 3rem;
  padding: 0.5rem;
  outline: 0;
  border-width: 0 0 2px;
  border-color: #cdc9c3;
  border-radius: 0;
`;

export const StyledPhrase = styled.div`
  font-size: 1.5rem;
  font-weight: 200;
  line-height: 1.1;
  display: flex;
  justify-content: center;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const StyledButton = styled(Button)`
  width: 45%;
`;
