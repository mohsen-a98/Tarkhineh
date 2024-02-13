import styled from "styled-components";
import PositionInMobileView from "../../ui/PositionInMobileView";
import DashboardAside from "../../ui/DashboardAside";
import { StyledContainer } from "../../ui/Container";
import Filter from "../../ui/Filter";
import Spinner from "../../ui/Spinner";
import { useGetOrders } from "./useGetOrders";
import Empty from "../../ui/Empty";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import OrderBox from "./OrderBox";

const StyledOrderTracking = styled(StyledContainer)`
  padding: 2.4rem 0;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 2.4rem;
  }
`;

const EmptyBox = styled.div`
  flex: 1;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
`;

const Orders = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  & > div:nth-of-type(1) {
    margin-bottom: 2.4rem;
  }

  h2 {
    display: none;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--color-grey-400);
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 600;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    flex: 1;

    & > div:nth-of-type(1) {
      grid-column: 1 / -1;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr;
    border: 1px solid var(--color-grey-400);
    border-radius: var(--border-radius-md);
    padding: 2.4rem;

    h2 {
      display: block;
    }
  }
`;

const filterItems = ["همه", "جاری", "تحویل شده", "لغو شده"];

function OrderTracking() {
  const { orders, isLoading, error } = useGetOrders();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (error) throw new Error(error.message);
  return (
    <StyledOrderTracking>
      <PositionInMobileView title="سفارشات" />
      <DashboardAside />
      {orders.length === 0 ? (
        <EmptyBox>
          <Empty height="50vh">
            <p>شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!</p>
            <Button variations="outline" onClick={() => navigate("/menu")}>
              منوی رستوران
            </Button>
          </Empty>
        </EmptyBox>
      ) : (
        <Orders>
          <h2>سفارشات</h2>
          <Filter items={filterItems} queryName="order-position" />
          {orders.map((order) => (
            <OrderBox key={order.id} order={order} />
          ))}
        </Orders>
      )}
    </StyledOrderTracking>
  );
}

export default OrderTracking;
