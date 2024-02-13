import styled from "styled-components";
import Button from "../../ui/Button";
import OrderTrackingCard from "./OrderTrackingCard";
import CalendarIcon from "../../../public/assets/svg/outline-calendar.svg?react";
import LocationIcon from "../../../public/assets/svg/location.svg?react";
import WalletIcon from "../../../public/assets/svg/outline-wallet.svg?react";

const StyledOrderBox = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  margin-bottom: 1.2rem;
  color: var(--color-grey-700);
  width: 30.6rem;

  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.8rem;

    & > span {
      font-size: 1.2rem;
      font-weight: 400;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      span {
        font-size: 1rem;
        font-weight: 400;
        padding: 0.2rem 0.4rem;
        border-radius: var(--border-radius-sm);
        height: 2.2rem;
        display: grid;
        place-items: center;
      }

      span:first-child {
        background-color: var(--color-grey-300);
        color: var(--color-grey-800);
      }

      span:last-child {
        color: var(--color-primary);
        background-color: var(--color-green-100);
      }
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    gap: 0.8rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 180%;
    display: flex;
    align-items: center;
    gap: 0.4rem;

    svg {
      width: 1.2rem;
      height: 1.2rem;

      & * {
        fill: currentColor;
      }
    }
  }

  & > span {
    align-self: center;
    margin-bottom: 1.6rem;
  }

  button {
    width: fit-content;
    align-self: center;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    padding: 2.4rem;

    & > div:nth-of-type(1) {
      & > span {
        font-size: 1.4rem;
      }

      div span {
        font-size: 1.2rem;
        padding: 0.2rem 1.2rem;
        height: 2.6rem;
      }
    }

    p {
      font-size: 1.2rem;
      svg {
        width: 1.6rem;
        height: 1.6rem;
      }
    }

    & > span {
      display: none;
    }

    button {
      align-self: end;
    }
  }
`;

const formatDate = (value) =>
  new Intl.DateTimeFormat("fa-IR", {
    day: "numeric",
    month: "long",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));

function OrderBox({ order }) {
  return (
    <StyledOrderBox>
      <div>
        <span>شعبه اقدسیه</span>
        <div>
          <span>تحویل حضوری</span>
          <span>تحویل شده</span>
        </div>
      </div>
      <p>
        <CalendarIcon />
        {formatDate(order.date)}
      </p>
      <p>
        <LocationIcon />
        تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
      </p>
      <p>
        <WalletIcon />
        مبلغ: {order.orders.reduce(
          (acc, item) => acc + item.totalPrice,
          0
        )}{" "}
        تخفیف:{" "}
        {order.orders.reduce(
          (acc, item) => acc + (item.price - item.discountedPrice),
          0
        )}
      </p>
      <div>
        {order.orders.map((order) => (
          <OrderTrackingCard key={order.id} order={order} />
        ))}
      </div>
      <span>مشاهده همه سفارشات</span>
      <Button variations="outline">سفارش مجدد</Button>
    </StyledOrderBox>
  );
}

export default OrderBox;
