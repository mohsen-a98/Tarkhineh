import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Invoice from "./Invoice";
import { clearCart, getCart } from "./cartSlice";
import { useAddOrder } from "../order/useAddOrder";
import { StyledContainer } from "../../ui/Container";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import PositionInMobileView from "../../ui/PositionInMobileView";

import {
  CartIcon,
  WarningIcon,
  DiscountShapeIcon,
  WalletMoneyIcon,
  CardPosIcon,
  WalletIcon,
  CardIcon,
} from "../../assets/svg";

const Container = styled(StyledContainer)`
  padding: 2.4rem 0;
`;

const StyledPayment = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
  margin-bottom: 2.4rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(4, auto);
  }
`;

const DiscountCode = styled.div`
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--color-grey-400);

    h2 {
      font-size: 1.4rem;
      font-weight: 400;
    }
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  input {
    font-size: 1.2rem;
    font-weight: 400;
    padding: 1rem 1.6rem;
    border: 1px solid var(--color-grey-400);
    border-radius: var(--border-radius-sm);
    flex: 1;

    &:focus {
      outline: none;
      border: 1px solid var(--color-primary);
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 6.5rem;
    padding: 2.4rem;
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    & > div:first-child {
      border: none;
      padding-bottom: 0;
    }
  }

  @media screen and (min-width: 1024px) {
    & > div:first-child {
      h2 {
        font-size: 1.6rem;
      }
    }

    & > div:last-child {
      input {
        font-size: 1.4rem;
        width: 32rem;
      }
      button {
        font-size: 1.6rem;
        font-weight: 500;
        padding: 0.8rem 1.6rem;
      }
    }
  }
`;

const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  padding: 1.6rem;

  & > div:first-child {
    display: flex;
    gap: 0.4rem;
    color: var(--color-grey-800);
    border-bottom: 1px solid var(--color-grey-400);
    padding-bottom: 0.8rem;

    h2 {
      font-size: 1.4rem;
      font-weight: 400;
    }

    svg * {
      fill: currentColor;
    }
  }

  & > div:last-child {
    padding-top: 1.6rem;
    display: flex;
    align-items: center;
    gap: 3rem;

    & > div {
      display: flex;
      gap: 0.8rem;
      color: var(--color-grey-700);
      svg * {
        fill: currentColor;
      }
    }

    label {
      font-size: 1.2rem;
      font-weight: 400;

      span {
        display: none;
      }
    }

    input[type="radio"] {
      width: 1.6rem;
      height: 1.6rem;
    }
    input[type="radio"]:checked {
      position: relative;
      appearance: none;
      border: 1px solid var(--color-success-light);
      border-radius: 50%;
    }

    input[type="radio"]:checked::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--color-success-light);
      width: 70%;
      height: 70%;
      border-radius: 50%;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 6.5rem;
    padding: 2.4rem;
    & svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    & > div:first-child {
      border: none;
      padding-bottom: 0;
    }
    & > div:last-child {
      flex-direction: row;
      padding-top: 0;
      gap: 4rem;

      & > div {
        align-items: center;
      }

      label {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }

      label span {
        display: inline-block;
        font-size: 1rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    height: 10.7rem;

    & > div:first-child {
      h2 {
        font-size: 1.6rem;
      }
    }

    & > div:last-child {
      label {
        font-size: 1.4rem;
        gap: 0.6rem;
      }
    }
  }
`;

const PaymentGateway = styled.div`
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  padding: 1.6rem;
  display: flex;
  flex-direction: column;

  & > div:first-child {
    display: flex;
    gap: 0.4rem;
    color: var(--color-grey-800);
    border-bottom: 1px solid var(--color-grey-400);
    padding-bottom: 0.8rem;
    font-size: 1.4rem;
    font-weight: 400;

    h2 {
      font-size: 1.4rem;
      font-weight: 400;
    }

    svg * {
      fill: currentColor;
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 180%;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8rem;
    padding: 2.4rem;
    & > div:first-child {
      border: none;
      padding-bottom: 0;

      h2 {
        font-size: 1.6rem;
      }

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    & > div:last-child {
      p {
        font-size: 1.2rem;
      }
    }
  }
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  padding-top: 1.6rem;

  input[type="radio"] {
    appearance: none;
    width: 6.4rem;
    height: 6.4rem;
    border: 1px solid var(--color-grey-400);
    border-radius: var(--border-radius-sm);
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }

  & > input:nth-of-type(1) {
    background-image: url("./assets/images/bank-1.jpg");
  }
  & > input:nth-of-type(2) {
    background-image: url("./assets/images/bank-2.jpg");
  }
  & > input:nth-of-type(3) {
    background-image: url("./assets/images/bank-3.jpg");
  }

  & > input:checked {
    border: 1px solid var(--color-primary);
    box-shadow: 0px 0px 4px 0px var(--color-green-500);
  }

  @media screen and (min-width: 768px) {
    gap: 1.6rem;

    input[type="radio"] {
      width: 9.6rem;
      height: 9.6rem;
    }
  }
`;

const InvoiceBox = styled.div`
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  padding: 1.6rem;

  @media screen and (min-width: 768px) {
    padding: 2.4rem;
  }

  @media screen and (min-width: 1024px) {
    grid-column: 2 / 3;
    grid-row: 1 / -1;
    border: none;
    padding: 0;
  }
`;

const WarningBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  color: var(--color-grey-800);
  background-color: var(--color-grey-100);
  padding: 1.6rem;

  & > div {
    display: flex;
    gap: 0.4rem;
    border-bottom: 1px solid var(--color-grey-400);
    padding-bottom: 0.8rem;
    font-size: 1.4rem;
    font-weight: 400;

    h2 {
      font-size: 1.4rem;
      font-weight: 400;
    }

    svg * {
      fill: currentColor;
    }
  }

  p {
    padding-top: 1.6rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 180%;
    text-align: justify;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 7rem;
    padding: 2.4rem;

    & > div {
      border: none;
      padding-bottom: 0;
      align-items: center;
      gap: 0.8rem;
      h2 {
        width: max-content;
        font-size: 1.6rem;
      }

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
`;
function Payment() {
  const cart = useSelector(getCart);
  const user = useSelector((state) => state.user.user);
  const { addOrder, isLoading, error } = useAddOrder();
  const dispatch = useDispatch();
  const [discountCode, setDiscountCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("internet");
  const [, setPaymentGateway] = useState("saman");

  function handleChange(e) {
    setPaymentMethod(e.target.value);
  }

  function handleChangeGateway(e) {
    setPaymentGateway(e.target.value);
  }
  function handleAddOrder() {
    const date = new Date().toLocaleString();
    const newOrder = {
      userId: user.id,
      orders: cart,
      date,
    };
    addOrder(newOrder);
    dispatch(clearCart());
  }

  if (isLoading) return <Spinner />;
  if (error) throw new Error(error.message);
  return (
    <Container>
      <PositionInMobileView title="تکمیل اطلاعات" isPositionDesktop={true} />

      <StyledPayment>
        <DiscountCode>
          <div>
            <span>
              <DiscountShapeIcon />
            </span>
            <h2>ثبت کد تخفیف</h2>
          </div>
          <div>
            <input
              type="text"
              placeholder="کد تخفیف"
              defaultValue={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <Button color="black" disabled={!discountCode}>
              ثبت کد
            </Button>
          </div>
        </DiscountCode>

        <PaymentMethod>
          <div>
            <span>
              <WalletMoneyIcon />
            </span>
            <h2>روش پرداخت</h2>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="1"
                name="method"
                value="internet"
                defaultChecked
                onChange={handleChange}
              />
              <label htmlFor="1">
                پرداخت اینترنتی
                <span>توسط پیک رستوران ارسال شود.</span>
              </label>
              <span>
                <CardPosIcon />
              </span>
            </div>
            <div>
              <input
                type="radio"
                id="2"
                name="method"
                value="onTheSpot"
                onChange={handleChange}
              />
              <label htmlFor="2">
                پرداخت در محل
                <span>توسط پیک رستوران ارسال شود.</span>
              </label>
              <span>
                <WalletIcon />
              </span>
            </div>
          </div>
        </PaymentMethod>

        {paymentMethod === "internet" && (
          <PaymentGateway>
            <div>
              <span>
                <CardIcon />
              </span>
              <h2>درگاه پرداخت</h2>
            </div>
            <div>
              <InputBox>
                <input
                  type="radio"
                  name="gateway"
                  value="saman"
                  onChange={handleChangeGateway}
                  defaultChecked
                />
                <input
                  type="radio"
                  name="gateway"
                  value="mellat"
                  onChange={handleChangeGateway}
                />
                <input
                  type="radio"
                  name="gateway"
                  value="parsian"
                  onChange={handleChangeGateway}
                />
              </InputBox>
              <p>پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌</p>
              <p>(لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)</p>
            </div>
          </PaymentGateway>
        )}

        {paymentMethod === "onTheSpot" && (
          <WarningBox>
            <div>
              <span>
                <WarningIcon />
              </span>
              <h2>قابل توجه</h2>
            </div>
            <p>
              هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از
              تحویل کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از
              درخواست برای پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با تشکر
              از همراهی شما.
            </p>
          </WarningBox>
        )}

        <InvoiceBox>
          <Invoice
            cart={cart}
            btnObj={{
              text: "تایید و پرداخت",
              icon: <CartIcon />,
              iconDir: "right",
            }}
            isCartList="true"
            isAddOrder={true}
            onClick={handleAddOrder}
          />
        </InvoiceBox>
      </StyledPayment>
    </Container>
  );
}

export default Payment;
