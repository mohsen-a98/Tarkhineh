import styled from "styled-components";
import Button from "./Button";
import Modal from "./Modal";
import { GalleryIcon } from "../assets/svg";
import { useNavigate } from "react-router-dom";

const StyledBranchCard = styled.div`
  width: 32rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-sm);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & img {
    width: 100%;
    height: 11.2rem;
    object-fit: cover;
    border-radius: calc(var(--border-radius-sm) - 1px);
  }

  & > svg {
    display: none;
  }

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 0.6rem 1.6rem;
    padding: 1.6rem;
    padding-top: 0;
    color: var(--color-grey-800);
    width: 100%;
    height: 100%;

    & > *:not(button) {
      grid-column: 1 / -1;
    }
  }

  & h2 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  & button {
    width: 100%;
    margin-top: 0.4rem;
  }

  & address {
    font-style: normal;
  }

  & address,
  & p {
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 180%;
  }

  @media screen and (min-width: 768px) {
    & h2 {
      font-size: 1.4rem;
    }

    & img {
      height: 15.2rem;
    }

    & address,
    & p {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    height: 28rem;
    border-radius: var(--border-radius-md);

    & > div {
      padding: 2.4rem 4.8rem;
    }

    & img {
      width: 100%;
      height: 100%;
      border-radius: calc(var(--border-radius-md) - 1px);
    }

    & h2 {
      font-size: 2rem;
      font-weight: 600;
    }

    & address,
    & p {
      font-size: 1.8rem;
    }

    & button {
      opacity: 0;
      font-size: 1.6rem;
      font-weight: 500;
      padding: 0.8rem 1.6rem;
      height: 4rem;
      width: fit-content;
    }

    & button {
      justify-self: end;
    }
    & button:last-child {
      justify-self: start;
    }

    &:hover {
      position: relative;
      box-shadow: var(--shadow-md);
      transition: box-shadow 0.5s;

      & > svg {
        display: block;
        position: absolute;
        top: 40%;
        right: 21%;
        width: 5.4rem;
        height: 5.4rem;
        z-index: 20;
        cursor: pointer;
      }
      & button {
        opacity: 1;
        transition: opacity 0.5s;
      }

      & img {
        filter: brightness(0.4);
        transition: filter 0.5s;
      }
    }
  }
`;

function BranchCard({ branch }) {
  const navigate = useNavigate();
  return (
    <StyledBranchCard>
      <img src={branch.image} alt={branch.name} />
      <Modal>
        <Modal.Open>
          <GalleryIcon />
        </Modal.Open>
        <Modal.Window>
          <img src={branch.image} alt={branch.name} loading="lazy" />
        </Modal.Window>
      </Modal>

      <div>
        <h2>{branch.name}</h2>
        <address>
          <span>آدرس: </span>
          <span>{branch.address}</span>
        </address>
        <p>
          <span>شماره تماس: </span>
          <span dir="ltr">۰۲۱-۵۴۸۹۱۲۵۰-۵۱</span>
        </p>
        <p>
          <span>ساعت کاری: </span>
          <span>{branch.timeActivity} بجز روزهای تعطیل</span>
        </p>
        <Button variations="outline" onClick={() => navigate("/branch")}>
          صفحه شعبه
        </Button>
        <Button>دیدن در نقشه</Button>
      </div>
    </StyledBranchCard>
  );
}

export default BranchCard;
