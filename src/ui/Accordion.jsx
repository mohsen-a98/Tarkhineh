import { useState } from "react";
import styled, { css } from "styled-components";
import { ArrowDownIcon } from "../assets/svg";
import useDevice from "../hooks/useDevice";

const StyledAccordion = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-sm);
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0.8rem 1.6rem;

  svg {
    transition: all 0.3s;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-400);
  }

  ${(props) =>
    props.$isActive === true &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    h3 {
      font-size: 1.4rem;
      font-weight: 400;
      color: var(--color-primary);
    }

    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 180%;
    text-align: right;
  }

  @media screen and (min-width: 768px) {
    gap: 2rem;
    padding: 1.6rem;

    & > div {
      h3 {
        font-size: 1.6rem;
      }
      svg {
        width: 2rem;
        height: 2rem;
      }
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media screen and (min-width: 1024px) {
    & > div {
      h3 {
        font-size: 2rem;
      }
      svg {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
    p {
      font-size: 1.6rem;
    }
  }
`;

function Accordion({ children }) {
  return <StyledAccordion>{children}</StyledAccordion>;
}

function Item({ option }) {
  const { isMobile } = useDevice();
  const [activeId, setActiveId] = useState(-1);
  const open = setActiveId;
  const close = () => setActiveId(-1);
  const isActive = activeId === option.id;
  const toggle = () => (isActive ? close() : open(option.id));

  return (
    <StyledItem onClick={() => toggle()} $isActive={isActive}>
      <div>
        <h3>{isMobile ? option.title : option.titleDesktop}</h3>
        <span>
          <ArrowDownIcon />
        </span>
      </div>
      {isActive && <p>{option.description}</p>}
    </StyledItem>
  );
}

Accordion.Item = Item;

export default Accordion;
