import { Snackbar } from "@mui/material";
import React from "react";

export const SnackbarComponent = ({ message }) => {
  return (
    <Snackbar
      open={true}
      autoHideDuration={6000}
      message={message}
      sx={{
        ".MuiPaper-root": {
          backgroundColor: "var(--primary-color)",
        },
      }}
    />
  );
};
