import styled from "styled-components";
import { StyledContainer } from "./Container";
import PositionInMobileView from "./PositionInMobileView";
import DashboardAside from "./DashboardAside";
import { useSelector } from "react-redux";
import Empty from "./Empty";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";
import FavoriteCard from "./FavoriteCard";
import Filter from "./Filter";

const StyledFavorite = styled(StyledContainer)`
  padding: 2.4rem 0;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 2.4rem;
  }
`;

const EmptyBox = styled.div`
  flex: 1;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
`;

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.2rem, 1fr));
  gap: 2rem 1.5rem;
  justify-items: center;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(27.7rem, 1fr));
    gap: 2.4rem 1.5rem;
  }
`;

const FavoriteBox = styled.div`
  flex: 1;

  h2 {
    display: none;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--color-grey-400);
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 600;
  }

  @media screen and (min-width: 1024px) {
    border: 1px solid var(--color-grey-400);
    border-radius: var(--border-radius-md);
    padding: 2.4rem;
    overflow: scroll;
    height: 82rem;

    h2 {
      display: block;
    }
  }
`;

const FilterBox = styled.div`
  & > div:first-child {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 4.5rem;
    margin-bottom: 1.6rem;
    & > div:last-child {
      display: block;
      flex: 1;
      font-size: 1.2rem;

      input {
        height: 4rem;
      }
    }

    & > div:first-child {
      display: flex;
      max-width: 60%;
    }
  }
`;

const filterItem = ["همه", "غذای اصلی", "پیش غذا", "دسر", "نوشیدنی"];
function Favorite() {
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.user.favorites);

  return (
    <StyledFavorite>
      <PositionInMobileView title="علاقمندی ها" />
      <DashboardAside />
      {favorites.length === 0 ? (
        <EmptyBox>
          <Empty height="50vh">
            <p>
              شما در حال حاضر هیچ محصولی را به علاقه‌مندی‌ها اضافه نکرده‌اید!
            </p>
            <Button variations="outline" onClick={() => navigate("/menu")}>
              منوی رستوران
            </Button>
          </Empty>
        </EmptyBox>
      ) : (
        <FavoriteBox>
          <h2>علاقمندی ها</h2>
          <FilterBox>
            <Filter items={filterItem} queryName="category" />
            <SearchBox />
          </FilterBox>
          <CardBox>
            {favorites?.map((item) => (
              <FavoriteCard key={item.id} item={item} />
            ))}
          </CardBox>
        </FavoriteBox>
      )}
    </StyledFavorite>
  );
}

export default Favorite;
