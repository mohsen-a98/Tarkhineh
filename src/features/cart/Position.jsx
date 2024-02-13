import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";

import { CartIcon, OutlineTickSquareIcon, WalletIcon } from "../../assets/svg";

const StyledPosition = styled.div`
  margin-bottom: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-400);
  font-size: 1.4rem;
  font-weight: 400;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;

    * {
      fill: currentColor;
    }
  }

  ${(props) =>
    props.$pathname === "/shoppingCart" &&
    css`
      & > div:nth-of-type(1) span {
        font-size: 1.6rem;
        font-weight: 700;
      }
      & > div:nth-of-type(1) {
        color: var(--color-primary);
      }
    `}
  ${(props) =>
    props.$pathname === "/completion-of-information" &&
    css`
      & > div:nth-of-type(1) {
        color: var(--color-primary);
      }
      & > div:nth-of-type(2) span {
        font-size: 1.6rem;
        font-weight: 700;
      }

      & > div:nth-of-type(2) {
        color: var(--color-primary);
      }
    `}
  ${(props) =>
    props.$pathname === "/payment" &&
    css`
      & > div:nth-of-type(1) {
        color: var(--color-primary);
      }

      & > div:nth-of-type(2) {
        color: var(--color-primary);
      }

      & > div:nth-of-type(3) span {
        font-size: 1.6rem;
        font-weight: 700;
        color: var(--color-primary);
      }
      & > div:nth-of-type(3) {
        color: var(--color-primary);
      }
    `}
`;

function Position() {
  const { pathname } = useLocation();
  return (
    <StyledPosition $pathname={pathname}>
      <div>
        <span>
          <CartIcon />
        </span>
        <span>سبد خرید</span>
        <p>- - - - - -</p>
      </div>
      <div>
        <p>- - - - - -</p>
        <span>
          <OutlineTickSquareIcon />
        </span>
        <span>تکمیل اطلاعات</span>
        <p>- - - - - -</p>
      </div>
      <div>
        <p>- - - - - -</p>
        <span>
          <WalletIcon />
        </span>
        <span>پرداخت</span>
      </div>
    </StyledPosition>
  );
}

export default Position;
