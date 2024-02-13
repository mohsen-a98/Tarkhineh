import { useSelector } from "react-redux";
import styled from "styled-components";
import useDevice from "../../hooks/useDevice";
import CartItem from "./CartItem";
import CartItemDesktop from "./CartItemDesktop";
import Invoice from "./Invoice";
import { getCart } from "./cartSlice";
import { ArrowLeftIcon } from "../../assets/svg";

const StyledCartInvoice = styled.div`
  padding: 2.4rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    padding: 0;
    border: none;
    flex-direction: row;
    gap: 2.4rem;
  }
`;

const InvoiceList = styled.ul`
  height: 30rem;
  overflow-y: scroll;
  border-bottom: 1px solid var(--color-grey-400);
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media screen and (min-width: 1024px) {
    height: 45.4rem;
    padding: 2.4rem;
    border: 1px solid var(--color-grey-400);
    border-radius: var(--border-radius-md);
  }
`;

function CartInvoice() {
  const cart = useSelector(getCart);
  const { isMobile } = useDevice();

  return (
    <StyledCartInvoice>
      <InvoiceList>
        {isMobile &&
          cart?.map((item) => <CartItem key={item.id} item={item} />)}
        {!isMobile &&
          cart?.map((item) => <CartItemDesktop key={item.id} food={item} />)}
      </InvoiceList>
      <Invoice
        cart={cart}
        btnObj={{
          text: "تکمیل اطلاعات",
          path: "/completion-of-information",
          icon: <ArrowLeftIcon />,
          iconDir: "left",
        }}
      />
    </StyledCartInvoice>
  );
}

export default CartInvoice;
