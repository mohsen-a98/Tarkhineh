import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { StyledContainer } from "../../ui/Container";
import UnsuccessfulPaymentIcon from "../../../public/assets/svg/unsuccessful-payment.svg?react";

const StyledUnsuccessfulPayment = styled(StyledContainer)`
  min-height: calc(100vh - 7rem);
  display: grid;
  place-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  width: 32rem;

  p {
    color: var(--color-error);
    margin-top: 0.8rem;
    font-size: 1.6rem;
    font-weight: 700;
  }

  span {
    color: var(--color-grey-800);
    font-size: 1.2rem;
    font-weight: 400;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem;
    margin-top: 3.2rem;
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    width: 56rem;
    gap: 2.4rem;

    p {
      font-size: 4rem;
    }

    span {
      font-size: 2rem;
    }

    span svg {
      width: 25.6rem;
      height: 24rem;
    }

    button {
      height: 4rem;
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
`;

function UnsuccessfulPayment() {
  const navigate = useNavigate();
  return (
    <StyledUnsuccessfulPayment>
      <Container>
        <span>
          <UnsuccessfulPaymentIcon />
        </span>
        <p>پرداخت شما ناموفق بود!</p>
        <span>کد پیگیری تراکنش شما: ۶۵۸۵۷۱۲۷</span>
        <div>
          <Button variations="text" onClick={() => navigate("/")}>
            بازگشت به صفحه اصلی
          </Button>
          <Button variations="outline">پرداخت مجدد</Button>
        </div>
      </Container>
    </StyledUnsuccessfulPayment>
  );
}

export default UnsuccessfulPayment;
