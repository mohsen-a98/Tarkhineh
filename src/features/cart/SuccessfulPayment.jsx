import styled from "styled-components";
import { StyledContainer } from "../../ui/Container";
import SuccessfulPaymentIcon from "../../../public/assets/svg/successful-payment.svg?react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const StyledSuccessfulPayment = styled(StyledContainer)`
  min-height: calc(100vh - 7rem);
  display: grid;
  place-items: center;
  background-image: url("./assets/svg/successful-payment-Background.svg");
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-primary);
  gap: 1.6rem;
  width: 32rem;

  p {
    margin-top: 0.8rem;
    font-size: 1.6rem;
    font-weight: 700;
  }

  span {
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

function SuccessfulPayment() {
  const navigate = useNavigate();
  return (
    <StyledSuccessfulPayment>
      <Container>
        <span>
          <SuccessfulPaymentIcon />
        </span>
        <p>پرداخت شما با موفقیت انجام شد!</p>
        <span>کد رهگیری سفارش شما: ۲۱۵۴۹۰۱۹</span>
        <div>
          <Button variations="outline" onClick={() => navigate("/")}>
            بازگشت به صفحه اصلی
          </Button>
          <Button>پیگیری سفارش</Button>
        </div>
      </Container>
    </StyledSuccessfulPayment>
  );
}

export default SuccessfulPayment;
