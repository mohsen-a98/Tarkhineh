import styled from "styled-components";
import Button from "../../ui/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useSelector } from "react-redux";
import { useAddAddress } from "./useAddAddress";
import { useEditAddress } from "./useEditAddress";

const StyledAddAddress = styled.div`
  width: 32rem;
  form {
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    border-bottom-left-radius: var(--border-radius-md);
    border-bottom-right-radius: var(--border-radius-md);
    background-color: var(--color-white);

    input,
    textarea {
      text-align: right;
      padding: 1.2rem 1.6rem;
      border: 1px solid var(--color-grey-400);
      border-radius: var(--border-radius-sm);
      color: var(--color-grey-700);
      width: 100%;
    }

    textarea {
      resize: none;
    }

    & > div {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      label {
        color: var(--color-grey-800);
      }

      input[type="checkbox"] {
        accent-color: var(--color-primary);
      }
    }

    & > div:last-child {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 60rem;

    input {
      height: 5rem;
    }

    input,
    textarea,
    label {
      font-size: 1.4rem;
    }

    button {
      height: 4rem;
      font-size: 1.6rem;
    }
  }
`;

const Header = styled.div`
  text-align: center;
  background-color: var(--color-grey-300);
  height: 5.5rem;
  border-top-right-radius: var(--border-radius-md);
  border-top-left-radius: var(--border-radius-md);
  display: grid;
  place-items: center;

  h2 {
    font-size: 1.6rem;
    font-weight: 600;
  }

  @media screen and (min-width: 1024px) {
    h2 {
      font-size: 2rem;
    }
    height: 8rem;
  }
`;

function CreateEditAddress({ onCloseModal, address: add = {} }) {
  const { id: addressId, address } = add;
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(
    address?.isMyDelivery || false
  );
  const { addAddress: addAddressMutate, isLoading } = useAddAddress();
  const { editAddress, isLoading: isLoadingEdit } = useEditAddress();
  const user = useSelector((state) => state.user.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    const newAddress = data.isMyDelivery
      ? {
          title: data.title,
          isMyDelivery: data.isMyDelivery,
          name: user?.name,
          myPhone: data.myPhone,
          address: data.address,
        }
      : {
          title: data.title,
          isMyDelivery: data.isMyDelivery,
          name: data.name,
          phone: data.phone,
          address: data.address,
        };
    addressId
      ? editAddress({ addressId, address: newAddress })
      : addAddressMutate({
          id: user.id,
          address: newAddress,
        });

    if (!isLoading && !isLoadingEdit) {
      onCloseModal();
      reset();
    }
  }

  return (
    <StyledAddAddress>
      <Header>
        <h2>ثبت آدرس</h2>
      </Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow error={errors?.title?.message}>
          <input
            type="text"
            placeholder="عنوان آدرس"
            defaultValue={address?.title}
            {...register("title", { required: "عنوان آدرس را وارد کنید" })}
          />
        </FormRow>
        <div>
          <FormRow error={errors?.isMyDelivery?.message}>
            <input
              type="checkbox"
              id="checkbox"
              defaultChecked={address?.isMyDelivery}
              onClick={() => setIsCheckboxChecked(!isCheckboxChecked)}
              {...register("isMyDelivery")}
            />
          </FormRow>
          <label htmlFor="checkbox">تحویل گیرنده خودم هستم</label>
        </div>
        {isCheckboxChecked && (
          <FormRow error={errors?.phone?.message}>
            <input
              type="tel"
              placeholder="شماره همراه"
              defaultValue={address?.myPhone || user.phone}
              {...register("myPhone", {
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
        )}
        {!isCheckboxChecked && (
          <>
            <FormRow error={errors?.name?.message}>
              <input
                type="text"
                placeholder="نام و نام‌خانوادگی تحویل گیرنده"
                defaultValue={address?.name}
                {...register("name", {
                  required: "نام و نام‌خانوادگی را وارد کنید",
                })}
              />
            </FormRow>
            <FormRow error={errors?.phone?.message}>
              <input
                type="tel"
                placeholder="شماره همراه تحویل گیرنده"
                defaultValue={address?.phone}
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
          </>
        )}
        <FormRow error={errors?.address?.message}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="آدرس دقیق شما"
            defaultValue={address?.address}
            {...register("address", { required: "آدرس را وارد کنید" })}
          ></textarea>
        </FormRow>
        <div>
          <Button variations="text">ویرایش آدرس انتخابی</Button>
          <Button>ثبت آدرس</Button>
        </div>
      </form>
    </StyledAddAddress>
  );
}

export default CreateEditAddress;
