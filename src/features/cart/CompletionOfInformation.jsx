import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Invoice from "./Invoice";
import { getCart } from "./cartSlice";
import { useAddress } from "../user/useAddress";
import CreateEditAddress from "../user/CreateEditAddress";
import AddressItem from "../user/AddressItem";
import { StyledContainer } from "../../ui/Container";
import Button from "../../ui/Button";
import Empty from "../../ui/Empty";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";
import PositionInMobileView from "../../ui/PositionInMobileView";
import {
  TruckIcon,
  TruckFastIcon,
  ShoppingBagIcon,
  LocationIcon,
  CloseCircleIcon,
  TickCircleIcon,
} from "../../assets/svg";

const Container = styled(StyledContainer)`
  padding: 2.4rem 0;
`;

const StyledCompletionOfInformation = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
  margin-bottom: 2.4rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(3, auto);
  }
`;

const DeliveryMethod = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  padding: 1.6rem;

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--color-grey-800);
    border-bottom: 1px solid var(--color-grey-400);
    padding-bottom: 0.8rem;
    font-size: 1.4rem;
    font-weight: 400;

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

const Address = styled.div`
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  padding: 1.6rem;

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-grey-800);
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--color-grey-400);

    & > div {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.4rem;
      font-weight: 400;
    }
  }

  & > div:last-child {
    padding-top: 1.6rem;
    height: 20.7rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.8rem;
    overflow-y: scroll;
  }
  @media screen and (min-width: 1024px) {
    & > div:first-child > div {
      font-size: 1.6rem;
    }

    & > div:last-child {
      height: 15.6rem;
      grid-template-columns: 1fr 1fr;
      gap: 1.6rem;
    }

    & > div:last-child p {
      font-size: 1.4rem;
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const Description = styled.textarea`
  padding: 1.6rem;
  height: 14rem;
  resize: none;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  font-size: 1.4rem;
  font-weight: 400;

  &:focus {
    outline: none;
    border: 1px solid var(--color-primary);
  }
  @media screen and (min-width: 1024px) {
    height: 13.9rem;
    font-size: 1.6rem;
  }
`;

const InvoiceBox = styled.div`
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  padding: 1.6rem;

  @media screen and (min-width: 1024px) {
    grid-column: 2 / 3;
    grid-row: 1 / -1;
    border: none;
    padding: 0;
  }
`;

const BranchAddress = styled.div`
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  padding: 1.6rem;

  & > div:last-child {
    display: none;
  }

  & > div:first-child {
    & > div:first-child {
      display: flex;
      gap: 0.4rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--color-grey-400);

      h2 {
        font-size: 1.4rem;
        font-weight: 400;
      }
    }

    & > div:last-child {
      padding-top: 1.6rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      p {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 180%;
      }

      button {
        display: none;
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 1.6rem;

    & > div:first-child {
      & > div:first-child {
        border: none;

        h2 {
          font-size: 1.6rem;
        }

        svg {
          width: 1.8rem;
          height: 1.8rem;
        }
      }
      & > div:last-child {
        p {
          font-size: 1.4rem;
        }
        button {
          display: block;
          width: fit-content;
          align-self: flex-end;
          padding: 0.8rem 1.6rem;
          margin-top: 2.4rem;
          font-size: 1.2rem;
          height: 4rem;
        }
      }
    }

    & > div:last-child {
      display: block;
    }
  }
`;
function CompletionOfInformation() {
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const cart = useSelector(getCart);
  const { address, isLoading, error } = useAddress();

  function handleChange(e) {
    setDeliveryMethod(e.target.value);
  }

  if (isLoading) return <Spinner />;
  if (error) throw new Error(error.message);
  return (
    <Container>
      <PositionInMobileView title="تکمیل اطلاعات" isPositionDesktop={true} />

      <StyledCompletionOfInformation>
        <DeliveryMethod>
          <div>
            <span>
              <TruckIcon />
            </span>
            <span>روش تحویل سفارش</span>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="1"
                name="method"
                value="delivery"
                defaultChecked
                onChange={handleChange}
              />
              <label htmlFor="1">
                ارسال توسط پیک
                <span>توسط پیک رستوران ارسال شود.</span>
              </label>
              <span>
                <TruckFastIcon />
              </span>
            </div>
            <div>
              <input
                type="radio"
                id="2"
                name="method"
                value="inPerson"
                onChange={handleChange}
              />
              <label htmlFor="2">
                تحویل حضوری
                <span>توسط پیک رستوران ارسال شود.</span>
              </label>
              <span>
                <ShoppingBagIcon />
              </span>
            </div>
          </div>
        </DeliveryMethod>
        {deliveryMethod === "delivery" && (
          <Address>
            <div>
              <div>
                <span>
                  <LocationIcon />
                </span>
                <span>آدرس‌ها</span>
              </div>
              <Modal>
                <Modal.Open name="address">
                  <Button variations="text">
                    <CloseCircleIcon />
                    افزودن آدرس
                  </Button>
                </Modal.Open>
                <Modal.Window
                  name="address"
                  colorCloseIcon="var(--color-grey-700)"
                  widthCloseIcon={30}
                  top="3.5%"
                >
                  <CreateEditAddress />
                </Modal.Window>
              </Modal>
            </div>
            <div>
              {address?.length === 0 ? (
                <Empty>
                  <p>شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!</p>
                </Empty>
              ) : (
                address.map((add, index) => (
                  <AddressItem key={index} address={add} />
                ))
              )}
            </div>
          </Address>
        )}

        {deliveryMethod === "inPerson" && (
          <BranchAddress>
            <div>
              <div>
                <span>
                  <LocationIcon />
                </span>
                <h2>آدرس شعبه اکباتان</h2>
              </div>
              <div>
                <p>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</p>
                <p>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</p>
                <p>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱ </p>
                <p>ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل</p>
                <Button variations="outline" color="black">
                  مشاهده در نقشه
                </Button>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12682.752129950253!2d51.66148798547722!3d32.65341278348024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc35fe8c326799%3A0x7ab57816ef5837f5!2sIsfahan%2C%20Iran!5e0!3m2!1sde!2sde!4v1705577917353!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: "0", borderRadius: "4px" }}
                loading="lazy"
              ></iframe>
            </div>
          </BranchAddress>
        )}

        <Description placeholder="توضیحات سفارش (اختیاری)"></Description>
        <InvoiceBox>
          <Invoice
            cart={cart}
            btnObj={{
              text: "ثبت سفارش",
              path: "/payment",
              icon: <TickCircleIcon />,
              iconDir: "right",
              disabled: !!address?.length,
            }}
            isCartList="true"
          />
        </InvoiceBox>
      </StyledCompletionOfInformation>
    </Container>
  );
}

export default CompletionOfInformation;
