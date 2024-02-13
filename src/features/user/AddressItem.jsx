import styled from "styled-components";
import EditIcon from "../../../public/assets/svg/outline-edit-2.svg?react";
import TrashIcon from "../../../public/assets/svg/trash.svg?react";
import { useDeleteAddress } from "./useDeleteAddress";
import Modal from "../../ui/Modal";
import CreateEditAddress from "./CreateEditAddress";

const StyledAddressItem = styled.div`
  padding: 1.6rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-sm);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background-color: var(--color-grey-100);
  font-size: 1rem;
  font-weight: 400;
  line-height: 180%;
  height: fit-content;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  & > div:first-child {
    color: var(--color-grey-800);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.8rem;

    div {
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }

    svg {
      width: 1.6rem;
      height: 1.6rem;

      & * {
        fill: currentColor;
      }
    }
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-grey-700);
  }

  @media screen and (min-width: 768px) {
    gap: 1.2rem;
    font-size: 1.4rem;

    & > div:first-child {
      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    & > div:first-child {
      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
`;

function AddressItem({ address: add }) {
  const { deleteAddress, isLoading } = useDeleteAddress();
  const address = add.address;

  return (
    <StyledAddressItem>
      <div>
        <p>{address.address}</p>
        <div>
          <Modal>
            <Modal.Open name="editAddress">
              <button>
                <EditIcon />
              </button>
            </Modal.Open>
            <button onClick={() => deleteAddress(add.id)} disabled={isLoading}>
              <TrashIcon />
            </button>

            <Modal.Window name="editAddress">
              <CreateEditAddress address={add} />
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <div>
        <span>{address.title}</span>
        <span>{address.name}</span>
        <span>{address.myPhone || address.phone}</span>
      </div>
    </StyledAddressItem>
  );
}

export default AddressItem;
