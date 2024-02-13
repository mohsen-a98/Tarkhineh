import styled, { css } from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useFoods } from "./useFoods";
import FoodMenuCategory from "./FoodMenuCategory";
import Container from "../../ui/Container";
import SearchBox from "../../ui/SearchBox";
import Filter from "../../ui/Filter";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import { CartIcon } from "../../assets/svg";
import { useState } from "react";
import { MatchNotFoundIcon } from "../../assets/svg";

const StyledMenuFoods = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  & > div:first-child {
    width: 100%;
  }

  & > div:nth-of-type(2) {
    width: 100%;
    margin-top: 0.8rem;
  }

  & > button {
    justify-self: end;
    transform: translateY(24px);
  }

  ${(props) =>
    props.$isOpenBtnCart === true &&
    css`
      & > button {
        display: none;
      }
    `}

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    & > div:nth-child(2) {
      display: block;
      padding-right: 1rem;
      font-size: 1.2rem;
    }

    & > div:not(:nth-child(1), :nth-child(2)) {
      grid-column: 1 / -1;
    }

    & > button {
      grid-column: 2 / 3;
      font-size: 1.6rem;
      font-weight: 500;
      padding: 0.8rem 1.6rem;

      & svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
`;

const EmptySearch = styled.div`
  display: grid;
  place-items: center;
  gap: 1.6rem;
  padding: 8rem 0;
  svg {
    width: 20rem;
    height: 20rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
  }

  @media screen and (min-width: 1024px) {
    svg {
      width: 30rem;
      height: 30rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;

function MenuFoods() {
  const [searchText, setSearchText] = useState("");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [searchParams] = useSearchParams();
  const { isLoading, foods, error } = useFoods();
  const filterValue = searchParams.get("category") || "همه";
  const navigate = useNavigate();
  const FilterItems = ["همه", ...new Set(foods?.map((food) => food.category))];

  if (isLoading) return <Spinner />;
  if (error) throw new Error(error.message);
  const searchFoods =
    searchText.length > 1
      ? foods.filter((food) => food.title.includes(searchText))
      : "";

  const filteredFoods =
    filterValue === "همه"
      ? foods
      : foods.filter((food) => food.category === filterValue);

  const categories = [...new Set(foods?.map((food) => food.category))];

  return (
    <Container>
      <StyledMenuFoods
        $isOpenBtnCart={searchFoods.length === 0 && searchText.length > 1}
      >
        <Filter items={FilterItems} queryName="category" />
        <SearchBox inputText={searchText} setInputText={setSearchText} />
        <Button
          variations="outline"
          onClick={() => {
            if (!isLoggedIn)
              return toast.error("برای خرید ابتدا باید وارد شوید");
            navigate("/shoppingCart");
          }}
        >
          <CartIcon />
          تکمیل خرید
        </Button>

        {searchFoods.length === 0 && searchText.length > 1 ? (
          <EmptySearch>
            <p>موردی با این مشخصات پیدا نکردیم!</p>
            <MatchNotFoundIcon />
          </EmptySearch>
        ) : searchFoods.length > 0 ? (
          <FoodMenuCategory title="جستجو" foods={searchFoods} />
        ) : filterValue !== "همه" ? (
          <FoodMenuCategory title={filterValue} foods={filteredFoods} />
        ) : (
          filterValue === "همه" &&
          categories.map((category, i) => (
            <FoodMenuCategory
              key={i}
              title={category}
              foods={foods.filter((food) => food.category === category)}
            />
          ))
        )}
      </StyledMenuFoods>
    </Container>
  );
}

export default MenuFoods;
