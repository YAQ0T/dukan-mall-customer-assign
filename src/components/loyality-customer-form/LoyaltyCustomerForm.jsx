import React from "react";
import styles from "./LoyaltyCustomerForm.module.css";
import { useForm } from "react-hook-form";

export const LoyaltyCustomerForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("Full Name")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        placeholder="Full Name"
        defaultValue=""
        {...register("fullName", { required: true })}
      />
      {errors.phoneNumber && <span>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <input
        placeholder="Phone Number"
        {...register("phoneNumber", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.phoneNumber && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
