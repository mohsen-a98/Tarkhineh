import { cloneElement, createContext, useContext, useState } from "react";
import styled, { css } from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import CloseIcon from "../../public/assets/svg/close-icon.svg?react";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  & img {
    width: 100%;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: brightness(0.2) blur(3px);
  z-index: 999;
  transition: all 0.3s;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 5%;
  left: 3%;
  cursor: pointer;

  ${(props) =>
    props.$colorCloseIcon && `& > svg * {fill: ${props.$colorCloseIcon}}`};

  ${(props) =>
    props.$widthCloseIcon &&
    css`
      & > svg {
        width: ${props.$widthCloseIcon}px;
        height: ${props.$widthCloseIcon}px;
      }
    `};

  ${(props) =>
    props.$top &&
    css`
      top: ${props.$top};
      left: ${props.$left};
    `}
`;

const ModalContext = createContext();
function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, name }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(name) });
}

function Window({ children, name, colorCloseIcon, widthCloseIcon, top, left }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (openName !== name) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button
          onClick={close}
          $colorCloseIcon={colorCloseIcon}
          $widthCloseIcon={widthCloseIcon}
          $top={top}
          $left={left}
        >
          <CloseIcon />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
