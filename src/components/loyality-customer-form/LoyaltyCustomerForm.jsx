import React from "react";
import styles from "./LoyaltyCustomerForm.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { Snackbar } from "@mui/material";

export const LoyaltyCustomerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  // console.log(watch("fullName")); // watch input value by passing the name of it

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: "flex",
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        id="Full-Name"
        label="Full Name"
        variant="outlined"
        {...register("fullName", { required: true })}
      />
      {errors.fullName && (
        <Snackbar
          open={true}
          autoHideDuration={6000}
          message={"Full name is required"}
        />
      )}
      <TextField
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        {...register("phoneNumber", { required: true })}
      />
      {errors.phoneNumber && (
        <Snackbar
          open={true}
          autoHideDuration={6000}
          message={"Phone Number is required"}
        />
      )}
      <Button variant="outlined" type="submit" onSubmit={onSubmit}>
        Submit
      </Button>
    </Box>
  );
};
