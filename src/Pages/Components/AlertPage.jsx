import React from "react";
import { Alert } from "@mui/material";

const AlertPage = ({ severity, alert }) => {
  return (
    <div>
      <Alert severity={severity}>{alert}</Alert>
    </div>
  );
};

export default AlertPage;
