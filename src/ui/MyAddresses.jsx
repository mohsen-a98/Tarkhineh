import styled from "styled-components";
import { StyledContainer } from "./Container";
import PositionInMobileView from "./PositionInMobileView";
import DashboardAside from "./DashboardAside";
import { useAddress } from "../features/user/useAddress";
import Empty from "./Empty";
import Button from "./Button";
import Modal from "./Modal";
import CreateEditAddress from "../features/user/CreateEditAddress";
import AddressItem from "../features/user/AddressItem";
import Spinner from "../ui/Spinner";
import CloseCircleIcon from "../../public/assets/svg/outline-close-circle.svg?react";

const StyledMyAddresses = styled(StyledContainer)`
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

const AddressBox = styled.div`
  & > div:nth-of-type(1) {
    display: none;
  }

  & > button {
    width: fit-content;
    margin: 2.4rem auto;
  }

  @media screen and (min-width: 1024px) {
    flex: 1;
    padding: 2.4rem;
    border: 1px solid var(--color-grey-400);
    border-radius: var(--border-radius-md);
    height: 49rem;

    & > div:nth-of-type(1) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 0.8rem;
      margin-bottom: 1.6rem;
      border-bottom: 1px solid var(--color-grey-400);

      h2 {
        font-size: 2rem;
        font-weight: 600;
        color: var(--color-grey-800);
      }
    }

    & > button {
      display: none;
    }
  }
`;

const AddressCardBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function MyAddresses() {
  const { address, isLoading, error } = useAddress();

  if (isLoading) return <Spinner />;
  if (error) throw new Error(error.message);
  return (
    <Modal>
      <StyledMyAddresses>
        <PositionInMobileView title="آدرس ها" />
        <DashboardAside />
        {address.length === 0 ? (
          <EmptyBox>
            <Empty height="50vh">
              <p>شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!</p>

              <Modal.Open name="addAddress">
                <Button variations="outline">افزودن آدرس</Button>
              </Modal.Open>
            </Empty>
          </EmptyBox>
        ) : (
          <AddressBox>
            <div>
              <h2>آدرس ها</h2>
              <Modal.Open name="addAddress">
                <Button variations="text">
                  <CloseCircleIcon />
                  افزودن آدرس
                </Button>
              </Modal.Open>
            </div>
            <AddressCardBox>
              {address.map((item) => (
                <AddressItem key={item.id} address={item} />
              ))}
            </AddressCardBox>
            <Modal.Open name="addAddress">
              <Button variations="outline">افزودن آدرس جدید</Button>
            </Modal.Open>
          </AddressBox>
        )}
      </StyledMyAddresses>
      <Modal.Window
        name="addAddress"
        colorCloseIcon="var(--color-grey-700)"
        widthCloseIcon={30}
        top="3%"
      >
        <CreateEditAddress />
      </Modal.Window>
    </Modal>
  );
}

export default MyAddresses;
