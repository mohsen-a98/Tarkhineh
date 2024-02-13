import styled, { css } from "styled-components";

// styles sizes
const stylesForLargerSm = css`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 180%;
  padding: 0.8rem 1.6rem;
  gap: 0.8rem;
`;
const sizes = {
  sm: css`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 180%;
    height: 3.2rem;
  `,
  md: css`
    ${stylesForLargerSm};
    height: 4rem;
  `,
  lg: css`
    ${stylesForLargerSm};
    height: 4.8rem;
  `,
  xl: css`
    ${stylesForLargerSm};
    height: 5.6rem;
  `,
};
//styles colors
const color = {
  primary: css`
    color: var(--color-white);
    background-color: var(--color-primary);
    & path {
      fill: var(--color-white);
    }

    &:hover {
      background-color: var(--color-shade-200);
    }

    &:active {
      background-color: var(--color-shade-300);
    }
  `,
  white: css`
    color: var(--color-primary);
    background-color: var(--color-green-100);

    & path {
      fill: var(--color-primary);
    }

    &:hover {
      background-color: var(--color-green-200);
    }

    &:active {
      background-color: var(--color-green-300);
    }
  `,
  black: css`
    color: var(--color-white);
    background-color: var(--color-grey-700);

    & path {
      fill: var(--color-white);
    }

    &:hover {
      background-color: var(--color-grey-800);
    }

    &:active {
      background-color: var(--color-black);
    }
  `,
  red: css`
    color: var(--color-error);
    background-color: var(--color-error-extraLight);
  `,
};

const variations = {
  outline: {
    outlinePrimary: css`
      color: var(--color-primary);
      background-color: transparent;
      border: 1px solid var(--color-primary);

      & path {
        fill: var(--color-primary);
      }

      &:hover {
        color: var(--color-shade-200);
        background-color: inherit;
        border-color: var(--color-shade-200);
        & path {
          fill: var(--color-shade-200);
        }
      }

      &:active {
        color: var(--color-shade-300);
        background-color: inherit;
        border-color: var(--color-shade-300);
        & path {
          fill: var(--color-shade-300);
        }
      }
    `,
    outlineWhite: css`
      color: var(--color-white);
      background-color: transparent;
      border: 1px solid var(--color-white);

      & path {
        fill: var(--color-white);
      }

      &:hover {
        color: var(--color-grey-100);
        background-color: inherit;
        border-color: var(--color-grey-100);
        & path {
          fill: var(--color-grey-100);
        }
      }

      &:active {
        color: var(--color-grey-300);
        background-color: inherit;
        border-color: var(--color-grey-300);
        & path {
          fill: var(--color-grey-300);
        }
      }
    `,
    outlineBlack: css`
      color: var(--color-grey-700);
      background-color: transparent;
      border: 1px solid var(--color-grey-700);
      & path {
        fill: var(--color-grey-700);
      }

      &:hover {
        color: var(--color-grey-800);
        background-color: inherit;
        border-color: var(--color-grey-800);
        & path {
          fill: var(--color-grey-800);
        }
      }

      &:active {
        color: var(--color-black);
        background-color: inherit;
        border-color: var(--color-black);
        & path {
          fill: var(--color-black);
        }
      }
    `,
  },
  text: {
    textPrimary: css`
      background-color: transparent;
      color: var(--color-primary);
      & path {
        fill: var(--color-primary);
      }
      &:hover {
        color: var(--color-shade-200);
        background-color: inherit;
        & path {
          fill: var(--color-shade-200);
        }
      }

      &:active {
        color: var(--color-shade-300);
        background-color: inherit;
        & path {
          fill: var(--color-shade-300);
        }
      }
    `,
    textWhite: css`
      background-color: transparent;
      color: var(--color-white);
      & path {
        fill: var(--color-white);
      }
      &:hover {
        color: var(--color-grey-100);
        background-color: inherit;
        & path {
          fill: var(--color-grey-100);
        }
      }

      &:active {
        color: var(--color-grey-300);
        background-color: inherit;
        & path {
          fill: var(--color-grey-300);
        }
      }
    `,
    textBlack: css`
      background-color: transparent;
      color: var(--color-grey-700);
      & path {
        fill: var(--color-grey-700);
      }
      &:hover {
        color: var(--color-grey-800);
        background-color: inherit;
        & path {
          fill: var(--color-grey-800);
        }
      }

      &:active {
        color: var(--color-black);
        background-color: inherit;
        & path {
          fill: var(--color-black);
        }
      }
    `,
  },
};

const StyledButton = styled.button`
  border: none;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  border-radius: var(--border-radius-sm);

  ${(props) => sizes[props.$size]}
  ${(props) => color[props.$color]}

  //variation outline
  ${(props) =>
    props.$color === "primary" &&
    props.$variations === "outline" &&
    variations.outline.outlinePrimary}
  ${(props) =>
    props.$color === "white" &&
    props.$variations === "outline" &&
    variations.outline.outlineWhite}
  ${(props) =>
    props.$color === "black" &&
    props.$variations === "outline" &&
    variations.outline.outlineBlack}

  //variation text
  ${(props) =>
    props.$color === "primary" &&
    props.$variations === "text" &&
    variations.text.textPrimary}
  ${(props) =>
    props.$color === "white" &&
    props.$variations === "text" &&
    variations.text.textWhite}
  ${(props) =>
    props.$color === "black" &&
    props.$variations === "text" &&
    variations.text.textBlack}
    
    //style for disabled button
    &:disabled {
    color: var(--color-grey-400);
    background-color: var(--color-grey-300);
    cursor: not-allowed;
    & path {
      fill: var(--color-grey-400);
    }
  }
  ${(props) =>
    props.$variations === "outline" &&
    css`
      &:disabled {
        background-color: transparent;
        border-color: var(--color-grey-400);
      }
    `}
  ${(props) =>
    props.$variations === "text" &&
    css`
      &:disabled {
        background-color: transparent;
      }
    `}
`;

function Button({ size, variations, color, children, disabled, onClick }) {
  return (
    <StyledButton
      $size={size}
      $variations={variations}
      $color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  size: "sm",
  color: "primary",
};

export default Button;
