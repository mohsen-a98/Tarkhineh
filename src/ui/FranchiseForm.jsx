import styled from "styled-components";
import { useForm } from "react-hook-form";
import Container from "./Container";
import Button from "./Button";
import FormRow from "./FormRow";
import { FolderAddIcon } from "../assets/svg";

const StyledFranchiseForm = styled.section`
  text-align: center;
  font-size: 1.4rem;
  margin: 2.4rem 0;
  color: var(--color-grey-800);

  & > div {
    padding: 1.6rem 1.2rem;
    border: 1px solid var(--color-grey-400);
    border-radius: var(--border-radius-sm);
  }

  & h2 {
    margin-bottom: 2.4rem;
  }

  & button {
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    margin: 4.8rem 0;

    & > div {
      padding: 3.2rem 2.4rem;
    }

    & h2 {
      margin-bottom: 4.8rem;
      font-size: 2.4rem;
    }

    & button {
      font-size: 1.6rem;
      font-weight: 500;
      padding: 0.8rem 1.6rem;
    }
  }
`;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.2rem;
  justify-items: center;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  & h3 {
    grid-column: 1 / -1;
    justify-self: start;
    font-size: 1.6rem;
    font-weight: 400;
  }

  & input,
  textarea {
    width: 100%;
    padding: 1rem 1.6rem;
    text-align: right;
    color: var(--color-grey-700);
    border: 1px solid var(--color-grey-400);
    border-radius: var(--border-radius-sm);

    &:focus {
      border: 2px solid var(--color-primary);
      border-radius: var(--border-radius-sm);
      outline: none;
    }
  }

  & textarea {
    resize: none;
  }

  &:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  & .form-row {
    width: 80%;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.6rem;

    &:nth-last-child(2) > div:last-child {
      grid-column: 2 / 4;
      grid-template-columns: repeat(3, 1fr);

      & h4 {
        grid-column: 2 / 4;
      }
    }

    & h3 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }

    & input,
    textarea,
    iframe {
      width: 100%;
    }

    & iframe {
      grid-column: 3 / 4;
      grid-row: 2 / 4;
      height: 100%;
    }

    & input {
      height: 4rem;
    }

    &:not(:last-child) {
      margin-bottom: 4.8rem;
    }

    & .form-row {
      width: 100%;
    }
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  row-gap: 2rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &:last-child {
    row-gap: 1rem;
  }

  & h4 {
    grid-column: 1 / -1;
    text-align: right;
    font-size: 1.4rem;
    font-weight: 400;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & input[type="checkbox"] {
    width: fit-content;
    accent-color: var(--color-primary);
  }

  & input[type="file"] {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    row-gap: 0;
    column-gap: 1rem;

    & h4 {
      font-size: 1.6rem;
    }

    & input[type="checkbox"] {
      width: 1.6rem;
      height: 1.6rem;
    }

    & label {
      font-size: 1.6rem;
      width: max-content;
    }
  }
`;

const AddFile = styled.div`
  grid-column: 1 / -1;
  & label {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border: 1px solid var(--color-grey-400);
    border-radius: var(--border-radius-sm);
    padding: 2.4rem 0;
  }

  @media screen and (min-width: 1024px) {
    grid-column: 2 / 4;
  }
`;
function FranchiseForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  function onSubmit(data) {
    const newData = {
      ...data,
      images: data.images[0].name,
    };
    console.log(newData);
    reset();
  }

  return (
    <StyledFranchiseForm>
      <Container>
        <h2>فرم درخواست نمایندگی</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <h3>مشخصات فردی متقاضی</h3>

            <FormRow error={errors?.name?.message}>
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                {...register("name", {
                  required: "نام و نام خانوادگی را وارد کنید",
                })}
              />
            </FormRow>
            <FormRow error={errors?.nationalCode?.message}>
              <input
                type="tel"
                placeholder="کدملی"
                {...register("nationalCode", {
                  required: "کدملی را وارد کنید",
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
          </FormGroup>

          <FormGroup>
            <h3>آدرس ملک متقاضی</h3>
            <FormRow error={errors?.ostan?.message}>
              <input
                type="text"
                placeholder="استان"
                {...register("ostan", { required: "استان را وارد کنید" })}
              />
            </FormRow>
            <FormRow error={errors?.area?.message}>
              <input
                type="text"
                placeholder="منطقه"
                {...register("area", { required: "منطقه را وارد کنید" })}
              />
            </FormRow>
            <FormRow error={errors?.city?.message}>
              <input
                type="text"
                placeholder="شهر"
                {...register("city", { required: "شهر را وارد کنید" })}
              />
            </FormRow>
            <FormRow error={errors?.address?.message}>
              <textarea
                cols="30"
                rows="10"
                placeholder="آدرس دقیق"
                {...register("address", { required: "آدرس دقیق را وارد کنید" })}
              ></textarea>
            </FormRow>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10361.127191961521!2d51.66473695001237!3d32.65466592035332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc35fe8c326799%3A0x7ab57816ef5837f5!2sIsfahan%2C%20Isfahan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1704618501861!5m2!1sen!2s"
              frameBorder="0"
              width="80%"
              style={{
                border: "1px solid var(--color-grey-400)",
                borderRadius: "var(--border-radius-sm)",
              }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </FormGroup>

          <FormGroup>
            <h3>مشخصات ملک متقاضی</h3>
            <FormRow error={errors?.typeOfOwnership?.message}>
              <input
                type="text"
                placeholder="نوع مالکیت"
                {...register("typeOfOwnership", {
                  required: "نوع مالکیت را وارد کنید",
                })}
              />
            </FormRow>
            <FormRow error={errors?.theAreaOfTheEstate?.message}>
              <input
                type="text"
                placeholder="مساحت ملک (متر مربع)"
                {...register("theAreaOfTheEstate", {
                  required: "مساحت ملک (متر مربع) را وارد کنید",
                })}
              />
            </FormRow>
            <FormRow error={errors?.ageOfTheHouse?.message}>
              <input
                type="text"
                placeholder="سن بنا"
                {...register("ageOfTheHouse", {
                  required: "سن بنا را وارد کنید",
                })}
              />
            </FormRow>
          </FormGroup>

          <FormGroup>
            <h3>امکانات ملک متقاضی</h3>

            <Row>
              <h4>ملک متقاضی:</h4>
              <div>
                <input
                  type="checkbox"
                  id="1"
                  value="true"
                  {...register("license")}
                />
                <label htmlFor="1">پروانه کسب دارد.</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="2"
                  value="true"
                  {...register("kitchen")}
                />
                <label htmlFor="2">آشپزخانه دارد.</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="3"
                  value="true"
                  {...register("parking")}
                />
                <label htmlFor="3">پارکینگ دارد.</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="4"
                  value="true"
                  {...register("warehouse")}
                />
                <label htmlFor="4">انبار دارد.</label>
              </div>
            </Row>

            <Row>
              <h4>تصاویر ملک</h4>
              <AddFile>
                <FormRow error={errors?.images?.message}>
                  <label htmlFor="file">
                    <FolderAddIcon /> تصاویری از ملک را بارگذاری کنید...
                  </label>
                  <input
                    type="file"
                    id="file"
                    {...register("images", {
                      required: "تصاویری از ملک را بارگذاری کنید",
                    })}
                  />
                </FormRow>
              </AddFile>
            </Row>
          </FormGroup>

          <Button>ثبت اطلاعات</Button>
        </form>
      </Container>
    </StyledFranchiseForm>
  );
}

export default FranchiseForm;
