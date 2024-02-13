import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const StyledPageNotFound = styled.div`
  display: grid;
  place-items: center;
  height: 100dvh;
  & > div {
    padding: 1.6rem;
    h1 {
      font-size: 12rem;
      font-weight: 900;
      background: url("./assets/images/bg-pageNotFound.png");
      background-size: cover;
      background-position: center;
      color: transparent;
      background-clip: text;
      margin: 0;
    }

    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1.6rem;
    }

    p {
      font-size: 1.4rem;
      font-weight: 400;
      margin-bottom: 2rem;
      line-height: 140%;
    }

    button {
      width: 16rem;
      height: 4rem;
      font-size: 1.4rem;
      font-weight: 500;
    }
  }

  @media screen and (min-width: 1024px) {
    & > div {
      h1 {
        font-size: 18rem;
      }

      h2 {
        font-size: 2.4rem;
      }

      p {
        font-size: 1.6rem;
      }

      button {
        width: 20rem;
        height: 4.8rem;
        font-size: 1.6rem;
      }
    }
  }
`;

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <StyledPageNotFound>
      <div>
        <div>
          <h1>404</h1>
        </div>
        <h2>صفحه مورد نظر یافت نشد!</h2>
        <p>
          با عرض پوزش، صفحه مورد نظر شما وجود ندارد. حذف شده یا نام آن تغییر
          کرده یا به طور موقت در دسترس نیست.
        </p>
        <Button onClick={() => navigate("/")}>بازگشت به صفحه اصلی</Button>
      </div>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
