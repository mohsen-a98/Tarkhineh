import styled, { css } from "styled-components";

const Heading = styled.h1`
  font-weight: 700;
  line-height: 140%;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 4.4rem;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 4rem;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 3.2rem;
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2.4rem;
    `}

  ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 2rem;
    `}

  ${(props) =>
    props.as === "h6" &&
    css`
      font-size: 1.6rem;
    `}

  ${(props) =>
    props.as === "h7" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      line-height: 180%;
    `}
`;

export default Heading;
