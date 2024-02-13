import styled from "styled-components";
import { formatDate } from "../utils/helpers";

const StyledComment = styled.div`
  width: 25.2rem;
  padding: 1.6rem;
  display: flex;
  gap: 1rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-sm);
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-white);
    &:not(:last-child) {
      gap: 0.6rem;
    }
  }
  @media screen and (min-width: 768px) {
    width: 40rem;
    padding: 2.2rem;
  }

  @media screen and (min-width: 1024px) {
    width: 60rem;
    padding: 3.2rem;

    & > div:last-child {
      justify-content: space-between;
    }
  }
`;

const InfoUser = styled.div`
  color: var(--color-grey-700);
  & > img {
    width: 5.6rem;
    height: 5.6rem;
    object-fit: cover;
    border-radius: 50%;
  }

  & > time,
  & > span {
    width: max-content;
  }

  @media screen and (min-width: 768px) {
    & > img {
      width: 7.6rem;
      height: 7.6rem;
    }

    & > time,
    & > span {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    & > img {
      width: 9.6rem;
      height: 9.6rem;
    }
    & > time,
    & > span {
      font-size: 1.4rem;
    }
  }
`;

const Message = styled.p`
  line-height: 180%;
  text-align: justify;

  @media screen and (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
  }
`;

const Rate = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 1.2rem;

  @media screen and (min-width: 768px) {
    font-size: 1.4rem;
    & > img {
      width: 1.8rem;
      height: 1.8rem;
    }
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
    & > img {
      width: 2rem;
      height: 2rem;
    }
  }
`;
function Comment({ comment }) {
  return (
    <StyledComment>
      <InfoUser>
        <img src={`${comment.avatar}`} alt="avatar" />
        <span>{comment.name}</span>
        <time>{formatDate(comment.date)}</time>
      </InfoUser>
      <div>
        <Message>{comment.message}</Message>
        <Rate>
          <img src={`./assets/svg/Rate-${comment.rate}.svg`} alt="rate" />
          <span>{comment.rate}</span>
        </Rate>
      </div>
    </StyledComment>
  );
}

export default Comment;
