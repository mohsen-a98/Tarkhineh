import styled from "styled-components";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  background-color: var(--color-white);
  padding: 1.2rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-sm);
  color: var(--color-grey-800);

  & img {
    width: 10rem;
  }

  & h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  & a {
    text-decoration: none;
    color: var(--color-primary);
  }

  @media screen and (min-width: 768px) {
    padding: 1.8rem;

    & h3 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    & img {
      width: 12rem;
    }

    & p {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 2.4rem;
    & h3 {
      font-size: 2rem;
      margin-bottom: 1.2rem;
    }

    & img {
      width: 14rem;
    }

    & p {
      font-size: 1.4rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & > div {
    position: relative;
  }

  & label {
    position: absolute;
    font-size: 1.2rem;
    top: -8px;
    right: 10px;
    background-color: var(--color-white);
  }

  & input {
    padding: 1rem;
    width: 26rem;
    font-size: 1.4rem;
    outline: none;
    border: 1px solid var(--color-grey-700);
    border-radius: var(--border-radius-sm);

    &:focus {
      border: 1px solid var(--color-primary);
    }
  }

  & button,
  & input {
    height: 4rem;
  }

  @media screen and (min-width: 768px) {
    & label {
      font-size: 1.4rem;
    }

    & input {
      font-size: 1.6rem;
      width: 40rem;
    }

    & button {
      font-size: 1.6rem;
    }
    & button,
    & input {
      height: 5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    gap: 2rem;
    & label {
      font-size: 1.6rem;
      top: -11px;
      right: 14px;
    }

    & input {
      font-size: 1.8rem;
      width: 45rem;
    }

    & button {
      font-size: 1.8rem;
    }
  }
`;

function Login({ onCloseModal }) {
  const { login, isLoading } = useLogin(onCloseModal);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  function onSubmit({ name, phone }) {
    if (!name || !phone) return;
    const user = {
      name,
      phone,
      email: "",
      birthYear: "",
      username: "",
    };
    login(user);
    reset();
  }
  return (
    <StyledLogin>
      <img src="./assets/svg/logo.svg" alt="logo" />
      <h3>ورود / ثبت ‌نام</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">نام و نام خانوادگی</label>
          <FormRow error={errors?.name?.message}>
            <input
              type="text"
              id="name"
              defaultValue="محسن"
              {...register("name", {
                required: "نام و نام خانوادگی را وارد کنید",
              })}
            />
          </FormRow>
        </div>
        <div>
          <label htmlFor="phone">شماره همراه</label>
          <FormRow error={errors?.phone?.message}>
            <input
              type="tel"
              id="phone"
              defaultValue="09999999999"
              {...register("phone", {
                required: "شماره همراه را وارد کنید",
                pattern: {
                  value: /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g,
                  message: "شماره تماس را درست وارد کنید!",
                },
                maxLength: {
                  value: 11,
                  message: "شماره تماس باید 11 رقم باشد!",
                },
              })}
            />
          </FormRow>
        </div>
        <Button disabled={!isDirty || !isValid}>
          {isLoading ? <SpinnerMini width="30px" /> : "ادامه"}
        </Button>
      </Form>
      <p>
        ورود و عضویت در ترخینه به منزله قبول <Link to="#">قوانین و مقررات</Link>{" "}
        است.
      </p>
    </StyledLogin>
  );
}

export default Login;
