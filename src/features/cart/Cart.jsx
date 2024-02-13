import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartInvoice from "./CartInvoice";
import { getCart } from "./cartSlice";
import Container from "../../ui/Container";
import Empty from "../../ui/Empty";
import Button from "../../ui/Button";
import PositionInMobileView from "../../ui/PositionInMobileView";

const StyledCart = styled.div`
  padding: 2.4rem 0;
`;

const EmptyBox = styled.div`
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  height: 37.5rem;
  @media screen and (min-width: 1024px) {
    height: 42.2rem;
  }
`;

function Cart() {
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  return (
    <StyledCart>
      <Container>
        <PositionInMobileView
          title="سبد خرید"
          isClearCart={true}
          isPositionDesktop={true}
        />

        {cart.length > 0 ? (
          <CartInvoice />
        ) : (
          <EmptyBox>
            <Empty height="100%">
              <p>شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!</p>
              <Button variations="outline" onClick={() => navigate("/menu")}>
                منوی رستوران
              </Button>
            </Empty>
          </EmptyBox>
        )}
      </Container>
    </StyledCart>
  );
}

export default Cart;
