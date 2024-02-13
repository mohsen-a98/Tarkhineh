import { createContext, useContext, useState } from "react";
import styled, { css } from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledDropdownButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  ${(props) =>
    props.open === "open" &&
    css`
      & > svg {
        transform: rotate(180deg);
      }
    `}
`;

const StyledDropdownContent = styled.div`
  position: absolute;
  top: 160%;
  left: 0;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-white);
  /* width: 14.4rem; */
  width: max-content;
  display: none;
  border: 1px solid var(--color-grey-300);
  z-index: 10;

  ${(props) =>
    props.open === "open" &&
    css`
      display: block;
    `}
`;

const StyledDropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0 0.8rem;
`;

const StyledDropdownItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  height: 4rem;
  cursor: pointer;
  padding: 0 0.8rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-300);
  }

  &:hover {
    background-color: var(--color-grey-100);
  }

  & {
    color: var(--color-grey-700);
    text-decoration: none;
  }

  & svg * {
    fill: currentColor !important;
  }

  @media screen and (min-width: 1024px) {
    padding: 2.5rem 1rem;
  }
`;

const DropdownContext = createContext();

function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  const ref = useOutsideClick(close);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={ref} style={{ position: "relative" }}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

function DropdownButton({ children }) {
  const { isOpen, setIsOpen } = useContext(DropdownContext);
  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <StyledDropdownButton onClick={toggleOpen} open={isOpen ? "open" : "close"}>
      {children}{" "}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.00001 11.1999C7.53335 11.1999 7.06668 11.0199 6.71335 10.6666L2.36668 6.31993C2.17335 6.12659 2.17335 5.8066 2.36668 5.61326C2.56001 5.41993 2.88001 5.41993 3.07335 5.61326L7.42001 9.95993C7.74001 10.2799 8.26001 10.2799 8.58001 9.95993L12.9267 5.61326C13.12 5.41993 13.44 5.41993 13.6333 5.61326C13.8267 5.8066 13.8267 6.12659 13.6333 6.31993L9.28668 10.6666C8.93335 11.0199 8.46668 11.1999 8.00001 11.1999Z"
          fill="#353535"
        />
      </svg>
    </StyledDropdownButton>
  );
}

function DropdownContent({ children }) {
  const { isOpen } = useContext(DropdownContext);

  return (
    <StyledDropdownContent open={isOpen ? "open" : "close"}>
      {children}
    </StyledDropdownContent>
  );
}

function DropdownList({ children }) {
  const { setIsOpen } = useContext(DropdownContext);
  return (
    <StyledDropdownList onClick={() => setIsOpen(false)}>
      {children}
    </StyledDropdownList>
  );
}

function DropdownItem({ children, onClick }) {
  return <StyledDropdownItem onClick={onClick}>{children}</StyledDropdownItem>;
}

Dropdown.Button = DropdownButton;
Dropdown.Content = DropdownContent;
Dropdown.List = DropdownList;
Dropdown.Item = DropdownItem;
export default Dropdown;
