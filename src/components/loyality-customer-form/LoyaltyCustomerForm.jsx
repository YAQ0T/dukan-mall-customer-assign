import React, { useState } from "react";
// import styles from "./LoyaltyCustomerForm.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { SnackbarComponent } from "../snackbar-component/SnackbarComponent";

export const LoyaltyCustomerForm = () => {
  const { register, handleSubmit } = useForm();

  const [fullNameErrorOpen, setFullNameErrorOpen] = useState(false);
  const [phoneNumberErrorOpen, setPhoneNumberErrorOpen] = useState(false);

  const onSubmit = (data) => {
    if (!data.fullName || data.fullName.length <= 0) {
      setFullNameErrorOpen(true);
      setTimeout(() => {
        setFullNameErrorOpen(false);
      }, 6000);
    }

    if (
      !data.phoneNumber ||
      data.phoneNumber.length <= 0 ||
      !/^[0-9]{10}$/.test(data.phoneNumber)
    ) {
      setPhoneNumberErrorOpen(true);
      setTimeout(() => {
        setPhoneNumberErrorOpen(false);
      }, 6000);
    }

    console.log(data);
  };

  return (
    <Box
      className="container"
      sx={{
        minHeight: "40vh",
        alignItems: "center",
      }}
    >
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
          {...register("fullName")}
          sx={{
            "& *": {
              color: "var(--primary-color) !important",
              borderColor: "var(--primary-color) !important",
            },
          }}
        />
        {fullNameErrorOpen && (
          <SnackbarComponent message={"Full name is required."} />
        )}
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          {...register("phoneNumber")}
          sx={{
            "& *": {
              color: "var(--primary-color) !important",
              borderColor: "var(--primary-color) !important",
            },
          }}
        />
        {phoneNumberErrorOpen && (
          <SnackbarComponent
            message={
              "Phone number is required and must be 10 digits long and contain only numbers."
            }
          />
        )}
        <Button
          variant="contained"
          type="submit"
          sx={{
            "&.MuiButtonBase-root.MuiButton-root": {
              width: "218px",
            },
            "&": {
              color: "var(--secondary-color) !important",
              backgroundColor: "var(--primary-color) !important",
              borderColor: "var(--primary-color) !important",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};
