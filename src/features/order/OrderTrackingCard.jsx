import styled from "styled-components";

const StyledOrderTrackingCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 8.8rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  position: relative;
  padding-bottom: 0.4rem;

  img {
    width: 100%;
    height: 4.8rem;
    object-fit: cover;
    border-top-right-radius: calc(var(--border-radius-md) - 1px);
    border-top-left-radius: calc(var(--border-radius-md) - 1px);
  }

  span {
    position: absolute;
    padding: 0 0.2rem;
    background-color: var(--color-white);
    border-radius: 2px;
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-primary);
    left: 4px;
    top: 32px;
  }

  p {
    width: fit-content;
    max-width: 90%;
    align-self: center;
    padding: 0 0.5rem;
    overflow: hidden;
    color: var(--color-grey-800);
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1rem;
    font-weight: 400;
  }

  @media screen and (min-width: 1024px) {
    width: 12.3rem;
    padding-bottom: 0.8rem;

    img {
      height: 8.1rem;
    }

    span {
      font-size: 1.2rem;
      padding: 0 0.4rem;
      top: 61px;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

function OrderTrackingCard({ order }) {
  return (
    <StyledOrderTrackingCard>
      <img src={order.image} alt={order.title} />
      <span>{`x ${order.quantity}`}</span>
      <p>{order.title}</p>
      <p>{order.totalPrice} تومان</p>
    </StyledOrderTrackingCard>
  );
}

export default OrderTrackingCard;
