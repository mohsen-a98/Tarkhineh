import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Error = styled.span`
  font-size: 1.2rem;
  color: var(--color-error);
  padding-right: 1rem;
`;

function FormRow({ error, children }) {
  return (
    <StyledFormRow className="form-row">
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
