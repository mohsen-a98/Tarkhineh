import styled from "styled-components";

const StyledErrorFallback = styled.main`
  height: 100dvh;
  background-color: #f9f9f9;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 1rem;
`;

const Box = styled.div`
  background-color: #e1e1e168;
  padding: 1rem 1.6rem;
  border-radius: 8px;
  color: #353535;
  font-family: "estedad", Tahoma, "Segoe UI", Geneva, Verdana, sans-serif;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
  }

  button {
    float: left;
    font-size: 1rem;
    margin-top: 1rem;
    border: 1px solid #353535;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      color: white;
      background-color: #35353582;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 2.4rem 4.8rem;

    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.6rem;
      margin-top: 2rem;
    }

    button {
      font-size: 1.2rem;
      margin-top: 2rem;
      padding: 8px 16px;
    }
  }
`;

function ErrorFallback({ error }) {
  return (
    <StyledErrorFallback>
      <Box>
        <h1>خطایی رخ داده است</h1>
        <p>{error.message}</p>
        <button onClick={() => window.location.reload()}>تلاش مجدد</button>
      </Box>
    </StyledErrorFallback>
  );
}

export default ErrorFallback;
