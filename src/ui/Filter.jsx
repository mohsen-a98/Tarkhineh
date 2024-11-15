import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import Chips from "./Chips";

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 0;
  overflow-x: auto;
`;

function Filter({ items, queryName }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = (e) => {
    searchParams.set(queryName, e.target.closest("span").innerText);
    setSearchParams(searchParams);
  };

  return (
    <StyledFilter>
      {items?.map((item, i) => (
        <Chips
          key={i}
          onClick={handleClick}
          active={searchParams.get(queryName) === item ? "true" : "false"}
        >
          {item}
        </Chips>
      ))}
    </StyledFilter>
  );
}

export default Filter;
