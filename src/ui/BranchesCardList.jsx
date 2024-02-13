import styled from "styled-components";
import { useBranches } from "../hooks/useBranches";
import Spinner from "./Spinner";
import BranchCard from "./BranchCard";
import Container from "./Container";

const StyledBranchesCardList = styled.section`
  padding: 2.4rem 0;

  & > div {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 2.8rem;
  }

  @media screen and (min-width: 768px) {
    & > div {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 1024px) {
    & > div {
      grid-template-columns: 1fr;
    }
  }
`;

function BranchesCardList() {
  const { isLoading, branches } = useBranches();

  if (isLoading) return <Spinner />;

  return (
    <StyledBranchesCardList>
      <Container>
        {branches?.map((branch) => (
          <BranchCard key={branch.id} branch={branch} />
        ))}
      </Container>
    </StyledBranchesCardList>
  );
}

export default BranchesCardList;
