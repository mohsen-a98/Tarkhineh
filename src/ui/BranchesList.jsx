import styled from "styled-components";
import Container from "./Container";
import { useBranches } from "../hooks/useBranches";
import Spinner from "./Spinner";
import Button from "./Button";
import Modal from "./Modal";
import { ArrowLeftIcon, GalleryIcon } from "../assets/svg";
import { useNavigate } from "react-router-dom";

const StyledBranchesList = styled.section`
  text-align: center;
  color: var(--color-grey-800);
  padding: 2.4rem 0;

  & h2 {
    margin-bottom: 1.2rem;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 140%;
  }

  @media screen and (min-width: 1024px) {
    padding: 4.8rem 0;

    & h2 {
      font-size: 2.4rem;
      margin-bottom: 2.4rem;
    }
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Branch = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-sm);
  position: relative;

  & > img {
    min-width: 14.4rem;
    height: 8rem;
    object-fit: cover;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 1.6rem;
  }

  & > svg {
    display: none;
  }

  & h3 {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
  }

  & address {
    overflow: hidden;
    font-style: normal;
    line-height: 180%;
    color: var(--color-grey-700);
  }

  & button {
    margin-top: 0.8rem;
    display: none;
  }

  &::before {
    content: url("./assets/svg/expand.svg");
    width: 16px;
    height: 16px;
    position: absolute;
    right: 0.8rem;
    bottom: 0.8rem;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    border-radius: var(--border-radius-md);

    & > img {
      width: 100%;
      height: 23rem;
    }

    & h3 {
      font-size: 2rem;
      font-weight: 600;
      line-height: 180%;
    }

    & address {
      font-size: 1.4rem;
      font-weight: 500;
    }

    & button {
      display: flex;
      opacity: 0;
    }

    &:hover {
      position: relative;
      box-shadow: var(--shadow-md);
      transition: box-shadow 0.3s;

      & > svg {
        display: block;
        position: absolute;
        top: 25%;
        right: 38%;
        width: 5.4rem;
        height: 5.4rem;
        z-index: 20;
        cursor: pointer;
      }

      & button {
        opacity: 1;
        transition: all 0.3s;
      }

      & img {
        filter: brightness(0.4);
        transition: all 0.3s;
      }
    }

    &::before {
      display: none;
    }
  }
`;
function BranchesList() {
  const { isLoading, branches, error } = useBranches();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (error) throw new Error(error.message);

  const renderBranch = (branch) => {
    return (
      <Branch key={branch.id}>
        <img src={branch.image} alt={branch.name} />
        <Modal>
          <Modal.Open>
            <GalleryIcon />
          </Modal.Open>
          <Modal.Window>
            <img
              style={{ maxHeight: "44rem" }}
              src={branch.image}
              alt={branch.name}
              loading="lazy"
            />
          </Modal.Window>
        </Modal>
        <div>
          <h3>{branch.name}</h3>
          <address>{branch.address}</address>
          <Button variations="outline" onClick={() => navigate("/branch")}>
            صفحه شعبه <ArrowLeftIcon />
          </Button>
        </div>
      </Branch>
    );
  };

  return (
    <StyledBranchesList>
      <Container>
        <h2>ترخینه گردی</h2>
        <Row>{branches?.map(renderBranch)}</Row>
      </Container>
    </StyledBranchesList>
  );
}

export default BranchesList;
