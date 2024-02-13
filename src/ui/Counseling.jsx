import styled from "styled-components";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "./Button";
import Container from "./Container";
import FormRow from "./FormRow";

const StyledCounseling = styled.section`
  & > div {
    padding: 2.4rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
    border-bottom: 1px solid var(--color-grey-400);
  }

  & h2 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
  }

  & button {
    margin: 0 auto;
  }

  & form {
    width: 100%;
    padding: 0 10%;
  }

  @media screen and (min-width: 1024px) {
    & h2 {
      font-size: 2.4rem;
      margin-bottom: 2.4rem;
    }

    & button {
      font-size: 1.6rem;
      padding: 0.8rem 1.6rem;
    }

    & form {
      padding: 0;
    }
  }
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.6rem;
  margin-bottom: 1.2rem;
  width: 100%;

  & input {
    width: 100%;
    padding: 1rem 1.6rem;
    border: 1px solid var(--color-grey-400);
    border-radius: var(--border-radius-sm);
    color: var(--color-grey-700);
    font-size: 1.4rem;
    text-align: right;
    height: 4rem;
  }

  & .rmdp-arrow-container {
    border: 1px solid var(--color-primary);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: auto; */
    /* display: grid;
    place-items: center; */
    width: 18px;
    height: 18px;

    & i {
      /* width: 8px;
      height: 8px; */
    }
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2.4rem;

    & .rmdp-arrow-container {
      width: 24px;
      height: 24px;
    }
  }
`;
function Counseling() {
  const { register, handleSubmit, reset, formState, control } = useForm();
  const { errors } = formState;

  const onSubmit = ({ name, phone, date }) => {
    if (!name && !phone && !date) return;
    const newData = {
      name,
      phone,
      date: new Date(date).toLocaleDateString(),
    };
    console.log(newData);
    reset();
    toast.success("درخواست شما با موفقیت ثبت شد");
  };

  return (
    <StyledCounseling>
      <Container>
        <h2>دریافت مشاوره</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <FormRow error={errors?.name?.message}>
              <input
                type="text"
                placeholder="نام و نام‌خانوادگی"
                {...register("name", {
                  required: "نام و نام‌خانوادگی را وارد کنید",
                })}
              />
            </FormRow>
            <FormRow error={errors?.phone?.message}>
              <input
                type="tel"
                placeholder="شماره تماس"
                {...register("phone", {
                  required: "شماره تماس را وارد کنید",
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
            <FormRow error={errors?.date?.message}>
              <Controller
                control={control}
                name="date"
                rules={{ required: "زمان ایده‌آل را وارد کنید" }}
                render={({ field }) => (
                  <DatePicker
                    className="green"
                    calendar={persian}
                    locale={persian_fa}
                    placeholder="زمان ایده‌آل"
                    {...field}
                  />
                )}
              />
            </FormRow>
          </InputGroup>
          <Button>درخواست مشاوره</Button>
        </form>
      </Container>
    </StyledCounseling>
  );
}

export default Counseling;
