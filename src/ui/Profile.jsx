import styled, { css } from "styled-components";
import { StyledContainer } from "./Container";
import FormRow from "./FormRow";
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import EditIcon from "../../public/assets/svg/outline-edit.svg?react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useEditUser } from "../features/user/useEditUser";
import DashboardAside from "./DashboardAside";
import PositionInMobileView from "./PositionInMobileView";

const StyledProfile = styled(StyledContainer)`
  padding: 2.4rem 0;

  form {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1.2rem;
    flex: 1;

    & > h2 {
      display: none;
    }

    & > div {
      position: relative;
    }
  }

  input {
    text-align: right;
    padding: 1.2rem 1.6rem;
    border: 1px solid var(--color-grey-400);
    border-radius: var(--border-radius-sm);
    color: var(--color-grey-700);
    font-size: 1.2rem;
    font-weight: 400;
    width: 100%;
    height: 4rem;

    &::placeholder {
      color: var(--color-grey-400);
    }

    &:focus {
      outline: none;
    }
  }

  label {
    position: absolute;
    right: 5%;
    top: -18%;
    font-size: 1rem;
    background-color: var(--color-white);
    padding: 0 5px;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  button {
    width: fit-content;
    margin: 0 auto;
  }

  ${(props) =>
    props.$isEdit === true &&
    css`
      input::placeholder {
        color: transparent;
      }

      input {
        outline: 1px solid var(--color-grey-800);
      }

      label {
        color: var(--color-grey-800);
      }
    `}

  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 2.4rem;

    form {
      grid-template-columns: 1fr 1fr;
      gap: 2.4rem 1.6rem;
      padding: 2.4rem;
      border: 1px solid var(--color-grey-400);
      border-radius: var(--border-radius-md);
      h2 {
        display: block;
        grid-column: 1 / -1;
        font-size: 2rem;
        font-weight: 600;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid var(--color-grey-400);
      }

      & > button {
        grid-column: 1 / -1;
      }

      input {
        font-size: 1.4rem;
      }

      button {
        font-size: 1.6rem;
        height: 4rem;
        padding: 0.8rem 1.6rem;
      }

      label {
        font-size: 1.2rem;
      }
    }
  }
`;

const BtnGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.6rem;

  button {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    button {
      height: 3.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    padding: 0 7rem;

    button {
      width: 13rem;
    }
  }
`;

function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const { editUser, isLoading } = useEditUser();
  const user = useSelector((state) => state.user.user);
  const date = user?.birthYear
    ? new Intl.DateTimeFormat("fa-IR").format(new Date(user?.birthYear))
    : "";
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  function onSubmit(data) {
    const t = data.birthYear;
    const birthYear =
      data.birthYear === ""
        ? ""
        : data.birthYear ===
          new Intl.DateTimeFormat("fa-IR").format(new Date(user.birthYear))
        ? user.birthYear
        : new Date(t?.toDate?.()).toLocaleDateString();
    const EditProfile = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      birthYear: birthYear,
      username: data.username,
    };
    editUser({ id: user.id, editUser: EditProfile });
  }

  return (
    <StyledProfile $isEdit={isEdit}>
      <PositionInMobileView title="پروفایل" />
      <DashboardAside />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>{isEdit ? "ویرایش اطلاعات شخصی" : "پروفایل من"}</h2>

        <FormRow>
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            readOnly={!isEdit}
            defaultValue={user.name}
            id="name"
            disabled={isLoading}
            {...register("name")}
          />
          {isEdit && <label htmlFor="name">نام و نام خانوادگی</label>}
        </FormRow>
        <FormRow>
          <input
            type="email"
            placeholder="آدرس ایمیل"
            readOnly={!isEdit}
            id="email"
            {...register("email")}
            disabled={isLoading}
            defaultValue={user.email}
          />
          {isEdit && <label htmlFor="email">آدرس ایمیل</label>}
        </FormRow>
        <FormRow error={errors?.phone?.message}>
          <input
            type="tel"
            placeholder="شماره تلفن"
            readOnly={!isEdit}
            defaultValue={user.phone}
            id="phone"
            {...register("phone", {
              pattern: {
                value: /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g,
                message: "شماره تماس را درست وارد کنید!",
              },
              maxLength: {
                value: 11,
                message: "شماره تماس باید 11 رقم باشد!",
              },
            })}
            disabled={isLoading}
          />
          {isEdit && <label htmlFor="phone">شماره همراه</label>}
        </FormRow>
        <FormRow>
          <Controller
            control={control}
            name="birthYear"
            defaultValue={date}
            render={({ field }) => (
              <DatePicker
                className="green"
                calendar={persian}
                locale={persian_fa}
                placeholder="تاریخ تولد (اختیاری)"
                readOnly={!isEdit}
                disabled={isLoading}
                {...field}
              />
            )}
          />
          {isEdit && <label htmlFor="birthYear">تاریخ تولد (اختیاری)</label>}
        </FormRow>
        <FormRow>
          <input
            type="text"
            placeholder="نام نمایشی"
            readOnly={!isEdit}
            id="username"
            {...register("username")}
            disabled={isLoading}
            defaultValue={user.username}
          />
          {isEdit && <label htmlFor="username">نام نمایشی</label>}
        </FormRow>
        {!isEdit && (
          <Button variations="outline" onClick={() => setIsEdit(true)}>
            <EditIcon />
            ویرایش اطلاعات شخصی
          </Button>
        )}
        {isEdit && (
          <BtnGroup>
            <Button
              variations="outline"
              onClick={() => setIsEdit(false)}
              disabled={isLoading}
            >
              انصراف
            </Button>
            <Button disabled={isLoading}>ذخیره اطلاعات</Button>
          </BtnGroup>
        )}
      </form>
    </StyledProfile>
  );
}

export default Profile;
