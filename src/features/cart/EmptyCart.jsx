import styled from "styled-components";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const StyledEmptyCart = styled.div`
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  background-image: url("../../../public/assets/svg/Empty page.svg");
  background-repeat: no-repeat;
  background-position: center;
  height: 37.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  p {
    color: var(--color-grey-700);
    font-size: 1.2rem;
    font-weight: 400;
  }

  button {
    background-color: var(--color-white);
    width: 15.2rem;
  }

  @media screen and (min-width: 1024px) {
    height: 42.2rem;
    background-size: 25%;
    gap: 3.5rem;
    p {
      font-size: 2rem;
    }

    button {
      font-size: 2rem;
      font-weight: 500;
      padding: 0.8rem 1.6rem;
      width: 18.4rem;
      height: 4rem;
    }
  }
`;

function EmptyCart() {
  const navigate = useNavigate();
  return (
    <StyledEmptyCart>
      <p>شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!</p>
      <Button variations="outline" onClick={() => navigate("/menu")}>
        منوی رستوران
      </Button>
    </StyledEmptyCart>
  );
}

export default EmptyCart;
