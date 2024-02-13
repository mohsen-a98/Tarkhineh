import styled from "styled-components";

const StyledContainer = styled.div`
  width: 88.89%;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    width: 85%;
  }
`;
function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export { StyledContainer };
export default Container;
