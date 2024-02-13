import styled from "styled-components";

const StyledSearchBox = styled.div`
  position: relative;
  margin-top: 1.6rem;
  & > input {
    width: 100%;
    border: 1px solid var(--color-grey-400);
    border-radius: var(--border-radius-sm);
    padding: 0.8rem 1.6rem;
    height: 3.2rem;
    font-size: 1.2rem;

    &:is(:focus, :active) {
      border-color: var(--color-primary);
      outline: none;
    }

    &::placeholder {
      color: var(--color-grey-800);
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 21%;
    left: 1.6rem;
    background: url("./assets/svg/search.svg");
    width: 1.6rem;
    height: 1.6rem;
  }

  @media screen and (min-width: 768px) {
    display: none;
    input {
      height: 4rem;
    }
  }
`;
function SearchBox({ inputText = "", setInputText = () => {} }) {
  return (
    <StyledSearchBox>
      <input
        type="text"
        name="searchBox"
        id="searchBox"
        placeholder="جستجو"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </StyledSearchBox>
  );
}

export default SearchBox;
