import styled from "styled-components";

const StyledEmpty = styled.div`
  background-image: url("../../../public/assets/svg/Empty page.svg");
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: var(--color-grey-700);
  font-size: 1.2rem;
  font-weight: 400;

  ${(props) => props.$height && `height: ${props.$height};`}

  button {
    background-color: var(--color-white);
    width: 15.2rem;
  }

  @media screen and (min-width: 1024px) {
    background-size: 30%;
    gap: 3.5rem;
    font-size: 2rem;

    button {
      font-size: 2rem;
      font-weight: 500;
      padding: 0.8rem 1.6rem;
      width: 18.4rem;
      height: 4rem;
    }
  }
`;

function Empty({ children, height }) {
  return <StyledEmpty $height={height}>{children}</StyledEmpty>;
}

export default Empty;
