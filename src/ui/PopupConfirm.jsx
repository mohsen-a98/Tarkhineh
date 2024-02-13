import styled from "styled-components";
import Button from "./Button";

const StyledPopupConfirm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  gap: 1.6rem;
  background-color: var(--color-white);
  width: 32rem;

  &,
  & h3 {
    border-radius: var(--border-radius-md);
  }

  h3 {
    grid-column: 1 / -1;
    background-color: var(--color-grey-100);
    height: 5.7rem;
    font-size: 1.4rem;
    font-weight: 500;
    display: grid;
    place-items: center;
  }
  p {
    grid-column: 1 / -1;
    margin-bottom: 1.6rem;
  }

  p,
  button {
    font-size: 1.2rem;
    font-weight: 400;
  }

  button {
    width: 12.8rem;
    margin-bottom: 1.6rem;

    &:nth-of-type(1) {
      justify-self: end;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 39.2rem;
    row-gap: 3rem;
    h3 {
      font-size: 2rem;
      font-weight: 600;
      height: 6.6rem;
    }

    p {
      font-size: 1.6rem;
    }

    button {
      font-size: 1.6rem;
      font-weight: 500;
      height: 4rem;
      margin-bottom: 2.4rem;
    }
  }
`;

function PopupConfirm({ onCloseModal, type, onClick }) {
  const headerText =
    type === "delete" ? "حذف محصولات" : type === "account" ? "حساب کاربری" : "";
  const bodyText =
    type === "delete"
      ? "همه محصولات سبد خرید شما حذف شود؟"
      : type === "account"
      ? "آیا برای خروج از حساب کاربری مطمئن هستید؟"
      : "";

  return (
    <StyledPopupConfirm>
      <h3>{headerText}</h3>
      <p>{bodyText}</p>
      <Button variations="outline" onClick={() => onCloseModal()}>
        بازگشت
      </Button>
      <Button
        onClick={() => {
          onClick();
          onCloseModal();
        }}
        color="red"
      >
        {type === "delete" ? "حذف" : "خروج"}
      </Button>
    </StyledPopupConfirm>
  );
}

PopupConfirm.defaultProps = {
  type: "delete",
};
export default PopupConfirm;
